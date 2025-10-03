import Slider from "react-slick";

const technologies = [
  { name: "Sage", img: "./tech1.jpg" },
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
  slidesToShow: 5, // Show 5 on desktop!
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "ease-in-out",
  arrows: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 900, settings: { slidesToShow: 3 } },
    { breakpoint: 600, settings: { slidesToShow: 2 } },
  ],
};

const TechnologiesCapabilitiesSection = () => (
  <section className="py-16 px-5 bg-white max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
      Technologies & Capabilities
    </h2>
    <Slider {...settings}>
      {technologies.map((tech) => (
  <div key={tech.name} className="flex flex-col items-center justify-center px-6 py-10 w-full">
          <img
            src={tech.img}
            alt={tech.name}
            className="w-24 h-24 object-contain rounded-full bg-gray-100 mb-4 shadow mx-auto"
          />
          <span className="text-xl font-medium w-full text-center flex justify-center">{tech.name}</span>
        </div>
      ))}
    </Slider>
  </section>
);

export default TechnologiesCapabilitiesSection;
