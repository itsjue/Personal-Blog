import { useState } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src="/assets/hamburger_menu.png"
          alt="menu"
          className="size-11 absolute -translate-x-1/2 -translate-y-1/2 right-1/18 lg:hidden"
        />
      </button>

      {isOpen && (
        <div className="absolute top-[171px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-fit bg-[#f9f8f6] shadow-xl lg:hidden">
          <ul className="flex flex-col items-center gap-7 my-10">
            <li>
              <Link to={`/login`}><button className="border border-[#75716B] bg-[#ffffff] w-[327px] h-12 rounded-full cursor-pointer hover:text-[#75716B] hover:border-[#75716B] transition">Log in</button></Link>
            </li>
            <li>
              <Link to={`/signup`}><button className="bg-[#26231E] text-[#ffffff] w-[327px] h-12 rounded-full cursor-pointer hover:bg-[#75716B] transition">Sign up</button></Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
