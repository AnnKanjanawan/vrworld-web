import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import MOCK from "../../assets/MOCK.png";
import ProductDetailBedSheet from "../../assets/ProductDetailBedSheet.png";
import ProductDetailPillowCase from "../../assets/ProductDetailPillowCase.png";
import ProductDetailDuvetCover from "../../assets/ProductDetailDuvetCover.png";
import ProductDetailTowel from "../../assets/ProductDetailTowel.png";
import ProductDetailTowelHair from "../../assets/ProductDetailTowelHair.png";
import ProductDetailTowelFace from "../../assets/ProductDetailTowelFace.png";
import ProductDetailTowelFoot from "../../assets/ProductDetailTowelFoot.png";
import ProductDetailPillow from "../../assets/ProductDetailPillow.png";
import ProductDetailProtectBedSheet from "../../assets/ProductDetailProtectBedSheet.png";
import ProductDetailTopper from "../../assets/ProductDetailTopper.png";
import ProductDetailDuvet from "../../assets/ProductDetailDuvet.png";
import ProductDetailPocketCoil from "../../assets/ProductDetailPocketCoil.png";
import ProductDetailDoubleCoil from "../../assets/ProductDetailDoubleCoil.png";
import ProductDetailLatex from "../../assets/ProductDetailLatex.png";

const productMenu = [
  { name: "ผ้าปูที่นอน", slug: "bedding-set" },
  { name: "ปลอกหมอน", slug: "pillowcase" },
  { name: "ปลอกผ้านวม", slug: "duvet-cover" },
  { name: "หมอน", slug: "pillow" },
  { name: "ท็อปเปอร์", slug: "topper" },
  { name: "ผ้านวม", slug: "duvet-insert" },
  { name: "ผ้าปูกันเปื้อน", slug: "mattress-protector" },
  { name: "ที่นอน Titanium Pocket Coil", slug: "pocket-coil" },
  { name: "ที่นอน Titanium Double Coil", slug: "double-coil" },
  { name: "ที่นอน Latex Cokew", slug: "latex-cokew" },
  { name: "ผ้าขนหนูเช็ดตัว", slug: "bath-towel" },
  { name: "ผ้าขนหนูเช็ดผม", slug: "hair-towel" },
  { name: "ผ้าขนหนูเช็ดหน้า", slug: "face-towel" },
  { name: "ผ้าขนหนูเช็ดเท้า", slug: "foot-towel" },
];

