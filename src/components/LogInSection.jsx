function LogInSection() {
  return (
    <>
      <div className="w-screen">
        <div className="w-[798px] h-[540px] flex flex-col items-center justify-center m-auto mt-[60px] rounded-2xl bg-[#EFEEEB]">
          <h1 className="font-semibold text-[40px] text-[#26231E]">Log in</h1>
          <form action="" className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-[#75716B]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
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
              className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
            />
            <button className="w-fit h-fit  flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:cursor-pointer hover:bg-[#75716B] transition">
              Log in
            </button>
          </form>
          <div className="flex">
            <p className="text-[#75716B]">Don't have any account?</p>
            <a href="#" className="ml-3 underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogInSection;
