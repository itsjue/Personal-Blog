import StatusCard from "./cards/StatusCard";
import { mockUsersData } from "@/data/mockUsers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogInSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user && user.isAdmin) {
      setIsLoggedIn(true);
      setLoginError(false);
      navigate("/admin-article-management");
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <div className="w-screen">
        <div className="w-[798px] h-[540px] flex flex-col items-center justify-center m-auto my-[60px] rounded-2xl bg-[#EFEEEB]">
          <h2 className="font-semibold text-xl text-[#F2B68C]">Admin Panel</h2>
          <h1 className="font-semibold text-[40px] text-[#26231E]">Log in</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-[#75716B]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {setEmail(e.target.value);
                setLoginError(false);
              }}
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <label
              htmlFor="password"
              className="font-medium text-[#75716B] mt-7"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setLoginError(false);
              }}
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <button className="w-fit h-fit  flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:cursor-pointer hover:bg-[#75716B] transition">
              Log in
            </button>
          </form>
        </div>
      </div>

      {loginError && (
          <div className="fixed bottom-9 right-6">
            <StatusCard
                title="Your password is incorrect or this email doesn't exist"
                description="Please try another password or email"
                bgColor="bg-[#EB5164]"
              />
          </div>
        )}
    </>
  );
}

export default AdminLogInSection;
