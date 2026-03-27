import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  FiPhone,
  FiMessageCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import MOCK from "../../assets/MOCK.png";
import Navbar from "../Navbar/Navbar";
// import ผ้าปูที่นอน from "../../assets/ผ้าปูที่นอน.png";
import { label } from "framer-motion/client";

const productData = {
  "bedding-set": {
    title: "ผ้าปูที่นอน",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "ชนิดผ้า", value: "Cotton 100% / CVC" },
      { label: "จำนวนเส้นด้าย (TC)", value: "200-500 เส้นด้าย" },
    ],
  },

  bedding: {
    title: "เครื่องนอน",
    subtitle: "เติมเต็มสัมผัสแห่งการพักผ่อนให้แขกของคุณ",
    price: "เริ่มต้น 890 บาท / เซ็ต",
    description:
      "เติมเต็มสัมผัสแห่งการพักผ่อน โอบกอดแขกของคุณด้วยความนุ่มสบายดุจปุยเมฆ เหมาะสำหรับโรงแรม รีสอร์ท และห้องพักทุกระดับ ให้ความรู้สึกสบายและดูสะอาดตา",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Microfiber / Cotton" },
      { label: "ชุดประกอบด้วย", value: "ปลอกหมอน ผ้านวม ผ้าปูรอง" },
      { label: "สี", value: "ขาว / เทาอ่อน" },
      { label: "จุดเด่น", value: "นุ่ม เบา ซักง่าย แห้งไว" },
      { label: "เหมาะสำหรับ", value: "ห้องพักโรงแรมและรีสอร์ท" },
    ],
  },

  mattress: {
    title: "ที่นอน",
    subtitle: "รองรับสรีระ หลับสบาย ยกระดับประสบการณ์การเข้าพัก",
    price: "เริ่มต้น 4,990 บาท / หลัง",
    description:
      "จบปัญหารีวิว 'เตียงแข็ง ปวดหลัง' ด้วยที่นอนสเปกโรงแรมชั้นนำ รองรับสรีระ นอนสบาย และช่วยยกระดับประสบการณ์การเข้าพักของแขกได้อย่างชัดเจน",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Pocket Spring / Hybrid" },
      { label: "ความหนา", value: "8 - 12 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Medium - Firm" },
      { label: "จุดเด่น", value: "รองรับสรีระ ลดแรงกดทับ" },
      { label: "เหมาะสำหรับ", value: "โรงแรมระดับมาตรฐานถึงพรีเมียม" },
    ],
  },

  pillowcase: {
    title: "ปลอกหมอน",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ขนาด", value: "20”x30”+6” / 21”x37”+6”" },
      { label: "ชนิดผ้า", value: "Cotton 100% / CVC" },
      { label: "จำนวนเส้นด้าย (TC)", value: "200-500 เส้นด้าย" },
    ],
  },

  "duvet-cover": {
    title: "ปลอกผ้านวม",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "ชนิดผ้า", value: "Cotton 100% / CVC" },
      { label: "จำนวนเส้นด้าย (TC)", value: "200-500 เส้นด้าย" },
    ],
  },

  "bath-towel": {
    title: "ผ้าขนหนูเช็ดตัว",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "27”x54” / 30”x60”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "14-20 ปอนด์ / โหล" },
    ],
  },

  "hair-towel": {
    title: "ผ้าขนหนูเช็ดผม",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "14”x28” / 15”x30”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "3.5-5 ปอนด์ / โหล" },
    ],
  },

  "face-towel": {
    title: "ผ้าขนหนูเช็ดหน้า",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "12”x12” / 12”x20”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "1.5-2 ปอนด์ / โหล" },
    ],
  },

  "foot-towel": {
    title: "ผ้าขนหนูเช็ดเท้า",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "20”x28” / 20”x30”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "7-10 ปอนด์ / โหล" },
    ],
  },

  pillow: {
    title: "หมอน",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "ขนาด", value: "19”x29” / 20”x36”" },
      { label: "วัสดุภายใน", value: "Microfiber / Microgel" },
      { label: "ชนิดผ้า", value: "Cotton 233 / Microfiber" },
      { label: "น้ำหนัก", value: "900-1,600 gram" },
    ],
  },

  "mattress-protector": {
    title: "ผ้าปูกันเปื้อน",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Microfiber" },
      { label: "ชนิดผ้า", value: "กันน้ำ / ไม่กันน้ำ" },
      { label: "น้ำหนัก", value: "150 / 200 gsm." },
    ],
  },

  topper: {
    title: "ท็อปเปอร์",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Cotton 100% / CVC" },
      { label: "ชนิดผ้า", value: "200-500 เส้นด้าย" },
      { label: "น้ำหนัก", value: "500 / 800 gsm." },
    ],
  },

  "duvet-insert": {
    title: "ผ้านวม",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Microfiber" },
      { label: "ชนิดผ้า", value: "Cotton 233 / Microfiber" },
      { label: "น้ำหนัก", value: "150-350 gsm." },
    ],
  },

  "pocket-coil": {
    title: "ที่นอน Pocket Coil",
    images: [MOCK],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุหลัก", value: "Titanium Pocket Coil" },
      { label: "หมายเหตุ", value: "สามารถผลิตตามสเปคที่ต้องการได้" },
    ],
  },

  "bonnel-coil": {
    title: "ที่นอน Bonnel Coil",
    subtitle: "แข็งแรง คุ้มค่า เหมาะกับการใช้งานต่อเนื่อง",
    price: "เริ่มต้น 4,900 บาท / หลัง",
    description:
      "ที่นอน Bonnel Coil เป็นตัวเลือกที่คุ้มค่า แข็งแรง เหมาะกับโรงแรมที่ต้องการที่นอนมาตรฐานใช้งานทนและดูแลรักษาง่าย",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Bonnel Coil" },
      { label: "ความหนา", value: "8 - 10 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Firm" },
      { label: "จุดเด่น", value: "ทน คุ้มค่า รองรับดี" },
      { label: "เหมาะสำหรับ", value: "โรงแรมมาตรฐาน อพาร์ตเมนต์" },
    ],
  },

  "latex-mattress": {
    title: "ที่นอนยางพารา",
    subtitle: "สัมผัสแน่นนุ่ม รองรับสรีระดี ระบายอากาศเยี่ยม",
    price: "เริ่มต้น 8,900 บาท / หลัง",
    description:
      "ที่นอนยางพาราให้สัมผัสแน่นนุ่ม รองรับสรีระได้ดี ระบายอากาศเยี่ยม เหมาะกับโรงแรมที่ต้องการยกระดับประสบการณ์การพักผ่อน",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Latex Mattress" },
      { label: "ความหนา", value: "6 - 10 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Medium" },
      { label: "จุดเด่น", value: "ยืดหยุ่นดี ระบายอากาศดี" },
      { label: "เหมาะสำหรับ", value: "โรงแรมพรีเมียม รีสอร์ท" },
    ],
  },

  "foam-mattress": {
    title: "ที่นอนโฟมอัด",
    subtitle: "แน่น ทน รองรับดี เหมาะกับการใช้งานคุ้มค่า",
    price: "เริ่มต้น 3,900 บาท / หลัง",
    description:
      "ที่นอนโฟมอัดสำหรับโรงแรม เป็นตัวเลือกที่ใช้งานคุ้มค่า โครงสร้างแน่น รองรับได้ดี และดูแลรักษาง่าย",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Foam Mattress" },
      { label: "ความหนา", value: "6 - 8 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Firm" },
      { label: "จุดเด่น", value: "แน่น ทน คุ้มค่า" },
      { label: "เหมาะสำหรับ", value: "โรงแรมมาตรฐาน หอพัก อพาร์ตเมนต์" },
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug];
  const images = useMemo(() => product?.images || [MOCK], [product]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) {
    return (
      <section className="min-h-screen bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          {/* <Link
            to="/"
            className="mb-8 inline-block text-sm font-semibold text-[#7F8B72] hover:underline"
          >
            ← กลับหน้าแรก
          </Link> */}

          <h1 className="text-3xl font-semibold text-[#111111]">
            ไม่พบข้อมูลสินค้า
          </h1>
        </div>
      </section>
    );
  }

  // const prevImage = () => {
  //   setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  // const nextImage = () => {
  //   setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  // };

  return (
    <section className="min-h-screen bg-white px-5 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        {/* <Link
          to="/"
          className="mb-8 inline-block text-sm font-semibold text-[#7F8B72] transition hover:text-[#65725a] hover:underline"
        >
          ← กลับหน้าแรก
        </Link> */}

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <div>
            <div className="">
              <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[24px]">
                <div className="group relative">
                  <img
                    src={images[selectedIndex]}
                    alt={product.title}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110 sm:h-[360px] lg:h-[420px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />

                  {/* <button
                    onClick={prevImage}
                    type="button"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-[#111111] shadow-md backdrop-blur transition hover:bg-white"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextImage}
                    type="button"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-[#111111] shadow-md backdrop-blur transition hover:bg-white"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={18} />
                  </button> */}
                </div>
              </div>

              {/* <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`shrink-0 overflow-hidden rounded-2xl border transition ${
                      selectedIndex === index
                        ? "border-[#7F8B72] ring-2 ring-[#7F8B72]/20"
                        : "border-[#e5e5e5] hover:border-[#cfd5c8]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                    />
                  </button>
                ))}
              </div> */}
            </div>
          </div>

          <div>
            <div className="lg:sticky lg:top-24">
              <p className="inline-flex rounded-full border border-[#7F8B72]/20 bg-[#7F8B72]/10 px-4 py-2 text-sm font-medium text-[#7F8B72]">
                Product Detail
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl md:text-5xl">
                {product.title}
              </h1>

              <p className="mt-3 text-base text-[#7F8B72] md:text-lg">
                {product.subtitle}
              </p>

              <p className="mt-5 text-base leading-8 text-[#555555] md:text-lg">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7F8B72] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6b775f]"
                >
                  <FiMessageCircle size={18} />
                  LINE สอบถาม
                </a>

                <a
                  href="tel:0826249996"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  <FiPhone size={18} />
                  โทรเลย
                </a>
              </div>

              <div className="mt-10 overflow-hidden rounded-[24px] border border-[#e7e7e7] bg-white shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
                <div className="border-b border-[#ececec] bg-[#f8f8f8] px-5 py-4">
                  <h2 className="text-lg font-semibold text-[#111111]">
                    ข้อมูลสินค้า (Product Specific)
                  </h2>
                </div>

                <div className="divide-y divide-[#efefef]">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[160px_1fr]"
                    >
                      <p className="text-sm font-semibold text-[#111111]">
                        {spec.label}
                      </p>
                      <p className="text-sm leading-7 text-[#555555]">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;