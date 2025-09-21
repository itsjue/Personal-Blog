import { Link, useNavigate } from "react-router-dom";

function SignupSuccessfully() {
  return (
    <>
      <div className="w-screen mt-[60px]">
        <div className="bg-[#efeeeb] w-[798px] py-[80px] flex flex-col m-auto items-center justify-center gap-8 rounded-2xl">
          <img
            src="/src/assets/success_icon.png"
            alt="success_icon"
            className="size-20"
          />
          <h2 className="font-semibold text-5xl">Registration success</h2>
          <Link
            to={`/`}
            className="bg-[#26231e] text-white w-fit py-3 px-10 rounded-full cursor-pointer hover:bg-[#75716B] transition"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignupSuccessfully;
