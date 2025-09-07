import { NavBar, Footer } from "@/components/Nav-Hero-FooterSection";
import { CircleAlert } from 'lucide-react';
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="w-full flex flex-col flex-grow items-center justify-center gap-5">
          <CircleAlert size={64} />
          <h2 className="text-lg font-bold">Page Not Found</h2>

          <Link to={`/`} className="bg-[#26231E] text-white text-sm px-7 py-3 rounded-full hover:bg-[#75716B] transition">Go To Homepage</Link>

      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;