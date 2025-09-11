import { useState } from "react";

function MemberProfileSection() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className="w-screen">
        <div className="w-fit flex flex-col items-start m-auto my-[52px]">
          <div className="flex items-center">
            <img
              src="/src/assets/mockup_profile_pic.jpeg"
              alt="profile_pic"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="flex gap-1 text-2xl text-[#75716B] font-semibold ml-4">
              <h3>
                Dogboy
                <span className=" ml-4 pl-4 text-[#26231E] border-l-2 border-[#DAD6D1]">
                  Profile
                </span>
              </h3>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <button
                onClick={() => {
                  setActiveTab("profile");
                }}
                className={`flex items-center py-3 pl-4 mt-[30px] hover:cursor-pointer ${
                  activeTab === "profile"
                  ? "text-[#43403B] font-medium"
                  : "text-[#75716B] font-medium"
                }`}
              >
                <img
                  src="/src/assets/user_icon.png"
                  alt="user_icon"
                  className="size-6 mr-3"
                />
                <p>Profile</p>
              </button>
              <button
                onClick={() => {
                  setActiveTab("reset");
                  
                }}
                className={`flex items-center py-3 pl-4 hover:cursor-pointer ${
                  activeTab === "reset"
                  ? "text-[#43403B] font-medium"
                  : "text-[#75716B] font-medium"
                }`}
              >
                <img
                  src="/src/assets/reset_icon.png"
                  alt="reset_icon"
                  className="size-6 mr-3"
                />
                <p>Reset password</p>
              </button>
            </div>

            {activeTab === "profile" && (
              <>
                <div className="w-fit bg-[#EFEEEB] p-10 ml-12 mt-[30px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img
                      src="/src/assets/mockup_profile_pic.jpeg"
                      alt="profile_pic"
                      className="w-[120px] h-[120px] rounded-full object-cover"
                    />
                    <button className="w-fit h-fit flex justify-center items-center bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] hover:cursor-pointer transition">
                      Upload profile picture
                    </button>
                  </div>

                  <form action="" className="flex flex-col pt-10 px-10">
                    <label
                      htmlFor="name"
                      className="text-[#75716B] font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] mt-1 rounded-[8px]"
                    />
                    <label
                      htmlFor="username"
                      className="text-[#75716B] font-medium mt-7"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="name"
                      className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] mt-1 rounded-[8px]"
                    />
                    <label
                      htmlFor="email"
                      className="text-[#75716B] font-medium mt-7"
                    >
                      Email
                    </label>
                    <p className="mt-3 text-[#75716B] pl-5">Dogboy@gmail.com</p>
                    <button className="w-fit h-fit flex bg-[#26231E] text-[#ffffff] font-medium py-3 px-10 rounded-full mt-10 hover:bg-[#75716B] transition hover:cursor-pointer">
                      Save
                    </button>
                  </form>
                </div>
              </>
            )}

            {activeTab === "reset" && (
              <>
                <div className="w-[550px] bg-[#EFEEEB] p-10 ml-12 mt-[30px] rounded-2xl">
                  <form action="" className="flex flex-col">
                    <label htmlFor="currentPassword" className="text-[#75716B] font-medium">Current password</label>
                    <input type="password" className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] mt-1 rounded-[8px]" />
                    <label htmlFor="newPassword" className="text-[#75716B] font-medium mt-7">New password</label>
                    <input type="password" className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] mt-1 rounded-[8px]"  />
                    <label htmlFor="confirmNewPassword" className="text-[#75716B] font-medium mt-7">
                      Confirm new password
                    </label>
                    <input type="password" className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] mt-1 rounded-[8px]"  />
                    <button className="w-fit h-fit flex bg-[#26231E] text-[#ffffff] font-medium py-3 px-10 rounded-full mt-10 hover:bg-[#75716B] transition hover:cursor-pointer">Reset password</button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberProfileSection;