const productData = {
  "bedding-set": {
    title: "ผ้าปูที่นอน",
    images: [ProductDetailBedSheet],
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
    images: [ProductDetailPillowCase],
    specs: [
      { label: "ขนาด", value: "20”x30”+6” / 21”x37”+6”" },
      { label: "ชนิดผ้า", value: "Cotton 100% / CVC" },
      { label: "จำนวนเส้นด้าย (TC)", value: "200-500 เส้นด้าย" },
    ],
  },

  "duvet-cover": {
    title: "ปลอกผ้านวม",
    images: [ProductDetailDuvetCover],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "ชนิดผ้า", value: "Cotton 100% / CVC" },
      { label: "จำนวนเส้นด้าย (TC)", value: "200-500 เส้นด้าย" },
    ],
  },

  "bath-towel": {
    title: "ผ้าขนหนูเช็ดตัว",
    images: [ProductDetailTowel],
    specs: [
      { label: "ขนาด", value: "27”x54” / 30”x60”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "14-20 ปอนด์ / โหล" },
    ],
  },

  "hair-towel": {
    title: "ผ้าขนหนูเช็ดผม",
    images: [ProductDetailTowelHair],
    specs: [
      { label: "ขนาด", value: "14”x28” / 15”x30”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "3.5-5 ปอนด์ / โหล" },
    ],
  },

  "face-towel": {
    title: "ผ้าขนหนูเช็ดหน้า",
    images: [ProductDetailTowelFace],
    specs: [
      { label: "ขนาด", value: "12”x12” / 12”x20”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "1.5-2 ปอนด์ / โหล" },
    ],
  },

  "foot-towel": {
    title: "ผ้าขนหนูเช็ดเท้า",
    images: [ProductDetailTowelFoot],
    specs: [
      { label: "ขนาด", value: "20”x28” / 20”x30”" },
      { label: "ชนิดผ้า", value: "Cotton 100%" },
      { label: "น้ำหนัก", value: "7-10 ปอนด์ / โหล" },
    ],
  },

  pillow: {
    title: "หมอน",
    images: [ProductDetailPillow],
    specs: [
      { label: "ขนาด", value: "19”x29” / 20”x36”" },
      { label: "วัสดุภายใน", value: "Microfiber / Microgel" },
      { label: "ชนิดผ้า", value: "Cotton 233 / Microfiber" },
      { label: "น้ำหนัก", value: "900-1,600 gram" },
    ],
  },

  "mattress-protector": {
    title: "ผ้าปูกันเปื้อน",
    images: [ProductDetailProtectBedSheet],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Microfiber" },
      { label: "ชนิดผ้า", value: "กันน้ำ / ไม่กันน้ำ" },
      { label: "น้ำหนัก", value: "150 / 200 gsm." },
    ],
  },

  topper: {
    title: "ท็อปเปอร์",
    images: [ProductDetailTopper],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Cotton 100% / CVC" },
      { label: "ชนิดผ้า", value: "200-500 เส้นด้าย" },
      { label: "น้ำหนัก", value: "500 / 800 gsm." },
    ],
  },

  "duvet-insert": {
    title: "ผ้านวม",
    images: [ProductDetailDuvet],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุภายใน", value: "Microfiber" },
      { label: "ชนิดผ้า", value: "Cotton 233 / Microfiber" },
      { label: "น้ำหนัก", value: "150-350 gsm." },
    ],
  },

  "pocket-coil": {
    title: "ที่นอน Titanium Pocket Coil",
    images: [ProductDetailPocketCoil],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุหลัก", value: "Titanium Pocket Coil" },
      { label: "หมายเหตุ", value: "สามารถผลิตตามสเปคที่ต้องการได้" },
    ],
  },

  "double-coil": {
    title: "ที่นอน Titanium Double Coil",
    images: [ProductDetailDoubleCoil],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุหลัก", value: "Titanium Double Coil" },
      { label: "หมายเหตุ", value: "สามารถผลิตตามสเปคที่ต้องการได้" },
    ],
  },

  "latex-cokew": {
    title: "ที่นอน Latex Cokew",
    images: [ProductDetailLatex],
    specs: [
      { label: "ขนาด", value: "King / Queen / Twin" },
      { label: "วัสดุหลัก", value: "Latex Cokew" },
      { label: "หมายเหตุ", value: "สามารถผลิตตามสเปคที่ต้องการได้" },
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

/* ===================== COMPONENT ===================== */
const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug];
  const images = useMemo(() => product?.images || [MOCK], [product]);
  const [selectedIndex] = useState(0);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">ไม่พบข้อมูลสินค้า</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F6F4] px-5 py-10 md:px-10">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <div className="mt-16 border-b border-[#E5E5E5] bg-[#F7F6F4]">
          <div className="mx-auto max-w-7xl px-5 md:px-10 py-4">
            <div className="flex flex-wrap items-center text-sm text-[#332E2A] gap-x-3 gap-y-2">
              {productMenu.map((item, index) => (
                <span key={item.slug} className="flex items-center">
                  <Link
                    to={`/product/${item.slug}`}
                    className={`relative transition-all duration-300 ease-out
                    text-[#6B6B6B]
                    hover:text-[#A47868]
                    after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 
                    after:bg-[#A47868] after:transition-all after:duration-300
                    hover:after:w-full
                    ${slug === item.slug ? "font-semibold text-[#A47868] after:w-full" : ""}
                  `}
                  >
                    {item.name}
                  </Link>

                  {index !== productMenu.length - 1 && (
                    <span className="mx-2 text-[#C5C5C5]">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT: IMAGE */}
          <div className="mt-5 flex justify-center">
            <div className="w-full max-w-[520px] h-[320px] md:h-[420px] overflow-hidden">
              <img
                src={images[selectedIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: DETAIL */}
          <div className="lg:pt-10">
            {/* TITLE */}
            <h1 className="text-[22px] md:text-[22px] font-semibold text-[#332E2A] racking-wide">
              {product.title}
            </h1>

            {/* LINE */}
            <div className="mt-3 h-[1.5px] w-full bg-[#C5C5C5]" />

            {/* SUB */}
            <p className="mt-3 text-[20px] font-normal text-[#A49D93] ">
              ข้อมูลสินค้า (Product Specific)
            </p>

            {/* SPEC */}
            <div className="mt-3 space-y-5">
              {product.specs.map((spec, index) => (
                <div key={index}>
                  <p className="text-[16px] font-semibold text-[#332E2A]">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-[14px] font-normal text-[#332E2A]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* LINE */}
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 text-[16px] font-semibold text-[#EAE6E2] 
                bg-[#332E2A] 
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                active:translate-y-0 active:shadow-md"
              >
                ขอใบเสนอราคา
              </a>

              {/* PHONE */}
              <a
                href="tel:0826249996"
                className="inline-block px-8 py-4 text-[16px] font-semibold 
                text-[#A49D93] bg-[#E3DCD4]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:bg-[#E0DBD6] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                active:translate-y-0 active:shadow-md"
              >
                สอบถามรายละเอียด
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;