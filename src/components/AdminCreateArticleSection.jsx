import AdminSideBarMenu from "./menu/AdminSideBarMenu";
import CategoriesDropDownMenu from "./menu/CategoriesDropdownMenu";
import { useState, useEffect } from "react";
import StatusCard from "./cards/StatusCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminCreateArticleSection({ article, setArticle }) {
  const [thumbnail, setThumbnail] = useState(article?.thumbnail || null);
  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
        setArticle({ ...article, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveDraft = async () => {
    if (!article || !article.title) {
      alert("Please enter at least a title");
      return;
    }

    try {
      await axios.post("https://blog-post-project-api.vercel.app/posts", {
        ...article,
        status: "draft",
      });

      navigate("/admin-articles", { state: { showStatus: "draftSaved" } });
    } catch (err) {
      console.error("Save draft failed:", err);
    }
  };

  useEffect(() => {
    if (!article) {
      setArticle({
        author: "",
        title: "",
        intro: "",
        content: "",
        category: "",
        thumbnail: null,
      });
    }
  }, [article, setArticle]);

  useEffect(() => {
    if (article?.thumbnail) {
      setThumbnail(article.thumbnail);
    }
  }, [article?.thumbnail]);

  return (
    <div className="flex">
      <div className="flex flex-1 bg-[#F9F8F6]">
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
            <h3 className="font-semibold text-2xl text-[#26231E]">
              {article?.id ? "Edit Article" : "Create Article"}
            </h3>
            <div className="flex gap-2">
              <button
              type="button"
                onClick={handleSaveDraft}
                className="bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] transition cursor-pointer"
              >
                Save as draft
              </button>
              <button className="bg-[#26231E] text-white py-3 px-10 rounded-full hover:bg-[#75716B] transition cursor-pointer">
                Save and Publish
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="w-full h-full flex flex-col pt-10 pb-7 px-[60px]">
            {/* Thumbnail */}
            <p className="font-medium text-[#75716B]">Thumbnail image</p>
            <div className="flex items-end gap-7">
              <div className="w-[460px] h-[260px] flex justify-center items-center bg-[#EFEEEB] border border-dashed border-[#DAD6D1] mt-4 rounded-md">
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt="thumbnail_preview"
                    className="object-cover w-full h-full rounded-md"
                  />
                ) : (
                  <img
                    src="src/assets/Img_box_icon.png"
                    alt="img_box_icon"
                    className="size-10"
                  />
                )}
              </div>

              <input
                id="thumbnailUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailChange}
              />
              <label
                htmlFor="thumbnailUpload"
                className="bg-white text-[#26231E] border border-[#75716B] py-3 px-10 rounded-full cursor-pointer hover:text-[#75716B] hover:border-[#75716B] transition"
              >
                Upload thumbnail image
              </label>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <CategoriesDropDownMenu
                value={article?.category || ""}
                onChange={(cat) => setArticle({ ...article, category: cat })}
              />
            </div>

            {/* Author */}
            <div className="flex flex-col gap-1">
              <p className="text-[#75716B] mt-7">Author name</p>
              <input
                type="text"
                placeholder="Author name"
                value={article?.author ?? ""}
                onChange={(e) =>
                  setArticle({ ...article, author: e.target.value })
                }
                disabled={!!article?.author}
                className="max-w-[480px] font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] disabled:bg-[#EFEEEB] placeholder:text-[#75716B] py-3 px-4 rounded-lg"
              />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-1">
              <p className="text-[#75716B] mt-7">Title</p>
              <input
                type="text"
                placeholder="Article title"
                value={article?.title || ""}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
                className="flex justify-between w-full font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] py-3 px-4 rounded-lg"
              />
            </div>

            {/* Introduction */}
            <div className="flex flex-col gap-1">
              <p className="text-[#75716B] mt-7">
                Introduction (max 120 letters)
              </p>
              <textarea
                placeholder="Introduction"
                value={article?.intro || ""}
                onChange={(e) =>
                  setArticle({ ...article, intro: e.target.value })
                }
                className="min-h-[143px] flex justify-between w-full font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] py-3 px-4 rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <p className="text-[#75716B] mt-7">Content</p>
              <textarea
                placeholder="Content"
                value={article?.content || ""}
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
                className="min-h-[572px] flex justify-between w-full font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] py-3 px-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateArticleSection;
