import { Link } from "react-router-dom";
// import MOCK from "../../assets/MOCK.png";

import OurProductBedSheet from "../../assets/OurProductBedSheet.jpg"
import OurProductDuvetCover from "../../assets/OurProductDuvetCover.jpg"
import OurProductTowel from "../../assets/OurProductTowel.jpg"
import OurProductPillow from "../../assets/OurProductPillow.jpg"
import OurProductMattressProtect from "../../assets/OurProductMattressProtect.jpg"
import OurProductTopper from "../../assets/OurProductTopper.jpg"
import OurProductDuvetInner from "../../assets/OurProductDuvetInner.jpg"
import OurProductPocketCoil from "../../assets/OurProductPocketCoil.jpg"

const categories = [
  {
    id: 1,
    title: "ผ้าปูที่นอน Cotton 100%",
    image: OurProductBedSheet,
    link: "/product/bedding-set",
  },
  {
    id: 2,
    title: "ปลอกผ้านวม",
    image: OurProductDuvetCover,
    link: "/product/duvet-cover",
  },
  {
    id: 3,
    title: "ผ้าขนหนู",
    image: OurProductTowel,
    link: "/product/bath-towel",
  },
  {
    id: 4,
    title: "หมอน",
    image: OurProductPillow,
    link: "/product/pillow",
  },
  {
    id: 5,
    title: "ผ้าปูกันเปื้อน",
    image: OurProductMattressProtect,
    link: "/product/mattress-protector",
  },
  {
    id: 6,
    title: "ท็อปเปอร์",
    image: OurProductTopper,
    link: "/product/topper",
  },
  {
    id: 7,
    title: "ผ้านวม",
    image: OurProductDuvetInner,
    link: "/product/duvet-insert",
  },
  {
    id: 8,
    title: "ที่นอน Pocket Coil",
    image: OurProductPocketCoil,
    link: "/product/pocket-coil",
  },
];

const OurProductSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAE6E2] py-20 md:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[#7F8B72]/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#7F8B72]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-4">
            <h2 className="shrink-0 text-3xl font-semibold tracking-tight text-[#C5802D] sm:text-3xl md:text-4xl">
              สินค้าของเรา
            </h2>
            <div className="h-px w-full bg-[#d8d8d4]" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link key={item.id} to={item.link} className="group block">
              <article className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7F8B72]/10 blur-3xl" />
                </div>

                {/* image */}
                <div className="relative aspect-square overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
                </div>
              </article>

              {/* title */}
              <div className="pt-4 text-center">
                <h3 className="text-lg font-medium text-[#332E2A] transition duration-300 group-hover:text-[#A89880] sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;