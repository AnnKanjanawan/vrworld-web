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
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[#EAE6E2]">
              {/* บรรทัดบน */}
              <span className="block text-[40px] md:text-[56px] font-medium leading-[1.1]">
                ยกระดับ
              </span>

              <span className="block text-[40px] md:text-[56px] font-medium leading-[1.1] -mt-1 md:-mt-2">
                ประสบการณ์การนอน
              </span>

              {/* หัวข้อใหญ่ */}
              <span className="block text-[72px] md:text-[72px] font-bold leading-[0.9] md:leading-[1.1] mt-2 md:mt-2">
                ระดับ 5 ดาว
              </span>

              {/* เส้น */}
              <div className="mt-3 md:mt-4 border-t-4 md:border-t-4 border-[#EAE6E2] w-[350px] md:w-[420px]"></div>

              {/* ข้อความล่าง */}
              <span className="block mt-3 md:mt-4 text-[34px] md:text-[42px] font-normal leading-[1.5] md:leading-[1.3]">
                ในต้นทุนที่คุ้มค่า
              </span>

              <span className="block text-[34px] md:text-[42px] font-normal leading-[1.3] -mt-1">
                สำหรับโรงแรมคุณ
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
