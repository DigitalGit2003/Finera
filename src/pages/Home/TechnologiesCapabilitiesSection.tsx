import Slider from "react-slick";

const technologies = [
  {
    name: "Xero",
    img: "https://logos-world.net/wp-content/uploads/2022/05/Xero-Logo.png"
  },
  {
    name: "QuickBooks",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/QuickBooks_logo.png"
  },
  {
    name: "Zoho Books",
    img: "https://media.licdn.com/dms/image/D4D0BAQEvMoPBX9J77g/company-logo_200_200/0/1702959415275?e=2147483647&v=beta&t=1eQwI8hncTe96WkBKSqunNNO3J2_Gv1nf6Jfq8g4X3o"
  },
  {
    name: "SAP",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
  },
  {
    name: "Oracle",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  },
  {
    name: "FreshBooks",
    img: "https://cdn.worldvectorlogo.com/logos/freshbooks-1.svg"
  },
  // ...add more!
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 5, // Show 5 on desktop!
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
        <div key={tech.name} className="flex flex-col items-center justify-center px-6 py-10">
          <img
            src={tech.img}
            alt={tech.name}
            className="w-24 h-24 object-contain rounded-full bg-gray-100 mb-4 shadow"
          />
          <span className="text-xl font-medium">{tech.name}</span>
        </div>
      ))}
    </Slider>
  </section>
);

export default TechnologiesCapabilitiesSection;
