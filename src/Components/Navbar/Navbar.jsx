import React from "react";
import Logo from "../../assets/logo1.png";
import { HiMenuAlt3, HiX, HiPhone } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "ชุดผ้าปูที่นอน",
    submenu: [
      { name: "ผ้าปูที่นอน", link: "#" },
      { name: "ปลอกหมอน", link: "#" },
      { name: "ปลอกผ้านวม", link: "#" },
    ],
  },
  {
    id: 2,
    name: "ผ้าขนหนู",
    link: "#products",
    submenu: [
      { name: "ผ้าขนหนูเช็ดตัว", link: "#" },
      { name: "ผ้าขนหนูเช็ดผม", link: "#" },
      { name: "ผ้าขนหนูเช็ดหน้า", link: "#" },
      { name: "ผ้าขนหนูเช็ดเท้า", link: "#" },
    ],
  },
  {
    id: 3,
    name: "เครื่องนอน",
    link: "#products",
    submenu: [
      { name: "หมอน", link: "#" },
      { name: "ผ้าปูกันเปื้อน", link: "#" },
      { name: "ท็อปเปอร์", link: "#" },
      { name: "ไส้ผ้านวม", link: "#" },
    ],
  },
  {
    id: 4,
    name: "ที่นอนโรงแรม",
    link: "#products",
    submenu: [
      { name: "ที่นอน Pocket Coil", link: "#" },
      { name: "ที่นอน Bonnel Coil", link: "#" },
      { name: "ที่นอนยางพารา", link: "#" },
      { name: "ที่นอนโฟมอัด", link: "#" },
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
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-auto cursor-pointer transition hover:scale-105"
              />
              <p className="font-bold cursor-pointer hover:text-[#3F4B38]">
                HOTEL DEMO
              </p>
            </div>

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
                    <button className="font-bold hover:text-[#3F4B38] transition relative">

                      {item.name}

                      {/* underline animation */}
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
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        translate-y-3 group-hover:translate-y-0
                        transition-all duration-300
                      "
                      >
                        <div
                          className="
                          w-52
                          bg-white/70
                          backdrop-blur-2xl
                          shadow-2xl
                          rounded-2xl
                          p-1
                          border border-white/40
                        "
                        >
                          <ul className="space-y-2">

                            {item.submenu.map((sub, index) => (
                              <li key={index}>
                                <a
                                  href={sub.link}
                                  className="
                                  text-sm
                                  flex items-center gap-3
                                  px-4 py-2
                                  rounded-xl
                                  transition-all duration-300
                                  hover:bg-[#7F8B72]
                                  hover:text-white
                                  group
                                "
                                >
                                  <span className="text-[#3F4B38] group-hover:text-black">
                                    ✔
                                  </span>

                                  {sub.name}

                                </a>
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
                    call-shimmer
                    hidden md:flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-full
                    text-[#4F5C47]
                    font-semibold
                    relative
                    overflow-hidden
                    backdrop-blur-md
                    bg-white/10
                    "
                
                >
                  <HiPhone />
                  082-624-9996
                </a>

                <DarkMode />

              </ul>
            </nav>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center gap-4">
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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`
        fixed top-0 right-0 h-full w-[260px]
        bg-white shadow-2xl z-[999]
        transform transition-transform duration-300
        ${showMenu ? "translate-x-0" : "translate-x-full"}
        md:hidden
      `}
      >
        <div className="p-6 flex flex-col gap-6">

          {NavLinks.map((item) => (
            <div key={item.id}>

              <a
                href={item.link}
                className="text-lg font-semibold hover:text-[#3F4B38]"
                onClick={() => setShowMenu(false)}
              >
                {item.name}
              </a>

              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2 text-gray-500">

                  {item.submenu.map((sub, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#3F4B38]">✔</span>
                      {sub.name}
                    </div>
                  ))}

                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* STICKY CALL BUTTON MOBILE */}
      <a
        href="tel:0826249996"
        className="call-btn"
        >

        <span className="relative z-10 flex items-center gap-2">
        <HiPhone size={22}/>
        082-624-9996
        </span>

      <span className="absolute inset-0 rounded-full glow-border"/>

</a>
    </>
  );
};

export default Navbar;