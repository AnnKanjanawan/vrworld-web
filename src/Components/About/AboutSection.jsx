import "./AboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MOCK from "../../assets/MOCK.png";
import coverAbout from "../../assets/cover-about.mp4";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden text-[#1f1f1f] py-20 md:py-28"
    >
      {/* background glow */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-100">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#3F4B38]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#3F4B38]/10 blur-3xl" />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h2 className="about-heading mt-12 md:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="heading-line line-1 whitespace-nowrap block text-[#1f1f1f]"
              >
                ดูแลครบ 
                <span>จบทุกโปรเจกต์</span>
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="250"
                className="heading-line line-2 block mt-4 text-[#3F4B38]"
              >
                จัดเต็มทุกสเปก
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="400"
                className="heading-line line-3 block mt-4 text-[#3F4B38]"
              >
                เสกห้องพักให้สมบูรณ์
              </span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-xl">
              <div className="absolute -inset-3 rounded-[32px] bg-[#3F4B38]/10 blur-2xl" />

              <div className="image-sweep-card" data-aos="zoom-in" data-aos-delay="250">
                <div className="image-sweep-inner">
                  {/* <img
                    src={MOCK}
                    alt="About"
                    className="h-[420px] sm:h-[500px] w-full rounded-[24px] object-cover"
                  /> */}
                  <video 
                    src={coverAbout}
                    alt="About"
                    className="h-[420px] sm:h-[500px] w-full rounded-[24px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;