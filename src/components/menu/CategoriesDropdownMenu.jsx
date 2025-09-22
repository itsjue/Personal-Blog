import { useState, useEffect } from "react";

function CategoriesDropDownMenu({ value, onChange }) {
  const [selected, setSelected] = useState("Select category");
  const [open, setOpen] = useState(false);
  const categories = ["Cat", "General", "Inspiration"];

  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const handleSelect = (cat) => {
    setSelected(cat);
    setOpen(false);
    if (onChange) onChange(cat);
  };

  return (
    <>
      <div className="flex flex-col gap-1 relative max-w-[480px]">
        <p className="font-medium text-[#75716B] mt-7">Category</p>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full font-medium text-[#75716B] bg-white border border-[#DAD6D1] py-3 px-4 rounded-lg"
        >
          {selected}
          <img
            src="/src/assets/expand_down_icon.png"
            alt="expand_down_icon"
            className={`size-6 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <ul className="absolute top-full left-0 w-full bg-white border border-[#DAD6D1] rounded-lg mt-1 shadow-md z-10">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => handleSelect(cat)}
                className="px-4 py-2 hover:bg-[#F9F8F6] cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default CategoriesDropDownMenu;
