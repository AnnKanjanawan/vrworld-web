import React from "react";
import Logo from "../../assets/logo1.png";
import { HiMenuAlt3, HiX, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

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

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md"
            : "bg-white/20 backdrop-blur-md"
        }`}
      >
        <div className="container py-3 md:py-0">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-auto cursor-pointer transition hover:scale-105"
              />
              <p className="font-bold cursor-pointer transition hover:text-[#3F4B38]">
                HOTEL DEMO
              </p>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map((item) => (
                  <li
                    key={item.id}
                    className="relative group py-5"
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className="relative font-bold transition hover:text-[#3F4B38]">
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-[3px] bg-[#3F4B38] transition-all duration-300 ${
                          activeMenu === item.id ? "w-full" : "w-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
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
                            w-56 rounded-2xl border border-white/40
                            bg-white/80 p-2 shadow-2xl backdrop-blur-2xl
                          "
                        >
                          <ul className="space-y-2">
                            {item.submenu.map((sub, index) => (
                              <li key={index}>
                                <Link
                                  to={sub.link}
                                  className="
                                    flex items-center gap-3 rounded-xl px-4 py-2 text-sm
                                    transition-all duration-300
                                    hover:bg-[#7F8B72] hover:text-white
                                    group
                                  "
                                >
                                  <span className="text-[#3F4B38] transition group-hover:text-white">
                                    ✔
                                  </span>
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

                {/* CALL BUTTON */}
                <a
                  href="tel:0826249996"
                  className="
                    call-shimmer relative hidden overflow-hidden rounded-full
                    bg-white/10 px-6 py-3 font-semibold text-[#4F5C47]
                    backdrop-blur-md md:flex items-center gap-2
                  "
                >
                  <HiPhone />
                  082-624-9996
                </a>

                <DarkMode />
              </ul>
            </nav>

            {/* Mobile Button */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />

              {showMenu ? (
                <HiX
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              ) : (
                <HiMenuAlt3
                  size={30}
                  className="cursor-pointer"
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
          className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`
          fixed top-0 right-0 z-[999] h-full w-[260px] bg-white shadow-2xl
          transform transition-transform duration-300 md:hidden
          ${showMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-6 p-6">
          <Link
            to="/"
            className="text-lg font-bold text-[#111111]"
            onClick={() => setShowMenu(false)}
          >
            HOTEL DEMO
          </Link>

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

      {/* STICKY CALL BUTTON MOBILE */}
      <a href="tel:0826249996" className="call-btn">
        <span className="relative z-10 flex items-center gap-2">
          <HiPhone size={22} />
          082-624-9996
        </span>

        <span className="glow-border absolute inset-0 rounded-full" />
      </a>
    </>
  );
};

export default Navbar;