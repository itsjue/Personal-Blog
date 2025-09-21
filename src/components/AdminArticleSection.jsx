import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminArticleSection() {
  const [activeTab, setActiveTab] = useState("acticleManagement");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const response = await axios.get('https://blog-post-project-api.vercel.app/posts');
      setArticles(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-[280px] h-screen bg-[#EFEEEB]">
          <div className="pt-[74.15px] pl-[26.2px]">
            <img
              src="/src/assets/logo.png"
              alt="hh_logo"
              className="size-[60px]"
            />
            <h4 className="font-semibold text-xl text-[#F2B68C]">
              Admin Panel
            </h4>
          </div>
          <div className="flex flex-col flex-1 justify-between mt-[60px]">
            <div>
              <div className="flex gap-3 py-5 px-6">
                <img
                  src="/src/assets/notebook_icon.png"
                  alt="notebook_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Article management</button>
              </div>
              <div className="flex gap-3 py-5 px-6">
                <img
                  src="/src/assets/file_icon.png"
                  alt="file_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Category management</button>
              </div>
              <div className="flex gap-3 py-5 px-6">
                <img
                  src="/src/assets/user_icon.png"
                  alt="user_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Profile</button>
              </div>
              <div className="flex gap-3 py-5 px-6">
                <img
                  src="/src/assets/bell_icon.png"
                  alt="bell_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Notification</button>
              </div>
              <div className="flex gap-3 py-5 px-6">
                <img
                  src="/src/assets/reset_icon.png"
                  alt="reset_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Reset password</button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 py-5 pl-6">
                <img
                  src="/src/assets/out_icon.png"
                  alt="out_icon"
                  className="size-6"
                />
                <Link to="/"><button className="text-[#75716B] cursor-pointer">hh. website</button></Link>
              </div>
              <div className="flex items-center gap-3 py-5 pl-6 mb-4 border-t border-[#DAD6D1]">
                <img
                  src="/src/assets/signout_icon.png"
                  alt="signout_icon"
                  className="size-6"
                />
                <button className="text-[#75716B] cursor-pointer">Log out</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
              <h3 className="font-semibold text-6 text-[#26231E]">
                Article management
              </h3>
              <button className="bg-[#26231E] text-white py-3 px-10 rounded-full cursor-pointer">
                Create article
              </button>
            </div>
            <div className="w-[1040px] flex justify-between mt-10 mx-auto">
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
            </div>
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

            {/* Table Rows */}
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
              <p className="w-[120px] text-[#43403B] py-5 px-20">{article.category || "General"}</p>
              <p className="w-[180px] text-[#43403B] py-5 px-12">{article.status || "Draft"}</p>
              <div className="flex gap-5 py-5 px-6">
                <button className="size-6 cursor-pointer">
                  <img src="/src/assets/edit_icon.png" alt="edit_icon" />
                </button>
                <button className="size-6 cursor-pointer">
                  <img src="/src/assets/trash_icon.png" alt="trash_icon" />
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminArticleSection;
