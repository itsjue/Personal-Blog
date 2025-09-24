import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./menu/HamburgerMenu";
import ProfileMenu from "./menu/profileMenu";
import NotificationMenu from "./menu/NotificationMenu";

export function NavBar({ user }) {
  return (
    <nav className="flex justify-between items-center relative bg-[#F9F8F6] border-b-[1px] border-[#DAD6D1] px-16 py-3 lg:px-32 lg:py-4">
      <Link to={`/`}>
        <img src="/src/assets/logo.png" alt="hh_logo" className="size-11" />
      </Link>

      <HamburgerMenu />

      <div className="flex gap-1.5">
        {user ? (
          <div className="flex items-center">

              <NotificationMenu />

              <ProfileMenu user={user} />

          </div>
        ) : (
          <>
            <Link
              to={`/login`}
              className="bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] transition hidden lg:block"
            >
              Login
            </Link>
            <Link
              to={`/signup`}
              className="bg-[#26231E] text-white px-10 py-3 rounded-full hover:bg-[#75716B] transition hidden lg:block"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] flex flex-col justify-center items-center lg:flex-row gap-[40px] lg:gap-[60px] my-[60px]">
        <div className="lg:w-[347px]">
          <h1 className="lg:hidden text-[80px] text-[#26231E] leading-20 text-center font-semibold">
            Stay Informed,
            <br />
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
            src="/src/assets/herosection_img.jpeg"
            alt="hero_img"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="lg:w-[347px]">
          <p className="text-sm text-[#75716B]">-Author</p>
          <h2 className="text-2xl text-[#43403B] font-semibold my-2">
            Thompson P.
          </h2>
          <p className="text-[#75716B] leading-6 mt-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
            <br />
            <br />
            When i'm not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#EFEEEB] w-[100vw] h-[] lg:h-36 flex flex-col lg:flex-row gap-6 justify-between items-center py-[60px] px-[120px]">
      <div className="flex gap-6">
        <h2 className="text-[16px] font-medium text-[#26231E]">Get in touch</h2>
        <a href="#">
          <Linkedin size={24} color="#26231E" />
        </a>
        <a href="#">
          <Github size={24} color="#26231E" />
        </a>
        <a href="#">
          <Mail size={24} color="#26231E" />
        </a>
      </div>
      <Link
        to={`/`}
        className="text-[16px] font-medium underline text-[#26231E]"
      >
        Homepage
      </Link>
    </div>
  );
}
