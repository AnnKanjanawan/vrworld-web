import Image1 from "../../assets/MOCK.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ProductData = [
  {
    image: Image1,
    // rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    price: "฿1000",
    name: "Product Name 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Image1,
    // rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    price: "฿1000",
    name: "Product Name 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Image1,
    // rating: "⭐ ⭐ ⭐ ⭐ ⭐",
    price: "฿1000",
    name: "Product Name 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const TopList = () => {
  return (
    <div id="products" className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-3xl font-bold font-sans"
            >
              Products
            </motion.h1>
        {/* <p>Product list</p> */}
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {ProductData.map((item, index) => (
          <div
            key={index}
            className="bg-gray/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-bold font-sans">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-bold font-sans">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
