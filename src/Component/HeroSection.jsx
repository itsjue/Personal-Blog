function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[85%] flex justify-center items-center gap-[60px] my-[60px]">
        <div className="w-[347px]">
          <h1 className="text-[52px] leading-[60px] text-end font-semibold">
            Stay
            <br />
            Informed,
            <br />
            Stay Inspired
          </h1>
          <p className="text-[16px] leading-[24px] text-end text-[#75716B] mt-6">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src="src/assets/herosection_img.jpeg"
          alt="hero_img"
          className="w-[386px] h-[529px] object-cover rounded-2xl opacity-80"
        />
        <div className="w-[347px]">
          <p className="text-sm text-[#75716B]">-Author</p>
          <h2 className="text-2xl text-[#43403B] font-semibold my-2">Thompson P.</h2>
          <p className="text-[#75716B] leading-6 mt-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.<br />
            <br />
            When i'm not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
