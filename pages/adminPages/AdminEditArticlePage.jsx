import AdminSideBarMenu from "@/components/menu/AdminSideBarMenu"
import AdminEditArticleSection from "@/components/AdminEditArticleSection"

function AdminEditArticlePage() {
    return (
        <div className="flex h-fit bg-[#F9F8F6]">
            <AdminSideBarMenu />
            <div className="flex-1 overflow-auto">
                <AdminEditArticleSection />
            </div>
        </div>
    )
}

export default AdminEditArticlePage
