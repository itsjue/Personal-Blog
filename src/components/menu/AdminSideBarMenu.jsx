import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSideBarMenu() {
  const [activeTab, setActiveTab] = useState("articleManagement");
  const [articles, setArticles] = useState([]);

  return (
    <>
    <div className="bg-[#F9F8F6]">
      <div className="flex flex-col w-[280px] h-screen bg-[#EFEEEB]">
        <div className="pt-[74.15px] pl-[26.2px]">
          <img
            src="/src/assets/logo.png"
            alt="hh_logo"
            className="size-[60px]"
          />
          <h4 className="font-semibold text-xl text-[#F2B68C]">Admin Panel</h4>
        </div>
        <div className="flex flex-col flex-1 justify-between mt-[60px]">
          <div>
            <button
              onClick={() => setActiveTab("articleManagement")}
              className={`w-full flex gap-3 py-5 px-6 cursor-pointer ${
                activeTab === "articleManagement"
                  ? "bg-[#DAD6D1] text-[#43403B]"
                  : "text-[#75716B]"
              }`}
            >
              <img
                src="/src/assets/notebook_icon.png"
                alt="notebook_icon"
                className="size-6"
              />
              <div>Article management</div>
            </button>
            <button
              onClick={() => {
                setActiveTab("categoryManagement");
              }}
              className={`w-full flex gap-3 py-5 px-6 cursor-pointer ${
                activeTab === "categoryManagement"
                  ? "bg-[#DAD6D1] text-[#43403B]"
                  : "text-[#75716B]"
              }`}
            >
              <img
                src="/src/assets/file_icon.png"
                alt="file_icon"
                className="size-6"
              />
              <div>Category management</div>
            </button>
            <button
              onClick={() => {
                setActiveTab("profile");
              }}
              className={`w-full flex gap-3 py-5 px-6 cursor-pointer ${
                activeTab === "profile"
                  ? "bg-[#DAD6D1] text-[#43403B]"
                  : "text-[#75716B]"
              }`}
            >
              <img
                src="/src/assets/user_icon.png"
                alt="user_icon"
                className="size-6"
              />
              <div>Profile</div>
            </button>
            <button
              onClick={() => {
                setActiveTab("notification");
              }}
              className={`w-full flex gap-3 py-5 px-6 cursor-pointer ${
                activeTab === "notification"
                  ? "bg-[#DAD6D1] text-[#43403B]"
                  : "text-[#75716B]"
              }`}
            >
              <img
                src="/src/assets/bell_icon.png"
                alt="bell_icon"
                className="size-6"
              />
              <div>Notification</div>
            </button>
            <button
              onClick={() => {
                setActiveTab("resetPassword");
              }}
              className={`w-full flex gap-3 py-5 px-6 cursor-pointer ${
                activeTab === "resetPassword"
                  ? "bg-[#DAD6D1] text-[#43403B]"
                  : "text-[#75716B]"
              }`}
            >
              <img
                src="/src/assets/reset_icon.png"
                alt="reset_icon"
                className="size-6"
              />
              <div>Reset password</div>
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 py-5 pl-6">
              <img
                src="/src/assets/out_icon.png"
                alt="out_icon"
                className="size-6"
              />
              <Link to="/" className="text-[#75716B] cursor-pointer">
                  hh. website
              </Link>
            </div>
            <div className="flex items-center gap-3 py-5 pl-6 mb-4 border-t border-[#DAD6D1]">
              <img
                src="/src/assets/signout_icon.png"
                alt="signout_icon"
                className="size-6"
              />
              <button className="text-[#75716B] cursor-pointer">Log out</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminSideBarMenu;
