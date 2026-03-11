import { Link } from "react-router-dom";
import MOCK from "../../assets/MOCK.png";

const products = [
  {
    id: 1,
    title: "ชุดผ้าปูที่นอน",
    description:
      "สร้างความประทับใจตั้งแต่สัมผัสแรก ยกระดับคะแนนรีวิวให้โรงแรมของคุณ",
    metric: "ดูรายละเอียด",
    image: MOCK,
    link: "/product/bedding-set",
  },
  {
    id: 2,
    title: "เครื่องนอน",
    description:
      "เติมเต็มสัมผัสแห่งการพักผ่อน โอบกอดแขกของคุณด้วยความนุ่มสบายดุจปุยเมฆ",
    metric: "ดูรายละเอียด",
    image: MOCK,
    link: "/product/bedding",
  },
  {
    id: 3,
    title: "ที่นอน",
    description:
      "จบปัญหารีวิว 'เตียงแข็ง ปวดหลัง' ด้วยที่นอนสเปกโรงแรมชั้นนำ",
    metric: "ดูรายละเอียด",
    image: MOCK,
    link: "/product/mattress",
  },
];

const ProductSection = () => {
  return (
    <section id="projects" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
            Products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-[0_6px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-[220px] overflow-hidden bg-[#e9e9e9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              </div>

              <div className="bg-gradient-to-b from-white to-[#f8f8f8] p-4">
                <h3 className="text-lg font-semibold leading-snug text-[#111111]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#555555]">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-[#e7e7e7] pt-3">
                  <Link
                    to={item.link}
                    className="text-sm font-semibold text-[#7F8B72] transition hover:text-[#65725a]"
                  >
                    ↗ {item.metric}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;