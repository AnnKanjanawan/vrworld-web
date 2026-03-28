import { Link } from "react-router-dom";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import MOCK from "../../assets/MOCK.png";
import ProductBedSet from "../../assets/ProductBedSet.jpg";
import ProductBedding from "../../assets/ProductBedding.jpg";
import ProductMattress from "../../assets/ProductMattress.jpg";

const products = [
  {
    id: 1,
    title: "ชุดผ้าปูที่นอน",
    description:
      "สร้างความประทับใจตั้งแต่สัมผัสแรก ยกระดับคะแนนรีวิวให้โรงแรมของคุณ",
    metric: "ดูรายละเอียด",
    image: ProductBedSet,
    link: "/product/bedding-set",
  },
  {
    id: 2,
    title: "เครื่องนอน",
    description:
      "เติมเต็มสัมผัสแห่งการพักผ่อน โอบกอดแขกของคุณด้วยความนุ่มสบายดุจปุยเมฆ",
    metric: "ดูรายละเอียด",
    image: ProductBedding,
    link: "/product/bedding",
  },
  {
    id: 3,
    title: "ที่นอน",
    description:
      "จบปัญหารีวิว 'เตียงแข็ง ปวดหลัง' ด้วยที่นอนสเปกโรงแรมชั้นนำ",
    metric: "ดูรายละเอียด",
    image: ProductMattress,
    link: "/product/mattress",
  },
];

const ProductCard = ({ item }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="
        group relative overflow-hidden rounded-[30px]
        bg-[#FAF7F2]  
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-#B5ADA4
        hover:shadow-[0_20px_55px_rgba(127,139,114,0.18)]
      "
    >
      {/* border glow สีเขียวอ่อน */}
      {/*  */}

      {/* spotlight ตามเมาส์ */}
      <div
        className={`
          pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500
          ${isHover ? "opacity-100" : "opacity-0"}
        `}
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.38), transparent 38%)`,
        }}
      />

      {/* inner glow border */}
      {/* <div
        className={`
          pointer-events-none absolute inset-[1px] rounded-[29px] transition-opacity duration-500
          ${isHover ? "opacity-100" : "opacity-0"}
        `}
        style={{
          boxShadow: `inset 0 0 0 1px rgba(127,139,114,0.22), 0 0 30px rgba(127,139,114,0.10)`,
        }}
      /> */}

      {/* hover glow background */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#B5ADA4] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#B5ADA4] blur-3xl" />
      </div> */}

      {/* Image */}
      <div className="relative h-[240px] overflow-hidden bg-[#e9e9e6] sm:h-[260px]">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full w-full object-cover
            scale-100 transition duration-1000 ease-out
            group-hover:scale-110
          "
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-80" />

        {/* light sweep */}
        <div
          className="
            pointer-events-none absolute inset-y-0 -left-1/2 w-1/2
            bg-gradient-to-r from-transparent via-white/25 to-transparent
            skew-x-[-20deg] opacity-0 transition duration-1000
            group-hover:left-[120%] group-hover:opacity-100
          "
        />

        {/* top label */}
        {/* <div className="absolute left-4 top-4 z-[2]">
          <span className="rounded-full border border-white/30 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#111111] backdrop-blur-md">
            HOTEL ESSENTIAL
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-[2] bg-gradient-to-b from-white/95 via-[#fbfbfa]/95 to-[#f6f6f3]/95 p-5 sm:p-6">
        <h3 className="text-xl font-semibold leading-snug text-[#111111] sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#5f5f5f] sm:text-base">
          {item.description}
        </p>

        <div className="mt-5 border-t border-[#ecece8] pt-4">
          <Link
            to={item.link}
            className="
              inline-flex items-center gap-2
              text-sm font-semibold text-[#A89880]
              transition-all duration-300
              hover:gap-3 hover:text-[#9E9589]
            "
          >
            ดูรายละเอียด
            <span
              className="
                flex h-7 w-7 items-center justify-center rounded-full
                border border-[#7F8B72]/25 bg-[#7F8B72]/5
                transition-all duration-300
                group-hover:border-[#7F8B72]/40
                group-hover:bg-[#7F8B72]/10
              "
            >
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProductSection = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-20 md:py-28 bg-[#FBF9F5]"
    >
      {/* section background glow */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#7F8B72]/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#7F8B72]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#ffffff] blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-semibold text-[#A89880] sm:text-3xl md:text-4xl whitespace-nowrap">
              สินค้าสำหรับโรงแรม
            </h2>
            <div className="h-px w-full bg-[#d8d8d4]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;