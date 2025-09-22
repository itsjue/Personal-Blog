import AdminCreateArticleSection from "@/components/AdminCreateArticleSection";
import AdminSideBarMenu from "@/components/menu/AdminSideBarMenu";

function AdminCreateArticlePage() {
  return (
    <div className="flex h-fit bg-[#F9F8F6]">
      <AdminSideBarMenu />
      <div className="flex-1 overflow-auto mb-[60px]">
        <AdminCreateArticleSection />
      </div>
    </div>
  );
}

export default AdminCreateArticlePage;
