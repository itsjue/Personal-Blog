import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // <- สร้างไฟล์นี้ตามขั้นตอนก่อนหน้า

function SignUpSection() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password, name, username } = form;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // ส่งข้อมูลเพิ่มเติมเก็บใน user_metadata
        data: { name, username },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // ✅ สมัครสำเร็จ Supabase จะส่งอีเมลยืนยัน (ถ้าเปิด email confirmation)
      alert("Please check your email to confirm your account");
      navigate("/login");
    }
  };

  return (
    <div className="w-screen">
      <div className="w-[798px] h-[796px] flex flex-col items-center justify-center m-auto my-[60px] rounded-2xl bg-[#EFEEEB]">
        <h1 className="font-semibold text-[40px] text-[#26231E]">Sign up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-medium text-[#75716B] mt-10">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          <label className="font-medium text-[#75716B] mt-7">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={form.username}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          <label className="font-medium text-[#75716B] mt-7">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          <label className="font-medium text-[#75716B] mt-7">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-fit h-fit flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:cursor-pointer hover:bg-[#75716B] transition"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <div className="flex">
          <p className="text-[#75716B]">Already have an account?</p>
          <Link to="/login" className="ml-3 underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
