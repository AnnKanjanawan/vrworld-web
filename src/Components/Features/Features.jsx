import { BiSolidLike } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Luxury Facilities",
    icon: (
      // <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      <BiSolidLike className="text-5xl text-[#C8A97E] group-hover:text-black duration-300"/>
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Quality Products",
    icon: (
      <GiNotebook className="text-5xl text-[#C8A97E] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Affordable Price",
    icon: (
      <SlNote className="text-5xl text-[#C8A97E] group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold font-sans text-center sm:text-4xl mb-12"
          >
            What we provide
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 
                bg-gray-950
                hover:bg-gray-300
                hover:shadow-[0_10px_30px_rgba(229,231,235,0.9)]
                text-gray-200 hover:text-gray-900
                rounded-2xl duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl font-bold font-sans">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  href={data.link}
                  className="inline-block text-lg font-bold font-sans py-3 group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
