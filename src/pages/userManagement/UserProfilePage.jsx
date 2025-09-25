import { UserProfileSection, UserResetPasswordSection } from "@/components/UserProfileSection";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

function UserProfilePage({ defaultTab, user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);

  // กำหนด tab
  const initialTab = location.pathname.includes("resetpassword")
    ? "reset"
    : defaultTab || "profile";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Fetch user data จาก Supabase
  useEffect(() => {
    if (!user) return;

    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user)
        .single(); // single() เพราะเราจะได้ row เดียว

      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setCurrentUser(data);
      }
    };

    fetchUser();
  }, [user]);

  // Sync tab กับ path
  useEffect(() => {
    if (activeTab === "profile" && location.pathname !== "/user/profile") {
      navigate("/user/profile", { replace: true });
    } else if (activeTab === "reset" && location.pathname !== "/user/resetpassword") {
      navigate("/user/resetpassword", { replace: true });
    }
  }, [activeTab, navigate, location.pathname]);

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className="w-screen">
      <div className="w-fit flex flex-col items-start m-auto my-[52px]">
        <div className="flex items-center">
          <img
            src={currentUser.profile_pic || "/assets/mockup_profile_pic.jpeg"}
            alt="profile_pic"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <div className="flex gap-1 text-2xl text-[#75716B] font-semibold ml-4">
            <h3>
              {currentUser.name}
              <span className=" ml-4 pl-4 text-[#26231E] border-l-2 border-[#DAD6D1]">
                {activeTab === "profile" ? "Profile" : "Reset password"}
              </span>
            </h3>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center py-3 pl-4 mt-[30px] hover:cursor-pointer ${
                activeTab === "profile"
                  ? "text-[#43403B] font-medium"
                  : "text-[#75716B] font-medium"
              }`}
            >
              <img src="/assets/user_icon.png" alt="user_icon" className="size-6 mr-3" />
              <p>Profile</p>
            </button>

            <button
              onClick={() => setActiveTab("reset")}
              className={`flex items-center py-3 pl-4 hover:cursor-pointer ${
                activeTab === "reset"
                  ? "text-[#43403B] font-medium"
                  : "text-[#75716B] font-medium"
              }`}
            >
              <img src="/assets/reset_icon.png" alt="reset_icon" className="size-6 mr-3" />
              <p>Reset password</p>
            </button>
          </div>

          <UserProfileSection activeTab={activeTab} user={currentUser} />
          <UserResetPasswordSection activeTab={activeTab} user={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
