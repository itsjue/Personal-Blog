import AdminSideBarMenu from "@/components/menu/AdminSideBarMenu"
import AdminEditArticleSection from "@/components/AdminEditArticleSection"
import { useParams } from "react-router-dom"

function AdminEditArticlePage() {
    const {id} = useParams();
    return (
        <div className="flex h-fit bg-[#F9F8F6]">
            <AdminSideBarMenu />
            <div className="flex-1 overflow-auto">
                <AdminEditArticleSection articleId={id} />
            </div>
        </div>
    )
}

export default AdminEditArticlePage
