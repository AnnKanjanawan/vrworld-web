import video from "../../assets/cover.mp4";

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
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-3xl  space-y-6 px-6">
          <h1 className="leading-normal tracking-wide text-[#EAE6E2]">
            <span className="block">
              <span className="block text-4xl md:text-5xl font-medium">
                ยกระดับ
              </span>
            </span>
            <span className="block text-4xl md:text-5xl font-medium">
              ประสบการณ์การนอน
            </span>

            <span className="block mt-3 text-5xl md:text-6xl font-bold">
              ระดับ 5 ดาว
            </span>
            <div className="border-t-2 border-[#EAE6E2] my-1"></div>

            <span className="block mt-4 text-3xl md:text-4xl font-normal tracking-wider">
              ในต้นทุนที่คุ้มค่า
            </span>
            <span className="block mt-1 text-3xl md:text-4xl font-normal tracking-wider">
              สำหรับโรงแรมคุณ
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
