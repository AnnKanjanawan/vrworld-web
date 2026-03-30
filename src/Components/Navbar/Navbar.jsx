import { useState, useEffect } from "react";
import Logo from "../../assets/LogoRestina.png";
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
      { name: "ผ้านวม", link: "/product/duvet-insert" },
    ],
  },
  {
    id: 4,
    name: "ที่นอนโรงแรม",
    submenu: [
      { name: "ที่นอน Titanium Pocket Coil", link: "/product/pocket-coil" },
      { name: "ที่นอน Titanium Double Coil", link: "/product/double-coil" },
      { name: "ที่นอน Latex Cokew", link: "/product/latex-cokew" },
    ],
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const phoneNumber = "082-624-9996";
  const phoneHref = "tel:0826249996";

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showMenu) {
      setOpenMenu(null);
    }
  }, [showMenu]);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[9999] bg-[#E3DCD4] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex h-[64px] items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 md:h-16 transition hover:scale-110"
              />
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
                    <button className="relative tracking-wider font-medium text-[#332E2A]transition hover:text-[#7A746C]">
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#7A746C] transition-all duration-300 ${
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
                            w-60 border border-white/40
                            bg-white/85 p-2 shadow-2xl backdrop-blur-2xl
                          "
                        >
                          <ul className="space-y-2">
                            {item.submenu.map((sub, index) => (
                              <li key={index}>
                                <Link
                                  to={sub.link}
                                  className="
                                    flex items-center gap-3 px-4 py-2 text-sm text-[#332E2A]
                                    transition-all duration-300
                                    hover:bg-[#E3DCD4] hover:text-[#332E2A] 
                                  "
                                >
                                  <span className="text-[#332E2A]">✔</span>
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
                      inline-block
                      px-5 py-2
                      text-sm font-semibold text-[#EAE6E2]
                      bg-[#332E2A]
                      transition-all duration-300
                      hover:text-[#A49D93]
                      "
                  >
                    Call {phoneNumber}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Button */}
            <div className="flex items-center gap-4 xl:hidden">
              {showMenu ? (
                <HiX
                  size={25}
                  className="cursor-pointer text-[#A47868]"
                  onClick={() => {
                    setShowMenu(false);
                    setOpenMenu(null);
                  }}
                />
              ) : (
                <HiMenuAlt3
                  size={25}
                  className="cursor-pointer text-[#A47868]"
                  onClick={() => setShowMenu(true)}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {/*Mobile Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-[9997]"
          onClick={() => {
            setShowMenu(false);
            setOpenMenu(null);
          }}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 z-[9998] h-full w-[50%] bg-white shadow-2xl transition-transform duration-300 xl:hidden overflow-y-auto ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 space-y-6">
          {NavLinks.map((item) => (
            <div key={item.id}>
              {/* Main */}
              <button
                onClick={() =>
                  setOpenMenu(openMenu === item.id ? null : item.id)
                }
                className="w-full flex justify-between text-[#A47868] text-[14px] font-semibold tracking-wider"
              >
                {item.name}
                <span
                  className={`transition ${
                    openMenu === item.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Sub Menu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openMenu === item.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.submenu.map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.link}
                    onClick={() => {
                      setShowMenu(false);
                      setOpenMenu(null);
                    }}
                    className="block pl-4 py-2 text-[#332E2A] text-[14px] text-normal tracking-wider"
                  >
                    ▪︎ {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Call Button */}
      <a
        href={phoneHref}
        className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3 rounded-full px-5 py-3  transition hover:scale-105 xl:hidden"
      >
        <div
          className="flex h-11 w-11 items-center justify-center
            rounded-full
            animate-[phoneBlink_0.8s_infinite]
            
          "
        >
          <HiPhone size={20} />
        </div>
        {/* {/* < className="text-black inline-block text-sm font-semibold animate-[phoneMove_2s_ease-in-out_infinite]">
          {phoneNumber} */}
      </a>
    </>
  );
};

export default Navbar;
