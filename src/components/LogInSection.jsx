// components/LogInSection.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import StatusCard from "@/components/cards/StatusCard";

function LogInSection({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ อยู่ใน Router แล้ว

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setUser(data.user); // เก็บ user state
    navigate("/"); // redirect หลัง login สำเร็จ
  };

  return (
    <div className="w-screen">
      <div className="w-[798px] h-[540px] flex flex-col items-center justify-center m-auto my-[60px] rounded-2xl bg-[#EFEEEB]">
        <h1 className="font-semibold text-[40px] text-[#26231E]">Log in</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-[#75716B]">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          <label htmlFor="password" className="font-medium text-[#75716B] mt-7">Password</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-[558px] h-12 border border-[#DAD6D1] bg-white rounded-[8px] px-4 placeholder:text-[#75716B]"
          />

          <button
            type="submit"
            className="w-fit flex self-center py-3 px-10 text-white bg-[#26231E] rounded-full my-10 hover:bg-[#75716B] transition"
          >
            Log in
          </button>
        </form>

        <div className="flex">
          <p className="text-[#75716B] font-medium">Don't have an account?</p>
          <Link to="/signup" className="ml-3 underline font-medium">Sign up</Link>
        </div>
      </div>

      {error && (
        <div className="fixed bottom-9 right-6">
          <StatusCard
            title="Login Failed"
            description={error}
            bgColor="bg-[#EB5164]"
          />
        </div>
      )}
    </div>
  );
}

export default LogInSection;
