import { Link, useParams } from "react-router-dom";
import MOCK from "../../assets/MOCK.png";
import { FiPhone, FiMessageCircle, FiMail } from "react-icons/fi";
import { useState } from "react";

const productData = {
  "bedding-set": {
    title: "ชุดผ้าปูที่นอน",
    subtitle: "ชุดเครื่องนอนสำหรับโรงแรม โทนเรียบหรู ดูสะอาด พรีเมียม",
    price: "เริ่มต้น 1,290 บาท / ชุด",
    description:
      "สร้างความประทับใจตั้งแต่สัมผัสแรก ยกระดับคะแนนรีวิวให้โรงแรมของคุณ ด้วยเนื้อผ้าคุณภาพดี สัมผัสนุ่ม เรียบหรู และดูแลรักษาง่าย เหมาะสำหรับโรงแรม รีสอร์ท และห้องพักทุกระดับ",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton Blend Premium" },
      { label: "ขนาด", value: "3.5 ฟุต / 5 ฟุต / 6 ฟุต" },
      { label: "สี", value: "ขาว / เทา / ครีม" },
      { label: "คุณสมบัติ", value: "นุ่ม ระบายอากาศดี ดูแลรักษาง่าย" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท อพาร์ตเมนต์" },
    ],
  },
  bedding: {
    title: "เครื่องนอน",
    subtitle: "เติมเต็มสัมผัสแห่งการพักผ่อนให้แขกของคุณ",
    price: "เริ่มต้น 890 บาท / เซ็ต",
    description:
      "เติมเต็มสัมผัสแห่งการพักผ่อน โอบกอดแขกของคุณด้วยความนุ่มสบายดุจปุยเมฆ เหมาะสำหรับโรงแรม รีสอร์ท และห้องพักทุกระดับ ให้ความรู้สึกสบายและดูสะอาดตา",
    images: [MOCK, MOCK, MOCK],
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
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Pocket Spring / Hybrid" },
      { label: "ความหนา", value: "8 - 12 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Medium - Firm" },
      { label: "จุดเด่น", value: "รองรับสรีระ ลดแรงกดทับ" },
      { label: "เหมาะสำหรับ", value: "โรงแรมระดับมาตรฐานถึงพรีเมียม" },
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug];
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || MOCK);

  if (!product) {
    return (
      <section className="min-h-screen bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-8 inline-block text-sm font-semibold text-[#7F8B72] hover:underline"
          >
            ← กลับหน้าแรก
          </Link>

          <h1 className="text-3xl font-semibold text-[#111111]">
            ไม่พบข้อมูลสินค้า
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-5 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm font-semibold text-[#7F8B72] transition hover:text-[#65725a] hover:underline"
        >
          ← กลับหน้าแรก
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left - Images */}
          <div>
            <div className="overflow-hidden rounded-[28px] border border-[#e7e7e7] bg-[#f8f8f8] shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <img
                src={selectedImage}
                alt={product.title}
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[380px]"
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`overflow-hidden rounded-2xl border transition ${
                    selectedImage === img
                      ? "border-[#7F8B72] ring-2 ring-[#7F8B72]/20"
                      : "border-[#e5e5e5] hover:border-[#cfd5c8]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="h-20 w-full object-cover sm:h-24"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="inline-flex rounded-full border border-[#7F8B72]/20 bg-[#7F8B72]/10 px-4 py-2 text-sm font-medium text-[#7F8B72]">
              Product Detail
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl md:text-5xl">
              {product.title}
            </h1>

            <p className="mt-3 text-base text-[#7F8B72] md:text-lg">
              {product.subtitle}
            </p>

            {/* <p className="mt-5 text-2xl font-bold text-[#111111]">
              {product.price}
            </p> */}

            <p className="mt-5 text-base leading-8 text-[#555555] md:text-lg">
              {product.description}
            </p>

            {/* Buttons */}
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
                href="tel:021234567"
                className="inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
              >
                <FiPhone size={18} />
                โทรเลย
              </a>

              {/* <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-[#7F8B72] px-6 py-3 text-sm font-semibold text-[#7F8B72] transition hover:bg-[#7F8B72] hover:text-white"
              >
                <FiMail size={18} />
                ฟอร์มติดต่อ
              </a> */}
            </div>

            {/* Spec Table */}
            <div className="mt-10 overflow-hidden rounded-[24px] border border-[#e7e7e7] bg-white shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
              <div className="border-b border-[#ececec] bg-[#f8f8f8] px-5 py-4">
                <h2 className="text-lg font-semibold text-[#111111]">
                  ตารางสเปกสินค้า
                </h2>
              </div>

              <div className="divide-y divide-[#efefef]">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[180px_1fr]"
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

        {/* Contact Form */}
        {/* <div
          id="contact-form"
          className="mt-14 rounded-[28px] border border-[#e7e7e7] bg-gradient-to-b from-white to-[#f8f8f8] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-[#111111]">
            สนใจสินค้านี้
          </h2>
          <p className="mt-2 text-sm leading-7 text-[#555555]">
            กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับ พร้อมแนะนำสินค้าและใบเสนอราคาที่เหมาะกับโรงแรมของคุณ
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="ชื่อผู้ติดต่อ"
              className="rounded-2xl border border-[#dddddd] px-4 py-3 text-sm outline-none transition focus:border-[#7F8B72]"
            />
            <input
              type="text"
              placeholder="ชื่อโรงแรม / บริษัท"
              className="rounded-2xl border border-[#dddddd] px-4 py-3 text-sm outline-none transition focus:border-[#7F8B72]"
            />
            <input
              type="tel"
              placeholder="เบอร์โทรศัพท์"
              className="rounded-2xl border border-[#dddddd] px-4 py-3 text-sm outline-none transition focus:border-[#7F8B72]"
            />
            <input
              type="email"
              placeholder="อีเมล"
              className="rounded-2xl border border-[#dddddd] px-4 py-3 text-sm outline-none transition focus:border-[#7F8B72]"
            />
            <textarea
              rows="5"
              placeholder="รายละเอียดเพิ่มเติม"
              className="rounded-2xl border border-[#dddddd] px-4 py-3 text-sm outline-none transition focus:border-[#7F8B72] md:col-span-2"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2a2a]"
              >
                ส่งข้อมูลติดต่อ
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDetail;