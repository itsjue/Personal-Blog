import AdminCreateArticleSection from "./AdminCreateArticleSection";
import DeleteArticleCard from "./cards/DeleteArticleCard";
import { useState } from "react";

function AdminEditArticleSection() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="flex flex-col">
      <AdminCreateArticleSection />

      <div className="ml-[60px] mb-20">
        <button onClick={() => setShowDeleteModal(true)} className="flex items-center gap-1.5 rounded-md cursor-pointer">
          <img
            src="/src/assets/trash_icon.png"
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
                // logic ลบ article
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
