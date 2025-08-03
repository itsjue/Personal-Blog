function NavBar() {
  return (

    <nav className="flex justify-between items-center relative bg-[#F9F8F6] border-b-[1px] border-[#DAD6D1] px-16 py-3 lg:px-32 lg:py-4">
      <a href="#">
        <img src="src/assets/logo.png" alt="hh_logo" className="size-11" />
      </a>
      <a href="#"><img src="src/assets/hamburger_menu.png" alt="menu" class="size-11 absolute -translate-x-1/2 -translate-y-1/2 right-1/18 lg:hidden" /></a>
      <div className="flex gap-1.5">
        <a
          href="#"
          className="bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] transition hidden lg:block"
        >
          Login
        </a>
        <a href="#" className="bg-[#26231E] text-white px-10 py-3 rounded-full hover:bg-[#75716B] transition hidden lg:block">
          Sign up
        </a>
      </div>
    </nav>
    
  );
}

export default NavBar;