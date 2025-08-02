function ArticleSection() {
  return (

    <div className="my-[40px]">
      <div className="w-[85%] mx-auto">
        <h2 className="text-[#26231E] text-2xl font-semibold">
          Latest articles
        </h2>
        <div className="flex justify-between px-6 py-4 my-10 bg-[#EFEEEB] rounded-2xl">
          <ul className="flex gap-2.5">
            <li className="flex items-center">
              <a href="#" className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition">Highlight</a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition">Cat</a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition">Inspiration</a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition">General</a>
            </li>
          </ul>
          <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[360px] self-center bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px] placeholder-[#75716B] placeholder:font-medium focus:border-[#75716B] focus:outline-none focus:ring-0"
          />
          <img src="src/assets/search_icon.png" alt="search_icon" className="absolute size-6 -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1%] opacity-70" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ArticleSection;
