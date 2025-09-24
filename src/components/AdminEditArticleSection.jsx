import AdminCreateArticleSection from "./AdminCreateArticleSection";
import DeleteArticleCard from "./cards/DeleteArticleCard";
import { useState, useEffect } from "react";
import axios from "axios";


function AdminEditArticleSection({articleId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [article, setArticle] = useState({
        title: "",
        intro: "",
        content: "",
        thumbnail: null,
        category: "",
        author: "",
    });

    useEffect(() => {
        if (!articleId) return;
        axios
      .get(`https://blog-post-project-api.vercel.app/posts/${articleId}`)
      .then((res) => {
        const data = res.data;
        setArticle({
          title: data.title || "",
          intro: data.description || "",
          content: data.content || "",
          thumbnail: data.image || null,
          category: data.category || "",
          author: data.author || "",
        });
      })
      .catch((err) => console.error(err));
    }, [articleId])

  return (
    <div className="flex flex-col">
      <AdminCreateArticleSection article={article} setArticle={setArticle} />

      <div className="ml-[60px] mb-20">
        <button onClick={() => setShowDeleteModal(true)} className="flex items-center gap-1.5 rounded-md cursor-pointer">
          <img
            src="./public/assets/trash_icon.png"
            alt="trash_icon"
            className="w-6 h-6"
          />
          <span className="font-medium text-[#26231E] underline underline-offset-1">
            Delete article
          </span>
        </button>
      </div>

      {/* Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative">
            <DeleteArticleCard
              onCancel={() => setShowDeleteModal(false)}
              onConfirm={() => {
                console.log("Article deleted");
                setShowDeleteModal(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminEditArticleSection;
