import AdminCreateArticleSection from "./AdminCreateArticleSection";

function AdminEditArticleSection() {
  return (
    <div className="flex flex-col">
      <AdminCreateArticleSection />

      <div className="ml-[60px] mb-20">
        <button className="flex items-center gap-1.5 rounded-md cursor-pointer">
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
    </div>
  );
}

export default AdminEditArticleSection;
