import { Link } from "react-router-dom";

function SignUpSection() {
  return (
    <>
      <div className="w-screen">
        <div className="w-[798px] h-[796px] flex flex-col items-center justify-center m-auto my-[60px] rounded-2xl bg-[#EFEEEB]">
          <h1 className="font-semibold text-[40px] text-[#26231E]">Sign up</h1>
          <form action="" className="flex flex-col">
            <label htmlFor="name" className="font-medium text-[#75716B] mt-10">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <label htmlFor="username" className="font-medium text-[#75716B] mt-7">
              Username
            </label>
            <input
              type="user"
              name="username"
              id="username"
              placeholder="Username"
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <label htmlFor="email" className="font-medium text-[#75716B] mt-7">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <label htmlFor="password" className="font-medium text-[#75716B] mt-7">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <button className="w-fit h-fit  flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:cursor-pointer hover:bg-[#75716B] transition">
              Sign up
            </button>
          </form>
          <div className="flex">
            <p className="text-[#75716B]">Already have an account?</p>
            <Link to={`/login`} className="ml-3 underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpSection;
