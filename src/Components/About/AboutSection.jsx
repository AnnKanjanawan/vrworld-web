import "./AboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
      className="relative overflow-hidden py-20 md:py-28 bg-[#EAE6E2]"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h2 className="about-heading mt-12 md:mt-20">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="heading-line line-1 whitespace-nowrap block 
                text-[#A49D93] font-semibold
                text-3xl sm:text-3xl md:text-4xl lg:text-5xl
                "
              >
                ดูแลครบ...จบทุกโปรเจกต์
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="250"
                className="heading-line line-2 block mt-3
                text-[#332E2A] font-bold tracking-wide
                text-5xl sm:text-6xl md:text-6xl lg:text-7xl
                
                "
              >
                จัดเต็มทุกสเปก
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="400"
                className="heading-line line-3 block mt-3
                text-[#A49D93] font-medium tracking-wide
                text-2xl sm:text-2xl md:text-3xl lg:text-4xl
                "
              >
                เสกห้องพักให้สมบูรณ์
              </span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-xl">
              <div className="absolute -inset-3 rounded-[32px] bg-[#3F4B38]/10 blur-2xl" />{" "}
              <div
                className="image-sweep-card"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div className="image-sweep-inner">
                  <video
                    src={coverAbout}
                    alt="About"
                    className="h-[420px] sm:h-[500px] w-full rounded-[24px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
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