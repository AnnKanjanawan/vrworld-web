import React from "react";
import Logo from "../../assets/logo1.png";
import { HiMenuAlt3, HiX, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavLinks = [
  {
    id: 1,
    name: "ชุดผ้าปูที่นอน",
    submenu: [
      { name: "ผ้าปูที่นอน", link: "/product/bedding-set" },
      { name: "ปลอกหมอน", link: "/product/pillowcase" },
      { name: "ปลอกผ้านวม", link: "/product/duvet-cover" },
    ],
  },
  {
    id: 2,
    name: "ผ้าขนหนู",
    submenu: [
      { name: "ผ้าขนหนูเช็ดตัว", link: "/product/bath-towel" },
      { name: "ผ้าขนหนูเช็ดผม", link: "/product/hair-towel" },
      { name: "ผ้าขนหนูเช็ดหน้า", link: "/product/face-towel" },
      { name: "ผ้าขนหนูเช็ดเท้า", link: "/product/foot-towel" },
    ],
  },
  {
    id: 3,
    name: "เครื่องนอน",
    submenu: [
      { name: "หมอน", link: "/product/pillow" },
      { name: "ผ้าปูกันเปื้อน", link: "/product/mattress-protector" },
      { name: "ท็อปเปอร์", link: "/product/topper" },
      { name: "ไส้ผ้านวม", link: "/product/duvet-insert" },
    ],
  },
  {
    id: 4,
    name: "ที่นอนโรงแรม",
    submenu: [
      { name: "ที่นอน Pocket Coil", link: "/product/pocket-coil" },
      { name: "ที่นอน Bonnel Coil", link: "/product/bonnel-coil" },
      { name: "ที่นอนยางพารา", link: "/product/latex-mattress" },
      { name: "ที่นอนโฟมอัด", link: "/product/foam-mattress" },
    ],
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  const phoneNumber = "082-624-9996";
  const phoneHref = "tel:0826249996";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md"
            : "bg-white/50 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-[78px] items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-11 w-auto cursor-pointer transition hover:scale-105 md:h-12"
              />
              <p className="text-base font-bold text-[#111111] md:text-lg">
                HOTEL DEMO
              </p>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-7">
                {NavLinks.map((item) => (
                  <li
                    key={item.id}
                    className="relative group py-6"
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className="relative font-semibold text-[#111111] transition hover:text-[#3F4B38]">
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#3F4B38] transition-all duration-300 ${
                          activeMenu === item.id ? "w-full" : "w-0"
                        }`}
                      />
                    </button>

                    {item.submenu && (
                      <div
                        className="
                          absolute left-0 top-full
                          invisible translate-y-3 opacity-0
                          transition-all duration-300
                          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                        "
                      >
                        <div
                          className="
                            w-60 rounded-2xl border border-white/40
                            bg-white/85 p-2 shadow-2xl backdrop-blur-2xl
                          "
                        >
                          <ul className="space-y-2">
                            {item.submenu.map((sub, index) => (
                              <li key={index}>
                                <Link
                                  to={sub.link}
                                  className="
                                    flex items-center gap-3 rounded-xl px-4 py-2 text-sm text-[#111111]
                                    transition-all duration-300
                                    hover:bg-[#7F8B72] hover:text-white
                                  "
                                >
                                  <span className="text-[#3F4B38]">✔</span>
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                ))}

                {/* Desktop Call Button */}
                <li className="py-6">
                  <a
                    href={phoneHref}
                    className="
                      flex items-center gap-2
                      px-2 py-1
                      text-sm font-semibold text-black
                      transition-all duration-300
                      hover:text-[#7F8B72]
                    "
                  >
                    <span
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        shadow-[0_0_25px_rgba(31,41,55,0.9)]
                        animate-[phoneBlink_0.8s_infinite]
                      "
                    >
                      <HiPhone size={18} />
                    </span>

                    <span className="inline-block animate-[phoneMove_2s_ease-in-out_infinite]">
                      {phoneNumber}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Button */}
            <div className="flex items-center gap-4 xl:hidden">
              {showMenu ? (
                <HiX
                  size={30}
                  className="cursor-pointer text-[#111111]"
                  onClick={() => setShowMenu(false)}
                />
              ) : (
                <HiMenuAlt3
                  size={30}
                  className="cursor-pointer text-[#111111]"
                  onClick={() => setShowMenu(true)}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 z-[9997] bg-black/40 backdrop-blur-sm xl:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`
          fixed top-0 right-0 z-[9998] h-full w-[290px] bg-white shadow-2xl
          transform transition-transform duration-300 xl:hidden
          ${showMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-6 p-6 pt-20">
          <Link
            to="/"
            className="text-lg font-bold text-[#111111]"
            onClick={() => setShowMenu(false)}
          >
            HOTEL DEMO
          </Link>

          {/* <a
            href={phoneHref}
            className="flex items-center gap-3 rounded-2xl border border-[#3F4B38]/15 bg-[#f8f8f6] px-4 py-3 text-[#111111] shadow-sm transition hover:bg-[#3F4B38] hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.55)]">
              <HiPhone size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs opacity-70">โทรหาเรา</span>
              <span className="font-semibold">{phoneNumber}</span>
            </div>
          </a> */}

          {NavLinks.map((item) => (
            <div key={item.id}>
              <p className="text-lg font-semibold text-[#111111]">{item.name}</p>

              {item.submenu && (
                <div className="mt-2 space-y-2 pl-4 text-gray-500">
                  {item.submenu.map((sub, index) => (
                    <Link
                      key={index}
                      to={sub.link}
                      className="flex items-center gap-2 transition hover:text-[#3F4B38]"
                      onClick={() => setShowMenu(false)}
                    >
                      <span className="text-[#3F4B38]">✔</span>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Call Button */}
      <a
        href={phoneHref}
        className="fixed bottom-5 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:scale-105 xl:hidden"
      >
        <span
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            shadow-[0_0_25px_rgba(31,41,55,0.9)]
            animate-[phoneBlink_0.8s_infinite]
          "
        >
          <HiPhone size={20} />
        </span>

        <span className="inline-block text-sm font-semibold animate-[phoneMove_2s_ease-in-out_infinite]">
          {phoneNumber}
        </span>
      </a>
    </>
  );
};

export default Navbar;