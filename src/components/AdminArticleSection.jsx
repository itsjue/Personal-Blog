import { useState, useEffect } from "react";
import axios from "axios";
import AdminSideBarMenu from "./menu/AdminSideBarMenu";
import { Link, useLocation } from "react-router-dom";
import StatusCard from "./cards/StatusCard";
import NotificationCard from "./cards/NotificationCard";

function AdminArticleSection() {
  const location = useLocation();
  const activeTab =
    new URLSearchParams(location.search).get("tab") || "articleManagement";
  const [articles, setArticles] = useState([]);
  const [showStatus, setShowStatus] = useState(
    location.state?.showStatus || null
  );

  useEffect(() => {
    getArticle();
    if (location.state?.showStatus) {
      const timer = setTimeout(() => setShowStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const getArticle = async () => {
    try {
      const response = await axios.get(
        "https://blog-post-project-api.vercel.app/posts"
      );
      setArticles(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="flex bg-[#F9F8F6]">
        <AdminSideBarMenu />
        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            {activeTab === "articleManagement" && (
              <>
                <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                  <h3 className="font-semibold text-2xl text-[#26231E]">
                    Article management
                  </h3>

                  <Link
                    to="/admin-article-create"
                    className="bg-[#26231E] text-white py-3 px-10 rounded-full hover:bg-[#75716B] transition cursor-pointer"
                  >
                    Create article
                  </Link>
                </div>
              </>
            )}
            {activeTab === "categoryManagement" && (
              <>
                <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                  <h3 className="font-semibold text-2xl text-[#26231E]">
                    Category management
                  </h3>

                  <Link
                    to="/admin-article-create"
                    className="bg-[#26231E] text-white py-3 px-10 rounded-full hover:bg-[#75716B] transition cursor-pointer"
                  >
                    Create category
                  </Link>
                </div>
              </>
            )}
            {activeTab === "profile" && (
              <>
                <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                  <h3 className="font-semibold text-2xl text-[#26231E]">
                    Profile
                  </h3>

                  <Link
                    to="/admin-article-create"
                    className="bg-[#26231E] text-white py-3 px-10 rounded-full hover:bg-[#75716B] transition cursor-pointer"
                  >
                    Save
                  </Link>
                </div>
              </>
            )}
            {activeTab === "notification" && (
              <>
                <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                  <h3 className="font-semibold text-2xl text-[#26231E]">
                    Notification
                  </h3>
                </div>
              </>
            )}

            <div className="w-[1040px] flex justify-between mt-10 mx-auto">
              {(activeTab === "articleManagement" ||
                activeTab === "categoryManagement") && (
                <div className="relative">
                  <img
                    src="/src/assets/search_icon.png"
                    alt="search_icon"
                    className="absolute size-6 translate-x-1/2 translate-y-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="max-w-[360px] font-medium py-3 px-11 bg-white border border-[#DAD6D1] rounded-xl placeholder:text-[#75716B]"
                  />
                </div>
              )}

              {activeTab === "articleManagement" && (
                <div className="flex gap-4">
                  <div className="w-[200px] flex justify-between items-center py-3 px-4 font-medium bg-white border border-[#DAD6D1] rounded-xl">
                    <p className="text-[#75716B]">Status</p>
                    <img
                      src="src/assets/expand_down_icon.png"
                      alt="expand_down"
                      className="size-6"
                    />
                  </div>
                  <div className="w-[200px] flex justify-between items-center py-3 px-4 font-medium bg-white border border-[#DAD6D1] rounded-xl">
                    <p className="text-[#75716B]">Category</p>
                    <img
                      src="src/assets/expand_down_icon.png"
                      alt="expand_down"
                      className="size-6"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Tab Content */}
            {activeTab === "articleManagement" && (
              <>
                <div className="w-[1040px] h-fit flex mt-5 mx-auto border border-[#DAD6D1] shadow-lg rounded-t-xl">
                  <div className="w-full flex items-center justify-between pr-[120px]">
                    <p className="font-medium text-[#75716B] py-3 px-6">
                      Article title
                    </p>
                    <div className="flex">
                      <p className="font-medium text-[#75716B] py-3 px-6">
                        Category
                      </p>
                      <p className="font-medium text-[#75716B] py-3 pl-6 pr-[84px]">
                        Status
                      </p>
                    </div>
                  </div>
                </div>
                {articles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`w-[1040px] flex items-center mx-auto border-l border-r border-b border-[#DAD6D1] 
        ${index % 2 !== 0 ? "bg-[#EFEEEB]" : "bg-white"} 
        ${index === articles.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    <p className="w-[600px] text-[#43403B] py-5 px-6 truncate">
                      {article.title}
                    </p>
                    <p className="w-[120px] text-[#43403B] py-5 px-20">
                      {article.category || "General"}
                    </p>
                    <p className="w-[180px] text-[#43403B] py-5 px-12">
                      {article.status || "Draft"}
                    </p>
                    <div className="flex gap-5 py-5 px-6">
                      <Link
                        to={`/admin-article-edit/${article.id}`}
                        className="size-6 cursor-pointer"
                      >
                        <img src="/src/assets/edit_icon.png" alt="edit_icon" />
                      </Link>
                      <button className="size-6 cursor-pointer">
                        <img
                          src="/src/assets/trash_icon.png"
                          alt="trash_icon"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "categoryManagement" && (
              <>
                <div className="w-[1040px] h-fit flex mt-5 mx-auto border border-[#DAD6D1] shadow-lg rounded-t-xl">
                  <div className="w-full flex items-center justify-between pr-[120px]">
                    <p className="font-medium text-[#75716B] py-3 px-6">
                      Category
                    </p>
                  </div>
                </div>
                {Array.from(
                  new Set(
                    articles.map((article) => article.category || "General")
                  )
                ).map((category, index) => (
                  <div
                    key={index}
                    className={`w-[1040px] flex items-center justify-between mx-auto border-l border-r border-b border-[#DAD6D1] 
        ${index % 2 !== 0 ? "bg-[#EFEEEB]" : "bg-white"} 
        ${index === category.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    <p className="w-[800px] text-[#43403B] py-5 px-6">
                      {category}
                    </p>
                    <div className="flex gap-5 py-5 px-6">
                      <button className="size-6 cursor-pointer">
                        <img src="/src/assets/edit_icon.png" alt="edit_icon" />
                      </button>
                      <button className="size-6 cursor-pointer">
                        <img
                          src="/src/assets/trash_icon.png"
                          alt="trash_icon"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {activeTab === "profile" && (
              <>
                <div className="h-fit mx-[60px]">
                  <div className="flex">
                    <div className="flex items-center pr-[73px] pb-10 gap-7 border-b border-[#DAD6D1]">
                      <img
                        src="/src/assets/mockup_profile_pic.jpeg"
                        alt="profile_pic"
                        className="w-[120px] h-[120px] object-cover rounded-full"
                      />
                      <button className="py-3 px-10 text-[#26231E] bg-white border border-[#75716B] rounded-full cursor-pointer">
                        Upload profile picture
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 gap-7">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="max-w-[480px] bg-white py-3 px-4 border border-[#DAD6D1] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="max-w-[480px] bg-white py-3 px-4 border border-[#DAD6D1] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="max-w-[480px] bg-white py-3 px-4 border border-[#DAD6D1] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="bio">Bio (max 120 letters)</label>
                      <textarea
                        name="bio"
                        id="bio"
                        className="max-w-[1040px] bg-white py-3 px-4 border border-[#DAD6D1] rounded-sm"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "notification" && (
              <>
                <div>
                  <NotificationCard />
                </div>
              </>
            )}
            {activeTab === "resetPassword" && (
              <>
                <div className="w-[1040px] h-fit flex mt-5 mx-auto border border-[#DAD6D1] shadow-lg rounded-t-xl">
                  <div className="w-full flex items-center justify-between pr-[120px]">
                    <p className="font-medium text-[#75716B] py-3 px-6">
                      Category
                    </p>
                  </div>
                </div>
                {Array.from(
                  new Set(
                    articles.map((article) => article.category || "General")
                  )
                ).map((category, index) => (
                  <div
                    key={index}
                    className={`w-[1040px] flex items-center justify-between mx-auto border-l border-r border-b border-[#DAD6D1] 
        ${index % 2 !== 0 ? "bg-[#EFEEEB]" : "bg-white"} 
        ${index === category.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    <p className="w-[800px] text-[#43403B] py-5 px-6">
                      {category}
                    </p>
                    <div className="flex gap-5 py-5 px-6">
                      <button className="size-6 cursor-pointer">
                        <img src="/src/assets/edit_icon.png" alt="edit_icon" />
                      </button>
                      <button className="size-6 cursor-pointer">
                        <img
                          src="/src/assets/trash_icon.png"
                          alt="trash_icon"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminArticleSection;
