import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticleSection() {
  return (
    <div className="my-[40px]">
      <div className="w-[90%] mx-auto">
        <h2 className="text-[#26231E] text-3xl mb-8 lg:mb-0 lg:text-2xl font-semibold">
          Latest articles
        </h2>

        {/* Desktop Device */}
        <div className="justify-between px-6 py-4 my-10 bg-[#EFEEEB] rounded-2xl hidden lg:flex">
          <ul className="flex gap-2.5">
            <li className="flex items-center">
              <a
                href="#"
                className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition"
              >
                Highlight
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition"
              >
                Cat
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition"
              >
                Inspiration
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-[#75716B] font-medium py-3 px-5 rounded-[8px] hover:bg-[#DAD6D1] hover:text-[#43403B] transition"
              >
                General
              </a>
            </li>
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[360px] self-center bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px] placeholder-[#75716B] placeholder:font-medium focus:border-[#75716B] focus:outline-none focus:ring-0"
            />
            <img
              src="src/assets/search_icon.png"
              alt="search_icon"
              className="absolute size-6 -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1%] opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="flex flex-col lg:hidden bg-[#EFEEEB] w-full p-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full self-center bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px] placeholder-[#75716B] placeholder:font-medium focus:border-[#75716B] focus:outline-none focus:ring-0"
          />
          <img
            src="src/assets/search_icon.png"
            alt="search_icon"
            className="absolute size-6 -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1%] opacity-70"
          />
        </div>
        <div className="mt-4">
          <h3 className="flex justify-start text-2xl text-[#75716B] font-medium">
            Category
          </h3>
          <Select>
            <SelectTrigger className="w-full text-[#75716B] font-medium mt-1 bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px]">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highlight">Highlight</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
