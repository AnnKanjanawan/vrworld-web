import { Link } from "react-router-dom";
import MOCK from "../../assets/MOCK.png";

const categories = [
  {
    id: 1,
    title: "ผ้าขนหนู",
    image: MOCK,
    link: "/product/bath-towel",
    className: "col-span-1 row-span-1",
    overlay: "light",
  },
  {
    id: 2,
    title: "ผ้าปูที่นอน",
    image: MOCK,
    link: "/product/bedding-set",
    className: "col-span-1 row-span-1",
    overlay: "light",
  },
  {
    id: 3,
    title: "ปลอกหมอน",
    image: MOCK,
    link: "/product/pillowcase",
    className: "col-span-2 row-span-1",
    overlay: "dark",
  },
  {
    id: 4,
    title: "ผ้านวม",
    image: MOCK,
    link: "/product/duvet-insert",
    className: "col-span-1 row-span-1",
    overlay: "light",
  },
  {
    id: 5,
    title: "หมอน",
    image: MOCK,
    link: "/product/pillow",
    className: "col-span-2 row-span-1",
    overlay: "light",
  },
  {
    id: 6,
    title: "ท็อปเปอร์",
    image: MOCK,
    link: "/product/topper",
    className: "col-span-1 row-span-1",
    overlay: "light",
  },
  {
    id: 7,
    title: "ที่นอน Pocket Coil",
    image: MOCK,
    link: "/product/pocket-coil",
    className: "col-span-4 row-span-1",
    overlay: "dark-soft",
  },
];

const CategoryCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className={`group relative block overflow-hidden rounded-[24px] border border-[#ecece8] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#7F8B72]/25 hover:shadow-[0_18px_40px_rgba(127,139,114,0.14)] ${item.className}`}
    >
      <div className="relative h-[160px] w-full overflow-hidden sm:h-[200px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        {item.overlay === "dark" && (
          <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/25" />
        )}

        {item.overlay === "dark-soft" && (
          <div className="absolute inset-0 bg-black/22 transition duration-500 group-hover:bg-black/14" />
        )}

        {item.overlay === "light" && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/8" />
        )}

        {/* light sweep */}
        <div
          className="
            pointer-events-none absolute inset-y-0 -left-1/2 w-1/2
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            skew-x-[-20deg] opacity-0 transition duration-1000
            group-hover:left-[120%] group-hover:opacity-100
          "
        />

        {/* glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7F8B72]/12 blur-3xl" />
        </div>

        {/* text */}
        <div className="absolute left-4 bottom-4 z-10">
            <span
                className="
                px-5 py-1
                rounded-full
                bg-white/85
                backdrop-blur-md
                border border-[#dcdcdc]
                text-[#7F8B72]
                text-sm
                font-semibold
                tracking-wide
                shadow-sm
                transition
                group-hover:scale-105
                "
            >
                {item.title}
            </span>
            </div>
      </div>
    </Link>
  );
};

const CategoryProductSection = () => {
  return (
    <section
      id="category-products"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* soft section glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[#7F8B72]/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#7F8B72]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#7F8B72] sm:text-4xl md:text-5xl">
                หมวดหมู่สินค้า
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-full w-full bg-[#d8d8d4]" />
        </div>

        {/* Desktop / Tablet Masonry-like grid */}
        <div className="hidden grid-cols-4 gap-4 md:grid">
          {categories.slice(0, 6).map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom full-width card */}
        <div className="mt-4 hidden md:block">
          <CategoryCard item={categories[6]} />
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              item={{ ...item, className: "col-span-1 row-span-1" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProductSection;