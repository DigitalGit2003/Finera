import Slider from "react-slick";

const technologies = [
  { name: "Sage", img: "/tech1.jpg" },
  { name: "Xero", img: "/tech2.jpg" },
  { name: "FreshBooks", img: "/tech3.jpg" },
  { name: "TaxCal", img: "/tech4.jpg" },
  { name: "Hubdoc", img: "/tech5.jpg" },
  { name: "QuickBooks", img: "/tech6.jpg" },
  { name: "FreeAgent", img: "/tech7.jpg" },
  { name: "IRIS", img: "/tech8.jpg" },
  { name: "Moneysoft", img: "/tech9.jpg" },
  { name: "BrightPay", img: "/tech10.jpg" },
  { name: "AutoEntry", img: "/tech11.jpg" },
  { name: "Dext", img: "/tech12.jpg" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "ease-in-out",
  arrows: false,
  mobileFirst: true,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 1536, settings: { slidesToShow: 6 } },
  ],
};

const TechnologiesCapabilitiesSection = () => (
  <section className="py-12 md:py-16 px-4 sm:px-6 bg-white max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
      Technologies & Capabilities
    </h2>
    <Slider {...settings}>
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center px-2 sm:px-4 py-8 md:py-10 w-full"
        >
          <img
            src={tech.img}
            alt={tech.name}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-full bg-gray-100 mb-3 md:mb-4 shadow mx-auto"
          />
          <span className="text-sm sm:text-base lg:text-lg font-medium w-full text-center leading-tight break-words min-h-[2.5rem] flex items-center justify-center">
            {tech.name}
          </span>
        </div>
      ))}
    </Slider>
  </section>
);

export default TechnologiesCapabilitiesSection;
