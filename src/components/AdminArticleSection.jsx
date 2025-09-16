import { useState } from "react";
import {
  StatusDropdownMenuCheckboxes,
  CategoriesDropdownMenuCheckboxes,
} from "./DropDownMenu";

function AdminArticleSection() {
  return (
    <>
      <div>
        <div className="flex">
          <div className="flex flex-col w-[280px] h-screen bg-[#EFEEEB]">
            <div className="pt-[74.15px] pl-[26.2px]">
              <img
                src="/src/assets/logo.png"
                alt="hh_logo"
                className="size-[60px]"
              />
              <h4 className="font-semibold text-xl text-[#F2B68C]">
                Admin Panel
              </h4>
            </div>
            <div className="mt-[60px]">
              <div>
                <div className="flex gap-3 py-5 px-6">
                  <img
                    src="/src/assets/notebook_icon.png"
                    alt="notebook_icon"
                    className="size-6"
                  />
                  <button>Article management</button>
                </div>
                <div className="flex gap-3 py-5 px-6">
                  <img
                    src="/src/assets/file_icon.png"
                    alt="file_icon"
                    className="size-6"
                  />
                  <button>Category management</button>
                </div>
                <div className="flex gap-3 py-5 px-6">
                  <img
                    src="/src/assets/user_icon.png"
                    alt="user_icon"
                    className="size-6"
                  />
                  <button>Profile</button>
                </div>
                <div className="flex gap-3 py-5 px-6">
                  <img
                    src="/src/assets/bell_icon.png"
                    alt="bell_icon"
                    className="size-6"
                  />
                  <button>Notification</button>
                </div>
                <div className="flex gap-3 py-5 px-6">
                  <img
                    src="/src/assets/reset_icon.png"
                    alt="reset_icon"
                    className="size-6"
                  />
                  <button>Reset password</button>
                </div>
              </div>
              <div className="flex flex-col">
                <button>hh. website</button>
                <button>Log out</button>
              </div>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                <h3 className="font-semibold text-6 text-[#26231E]">
                  Article management
                </h3>
                <button className="bg-[#26231E] text-white py-3 px-10 rounded-full">
                  Create article
                </button>
              </div>
              <div className="flex items-center justify-between px-[60px]">
                <div className="relative">
                  <img
                    src="/src/assets/search_icon.png"
                    alt="search_icon"
                    className="absolute size-6 translate-x-1/2 translate-y-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="max-w-[360px] font-medium py-3 px-11 bg-white border border-[#DAD6D1] rounded-xl placeholder:text-[#75716B]"
                  />
                </div>
                <div>
                  <StatusDropdownMenuCheckboxes />
                  <CategoriesDropdownMenuCheckboxes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminArticleSection;
