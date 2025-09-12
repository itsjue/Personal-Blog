import { useState } from "react";

function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <div className="relative flex justify-center items-center size-12 border border-[#EFEEEB] bg-[#ffffff] rounded-full mr-4 cursor-pointer">
          <div className="absolute size-2 bg-[#EB5164] rounded-full top-0.5 right-1"></div>
          <img
            src="/src/assets/bell_icon.png"
            alt="notification_icon"
            className="size-6"
          />
        </div>

        {isOpen && (
          <div className="absolute w-[362px] h-fit py-6 px-4 top-18 right-70 bg-[#F9F8F6] rounded-[12px] shadow-xl z-1">
            <div className="flex gap-5 items">
              <img src="/src/assets/herosection_img.jpeg" alt="profile_pic" className="size-12 rounded-full object-cover" />
              <div className="flex flex-col">
              <p className="">
                <span className="font-bold mr-1">Thompson P.</span>Published new article.
              </p>
              <p className="font-medium text-[12px] text-[#f2b68c] mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex gap-5 mt-4">
              <img src="/src/assets/mockup_profile_pic.jpeg" alt="profile_pic" className="size-12 rounded-full object-cover" />
              <div className="flex flex-col">
              <p className="">
                <span className="font-bold mr-1">Dog Boy</span>Comment on the article you have commented on.
              </p>
              <p className="font-medium text-[12px] text-[#f2b68c] mt-1">12 September 2024 18:30</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NotificationMenu;
