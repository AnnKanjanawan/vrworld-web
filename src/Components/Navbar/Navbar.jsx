import React from "react";
import Logo from "../../assets/logo1.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Products", link: "#products" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md"
          : "bg-white/10 dark:bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-80"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
            <p className="font-bold cursor-pointer hover:text-[#C8A97E] duration-300"
              onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }}>
            HOTEL DEMO
            </p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-5">
                  <a
                    href={link}
                    className="relative inline-block font-bold transition-all duration-300 hover:text-[#C8A97E] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C8A97E] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4 text-white">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            showMenu ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-white">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  onClick={() => setShowMenu(false)}
                  className="block text-lg font-medium hover:text-[#C8A97E] duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
