import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  FiPhone,
  FiMessageCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import MOCK from "../../assets/MOCK.png";

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

  pillowcase: {
    title: "ปลอกหมอน",
    subtitle: "ปลอกหมอนโรงแรม เนื้อผ้านุ่ม สะอาด เรียบหรู",
    price: "เริ่มต้น 290 บาท / ใบ",
    description:
      "ปลอกหมอนคุณภาพสำหรับโรงแรมและรีสอร์ท เนื้อผ้าสัมผัสนุ่ม ดูสะอาดตา รีดง่าย และช่วยเสริมภาพลักษณ์ห้องพักให้ดูพรีเมียมมากขึ้น",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton / Cotton Blend" },
      { label: "ขนาด", value: "มาตรฐานโรงแรม" },
      { label: "สี", value: "ขาว / ครีม / เทาอ่อน" },
      { label: "จุดเด่น", value: "นุ่ม รีดง่าย ใช้งานทน" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท เซอร์วิสอพาร์ตเมนต์" },
    ],
  },

  "duvet-cover": {
    title: "ปลอกผ้านวม",
    subtitle: "ปลอกผ้านวมสัมผัสดี เรียบหรู เหมาะกับห้องพักทุกระดับ",
    price: "เริ่มต้น 790 บาท / ชิ้น",
    description:
      "ปลอกผ้านวมคุณภาพดี ช่วยให้เตียงดูฟู เรียบ และสะอาดตา ดูแลรักษาง่าย เหมาะกับโรงแรมที่ต้องการยกระดับภาพรวมของห้องพัก",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton Blend" },
      { label: "ขนาด", value: "Single / Queen / King" },
      { label: "สี", value: "ขาว / เทาอ่อน" },
      { label: "จุดเด่น", value: "นุ่ม เบา ถอดซักง่าย" },
      { label: "เหมาะสำหรับ", value: "โรงแรมและรีสอร์ททุกขนาด" },
    ],
  },

  "bath-towel": {
    title: "ผ้าขนหนูเช็ดตัว",
    subtitle: "นุ่ม ซึมซับดี ให้สัมผัสพรีเมียมสำหรับแขกของคุณ",
    price: "เริ่มต้น 250 บาท / ผืน",
    description:
      "ผ้าขนหนูเช็ดตัวสำหรับโรงแรม ผลิตจากวัสดุซึมซับน้ำได้ดี สัมผัสนุ่ม ทนต่อการซักบ่อย ช่วยยกระดับประสบการณ์หลังอาบน้ำของผู้เข้าพัก",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton 100%" },
      { label: "ขนาด", value: "มาตรฐานโรงแรม" },
      { label: "สี", value: "ขาว / เทา" },
      { label: "จุดเด่น", value: "ซึมซับดี นุ่ม ทน" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท สปา" },
    ],
  },

  "hair-towel": {
    title: "ผ้าขนหนูเช็ดผม",
    subtitle: "ขนาดพอดี ใช้งานสะดวก ซึมซับดี",
    price: "เริ่มต้น 120 บาท / ผืน",
    description:
      "ผ้าขนหนูเช็ดผมสำหรับโรงแรมและสปา เนื้อผ้านุ่ม ซึมซับน้ำได้ดี ขนาดกำลังเหมาะ ช่วยเติมเต็มชุดของใช้ในห้องพักให้ครบขึ้น",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton Blend" },
      { label: "ขนาด", value: "ขนาดกลาง" },
      { label: "สี", value: "ขาว / ครีม" },
      { label: "จุดเด่น", value: "เบา ซับน้ำดี ซักง่าย" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท สปา" },
    ],
  },

  "face-towel": {
    title: "ผ้าขนหนูเช็ดหน้า",
    subtitle: "ผืนเล็กสัมผัสนุ่ม ดูสะอาดและเรียบร้อย",
    price: "เริ่มต้น 80 บาท / ผืน",
    description:
      "ผ้าขนหนูเช็ดหน้าคุณภาพดีสำหรับโรงแรม ให้ลุคสะอาด พรีเมียม พร้อมใช้งานในห้องพัก ห้องน้ำ หรือเซ็ต amenity",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton 100%" },
      { label: "ขนาด", value: "ขนาดเล็ก" },
      { label: "สี", value: "ขาว / เทาอ่อน" },
      { label: "จุดเด่น", value: "นุ่ม สะอาด ดูดี" },
      { label: "เหมาะสำหรับ", value: "ห้องพักโรงแรมและสปา" },
    ],
  },

  "foot-towel": {
    title: "ผ้าขนหนูเช็ดเท้า",
    subtitle: "ช่วยเติมความครบและความใส่ใจในห้องน้ำ",
    price: "เริ่มต้น 95 บาท / ผืน",
    description:
      "ผ้าขนหนูเช็ดเท้าสำหรับโรงแรม เนื้อแน่น ดูสะอาด ซึมซับดี ช่วยเพิ่มความเรียบร้อยและความใส่ใจในรายละเอียดของห้องพัก",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Cotton Blend" },
      { label: "ขนาด", value: "มาตรฐาน" },
      { label: "สี", value: "ขาว / เทา" },
      { label: "จุดเด่น", value: "ซึมซับดี ดูเรียบร้อย" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท โฮสเทล" },
    ],
  },

  pillow: {
    title: "หมอน",
    subtitle: "สัมผัสนุ่ม รองรับศีรษะได้ดี หลับสบายตลอดคืน",
    price: "เริ่มต้น 490 บาท / ใบ",
    description:
      "หมอนสำหรับโรงแรมที่ออกแบบให้รองรับการใช้งานต่อเนื่อง นุ่มสบาย ดูฟู และช่วยยกระดับคุณภาพการนอนของผู้เข้าพัก",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Microfiber / Hollow Fiber" },
      { label: "ขนาด", value: "มาตรฐานโรงแรม" },
      { label: "สี", value: "ขาว" },
      { label: "จุดเด่น", value: "นุ่ม ฟู คืนตัวดี" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท ห้องพักทุกระดับ" },
    ],
  },

  "mattress-protector": {
    title: "ผ้าปูกันเปื้อน",
    subtitle: "ช่วยปกป้องที่นอน ยืดอายุการใช้งาน ดูแลรักษาง่าย",
    price: "เริ่มต้น 650 บาท / ชิ้น",
    description:
      "ผ้าปูกันเปื้อนสำหรับโรงแรม ช่วยป้องกันคราบสกปรกและความชื้น เสริมความสะอาดและความคุ้มค่าในการดูแลที่นอนระยะยาว",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Polyester + Waterproof Layer" },
      { label: "ขนาด", value: "3.5 / 5 / 6 ฟุต" },
      { label: "สี", value: "ขาว" },
      { label: "จุดเด่น", value: "กันเปื้อน ถอดซักง่าย" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท เซอร์วิสอพาร์ตเมนต์" },
    ],
  },

  topper: {
    title: "ท็อปเปอร์",
    subtitle: "เพิ่มความนุ่มสบายให้เตียง และยกระดับสัมผัสการนอน",
    price: "เริ่มต้น 1,990 บาท / ชิ้น",
    description:
      "ท็อปเปอร์คุณภาพสำหรับโรงแรม ช่วยเพิ่มความนุ่ม ฟู และลดแรงกดทับ เหมาะกับการอัปเกรดเตียงเดิมให้รู้สึกดีขึ้นอย่างชัดเจน",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Microfiber / Foam Top Layer" },
      { label: "ขนาด", value: "3.5 / 5 / 6 ฟุต" },
      { label: "สี", value: "ขาว" },
      { label: "จุดเด่น", value: "เพิ่มความนุ่ม ฟู และสบาย" },
      { label: "เหมาะสำหรับ", value: "โรงแรมและรีสอร์ททุกขนาด" },
    ],
  },

  "duvet-insert": {
    title: "ไส้ผ้านวม",
    subtitle: "เบา ฟู อบอุ่นพอดี ให้เตียงดูนุ่มน่านอน",
    price: "เริ่มต้น 990 บาท / ชิ้น",
    description:
      "ไส้ผ้านวมสำหรับโรงแรม น้ำหนักเบา ฟูสวย ให้ความอบอุ่นกำลังดี ช่วยให้เตียงดูเต็มและน่านอนมากขึ้น",
    images: [MOCK, MOCK, MOCK],
    specs: [
      { label: "วัสดุ", value: "Microfiber Fill" },
      { label: "ขนาด", value: "Single / Queen / King" },
      { label: "สี", value: "ขาว" },
      { label: "จุดเด่น", value: "เบา ฟู ดูแลรักษาง่าย" },
      { label: "เหมาะสำหรับ", value: "โรงแรม รีสอร์ท ห้องพักทุกระดับ" },
    ],
  },

  "pocket-coil": {
    title: "ที่นอน Pocket Coil",
    subtitle: "รองรับสรีระได้ดี ลดแรงสั่นสะเทือน หลับสบายขึ้น",
    price: "เริ่มต้น 6,900 บาท / หลัง",
    description:
      "ที่นอน Pocket Coil สำหรับโรงแรม ช่วยรองรับน้ำหนักแบบแยกจุด ลดแรงสั่นสะเทือน และเพิ่มคุณภาพการนอนให้ผู้เข้าพัก",
    images: [MOCK, MOCK, MOCK, MOCK],
    specs: [
      { label: "ประเภท", value: "Pocket Coil" },
      { label: "ความหนา", value: "8 - 12 นิ้ว" },
      { label: "ระดับความนุ่ม", value: "Medium - Firm" },
      { label: "จุดเด่น", value: "รองรับสรีระดี ลดแรงสั่นสะเทือน" },
      { label: "เหมาะสำหรับ", value: "โรงแรมระดับมาตรฐานถึงพรีเมียม" },
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

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-white px-5 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm font-semibold text-[#7F8B72] transition hover:text-[#65725a] hover:underline"
        >
          ← กลับหน้าแรก
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          {/* Left */}
          <div>
            <div className="rounded-[28px] border border-[#e7e7e7] bg-[#fafafa] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
              <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[24px] bg-[#f2f2f2]">
                <div className="group relative">
                  <img
                    src={images[selectedIndex]}
                    alt={product.title}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110 sm:h-[360px] lg:h-[420px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />

                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-[#111111] shadow-md backdrop-blur transition hover:bg-white"
                    aria-label="Previous image"
                    type="button"
                  >
                    <FiChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 text-[#111111] shadow-md backdrop-blur transition hover:bg-white"
                    aria-label="Next image"
                    type="button"
                  >
                    <FiChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
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
              </div>
            </div>
          </div>

          {/* Right */}
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

              {/* <p className="mt-5 text-2xl font-bold text-[#111111]">
                {product.price}
              </p> */}

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
                    ตารางสเปกสินค้า
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