import React from "react";
import Image1 from "../../assets/MOCK.png";

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
        <h1 className="text-4xl font-semibold">Products</h1>
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
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
