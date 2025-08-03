function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] flex flex-col justify-center items-center lg:flex-row gap-[40px] lg:gap-[60px] my-[60px]">
        <div className="lg:w-[347px]">
          <h1 className="lg:hidden text-[80px] text-[#26231E] leading-20 text-center font-semibold">
            Stay Informed,<br />
            Stay Inspired
          </h1>
          <h1 className="hidden lg:block text-[52px] text-[#26231E] leading-[60px] text-end font-semibold">
            Stay
            <br />
            Informed,
            <br />
            Stay Inspired
          </h1>
          <p className="text-[16px] leading-[24px] text-center lg:text-end text-[#75716B] mt-6">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="w-[386px] h-[529px] overflow-hidden rounded-2xl">
        <img
          src="src/assets/herosection_img.jpeg"
          alt="hero_img"
          className="w-full h-full object-cover opacity-80"
        />
        </div>
        <div className="lg:w-[347px]">
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
