import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export interface AnimatedServiceSectionProps {
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  imageBadgeClass: string;
  borderClass: string;
  title: string;
  children: ReactNode;
}

function isElementPartiallyVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

function AnimatedServiceSection({
  imageSrc,
  imageAlt,
  imageBadge,
  imageBadgeClass,
  borderClass,
  title,
  children,
}: AnimatedServiceSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const hasShownRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      if (hasShownRef.current) return;
      hasShownRef.current = true;
      void controls.start("visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
        }
      },
      {
        // Any overlap counts — 0.3 was skipping tall sections barely entering the viewport.
        threshold: 0,
        rootMargin: "120px 0px",
      }
    );

    observer.observe(el);

    // Observer callbacks are async — if we're already visible (typical hero + section below fold),
    // show immediately so content never sticks at opacity: 0.
    queueMicrotask(() => {
      if (hasShownRef.current) return;
      if (isElementPartiallyVisible(el)) {
        show();
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <div ref={ref} className="mb-16 md:mb-32">
      <div className="relative">
        {/* Desktop: Overlapping Image */}
        <motion.div
          className="hidden lg:block absolute -top-8 -left-4 z-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, type: "spring" },
            },
          }}
        >
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-[300px] h-[320px] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
            <div
              className={`absolute top-4 right-4 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-md ${imageBadgeClass}`}
            >
              {imageBadge}
            </div>
          </div>
        </motion.div>

        {/* Mobile: Image on Top */}
        <motion.div
          className="lg:hidden mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, type: "spring" },
            },
          }}
        >
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-2xl shadow-lg"
            />
            <div
              className={`absolute top-4 right-4 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-md ${imageBadgeClass}`}
            >
              {imageBadge}
            </div>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="lg:ml-64 lg:pt-32"
          initial={{ y: 80, opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, type: "spring" },
            },
          }}
        >
          <div
            className={`border-2 border-dashed rounded-2xl p-6 md:p-12 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${borderClass}`}
          >
            <div className="md:px-4 md:py-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight break-words">
                {title}
              </h2>
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AnimatedServiceSection;
