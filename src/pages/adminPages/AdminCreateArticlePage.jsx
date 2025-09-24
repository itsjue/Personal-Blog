import AdminCreateArticleSection from "@/components/AdminCreateArticleSection";
import AdminSideBarMenu from "@/components/menu/AdminSideBarMenu";
import { useState } from "react";

function AdminCreateArticlePage() {
  const [article, setArticle] = useState({
    author: "",
    title: "",
    intro: "",
    content: "",
    category: "",
    thumbnail: null,
  });

  return (
    <div className="flex h-fit bg-[#F9F8F6]">
      <AdminSideBarMenu />
      <div className="flex-1 overflow-auto mb-[60px]">
        <AdminCreateArticleSection article={article} setArticle={setArticle} />
      </div>
    </div>
  );
}

export default AdminCreateArticlePage;
