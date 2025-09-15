import { useState } from "react";
import {
  StatusDropdownMenuCheckboxes,
  CategoriesDropdownMenuCheckboxes,
} from "./DropDownMenu";

function AdminArticleSection() {
  return (
    <>
      <div>
        <div className="flex w-full border">
          <div className="w-[280px] h-screen bg-[#EFEEEB]">
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
            <div>
                <div>
                <button>Article management</button>
                <button>Category management</button>
                <button>Profile</button>
                <button>Notofication</button>
                <button>Reset password</button>
                </div>
                <button>hh. website</button>
                <div>
                    Log out
                </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <div className="flex justify-around items-center h-[96px] w-screen border">
                <h3 className="font-semibold text-6 text-[#26231E]">Article management</h3>
                <button className="bg-[#26231E] text-white py-3 px-10 rounded-full">Create article</button>
              </div>
              <div>
                <input type="text" placeholder="Search..." />
                <StatusDropdownMenuCheckboxes />
                <CategoriesDropdownMenuCheckboxes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminArticleSection;
