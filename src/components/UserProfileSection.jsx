import { useEffect, useState } from "react";

export function UserProfileSection({ activeTab, user }) {
  if (activeTab !== "profile" || !user) return null;

  const [showCard, setShowCard] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if(user) {
      setFormData({
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
    });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // waiting for logic
  }

  return (
    <>
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

            <form onSubmit={handleSave} className="flex flex-col pt-10 px-10">
              <label htmlFor="name" className="text-[#75716B] font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] p-4 mt-1 rounded-[8px]"
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
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] p-4 mt-1 rounded-[8px]"
              />
              <label
                htmlFor="email"
                className="text-[#75716B] font-medium mt-7"
              >
                Email
              </label>
              <p className="mt-3 text-[#75716B] pl-5">
                {formData.email}
              </p>
              <button type="submit" className="w-fit h-fit flex bg-[#26231E] text-[#ffffff] font-medium py-3 px-10 rounded-full mt-10 hover:bg-[#75716B] transition hover:cursor-pointer">
                Save
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export function UserResetPasswordSection({ activeTab, user }) {

  return (
    <>
      {activeTab === "reset" && (
        <>
          <div className="w-[550px] bg-[#EFEEEB] p-10 ml-12 mt-[30px] rounded-2xl">
            <form action="" className="flex flex-col">
              <label
                htmlFor="currentPassword"
                className="text-[#75716B] font-medium"
              >
                Current password
              </label>
              <input
                type="password"
                className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] p-4 mt-1 rounded-[8px]"
              />
              <label
                htmlFor="newPassword"
                className="text-[#75716B] font-medium mt-7"
              >
                New password
              </label>
              <input
                type="password"
                className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] p-4 mt-1 rounded-[8px]"
              />
              <label
                htmlFor="confirmNewPassword"
                className="text-[#75716B] font-medium mt-7"
              >
                Confirm new password
              </label>
              <input
                type="password"
                className="w-[470px] h-[48px] border border-[#DAD6D1] bg-[#ffffff] p-4 mt-1 rounded-[8px]"
              />
              <button className="w-fit h-fit flex bg-[#26231E] text-[#ffffff] font-medium py-3 px-10 rounded-full mt-10 hover:bg-[#75716B] transition hover:cursor-pointer">
                Reset password
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
