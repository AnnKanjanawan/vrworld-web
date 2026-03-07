import video from "../../assets/cover.mp4";
import { BiPlayCircle } from "react-icons/bi";


const Hero = ({ togglePlay }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="max-w-3xl text-center space-y-6 px-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            LOREM IPSUM DOLOR SIT
            <span className="block">
            CONSECTETUR ADIPISCING ELIT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex justify-center gap-6 pt-4">
          <button
            onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black duration-300"
          >
          Get Started
          </button>
    
            <button
              onClick={() => {
                document.getElementById("products").scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-lg hover:text-[#C8A97E]"
            >
              <BiPlayCircle className="text-3xl" />
              See Demo
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;