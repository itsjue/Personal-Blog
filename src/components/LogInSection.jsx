import { Link } from "react-router-dom";
import { mockUsersData } from "@/data/mockUsers";
import { useState } from "react";
import StatusCard from "@/components/cards/StatusCard";

function LogInSection() {
  const [form, setForm] = useState({email: "", password: ""});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsersData.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="w-screen">
        <div className="w-[798px] h-[540px] flex flex-col items-center justify-center m-auto my-[60px] rounded-2xl bg-[#EFEEEB]">
          <h1 className="font-semibold text-[40px] text-[#26231E]">Log in</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-[#75716B]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
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
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <button className="w-fit h-fit  flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:cursor-pointer hover:bg-[#75716B] transition">
              Log in
            </button>
          </form>
          <div className="flex">
            <p className="text-[#75716B] font-medium">Don't have any account?</p>
            <Link to={`/signup`} className="ml-3 underline font-medium">
              Sign up
            </Link>
          </div>
        </div>

        {error && (
          <div className="fixed bottom-9 right-6">
            <StatusCard
                title="Your password is incorrect or this email doesn't exist"
                description="Please try another password or email"
                bgColor="bg-[#EB5164]"
              />
          </div>
        )}
      </div>
    </>
  );
}

export default LogInSection;
