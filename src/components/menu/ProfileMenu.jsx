import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ProfileMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseTab = () => setIsOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const activeTab = location.pathname === "/user/resetpassword" ? "reset" : "profile";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={user.image}
          alt={user.name}
          className="size-12 rounded-full object-cover"
        />
        <p className="font-medium text-[#43403B]">{user.name}</p>
        <img
          src="/assets/expand_down_icon.png"
          alt="expand_down_icon"
          className="size-4"
        />
      </button>

      {isOpen && (
        <div className="absolute top-19 bg-[#f9f8f6] w-[249px] rounded-xl shadow-xl">

            <button onClick={() => handleNavigate("/user/profile")} className="flex py-3 px-4 gap-3 cursor-pointer">
              <img
                src="/assets/user_icon.png"
                alt="profile_icon"
                className="size-6 opacity-90"
              />
              <p className="font-medium text-[#43403b]">Profile</p>
            </button>

            <button  onClick={() => handleNavigate("/user/resetpassword")} className="flex py-3 px-4 gap-3 cursor-pointer">
              <img
                src="/assets/reset_icon.png"
                alt="reset_icon"
                className="size-6 opacity-90"
              />
              <p className="font-medium text-[#43403b]">Reset password</p>
            </button>

          <button className="flex py-3 px-4 gap-3 border-t border-[#dad6d1] cursor-pointer">
            <img
              src="/assets/signout_icon.png"
              alt="signout_icon"
              className="size-6 opacity-90"
            />
            <p className="font-medium text-[#43403b]">Log out</p>
          </button>
        </div>
      )}
    </>
  );
}

export default ProfileMenu;
