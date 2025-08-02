function NavBar() {
  return (

    <nav className="flex justify-between items-center bg-[#F9F8F6] border-b-[1px] border-[#DAD6D1] px-32 py-4">
      <a href="#">
        <img src="src/assets/logo.png" alt="hh_logo" className="size-11" />
      </a>
      <div className="flex gap-1.5">
        <a
          href="#"
          className="bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] transition"
        >
          Login
        </a>
        <a href="#" className="bg-[#26231E] text-white px-10 py-3 rounded-full hover:bg-[#75716B] transition">
          Sign up
        </a>
      </div>
    </nav>
    
  );
}

export default NavBar;