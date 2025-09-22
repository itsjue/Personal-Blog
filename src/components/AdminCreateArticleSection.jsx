import AdminSideBarMenu from "./menu/AdminSideBarMenu";
import CategoriesDropDownMenu from "./menu/CategoriesDropdownMenu";
import { useState } from "react";

function AdminCreateArticleSection({ article, setArticle }) {
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <div className="flex">
          <div className="flex flex-1 bg-[#F9F8F6]">
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                <h3 className="font-semibold text-2xl text-[#26231E]">
                  Create article
                </h3>
                <div className="flex gap-2">
                  <button className="bg-white text-[#26231E] border border-[#75716B] px-10 py-3 rounded-full hover:text-[#75716B] hover:border-[#75716B] transition cursor-pointer">
                    Save as draft
                  </button>
                  <button className="bg-[#26231E] text-white py-3 px-10 rounded-full hover:bg-[#75716B] transition cursor-pointer">
                    Save and Publish
                  </button>
                </div>
              </div>

              <div className="w-full h-full flex flex-col pt-10 pb-7 px-[60px]">
                <p className="font-medium text-[#75716B]">Thumbnail image</p>
                <div className="flex items-end gap-7">
                  <div className="w-[460px] h-[260px] flex justify-center items-center bg-[#EFEEEB] border border-dashed border-[#DAD6D1] mt-4 rounded-md">
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
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
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                    <CategoriesDropDownMenu
                      value={article.category}
                      onChange={(cat) =>
                        setArticle({ ...article, category: cat })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#75716B] mt-7">Author name</p>
                  <input
                    type="text"
                    placeholder="Thompson P."
                    disabled
                    className="max-w-[480px] bg-[#EFEEEB] placeholder:text-[#75716B] py-3 px-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#75716B] mt-7">Title</p>
                  <input
                    type="text"
                    value={article.title}
                    placeholder="Article title"
                    onChange={(e) =>
                      setArticle({ ...article, title: e.target.value })
                    }
                    className="flex justify-between w-full font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] py-3 px-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#75716B] mt-7">
                    Introduction (max 120 letters)
                  </p>
                  <textarea
                    placeholder="Introduction"
                    value={article.intro}
                    onChange={(e) =>
                      setArticle({ ...article, intro: e.target.value })
                    }
                    className="min-h-[143px] flex justify-between w-full font-medium text-[#75716B] bg-[#FFFFFF] border border-[#DAD6D1] py-3 px-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#75716B] mt-7">Content</p>
                  <textarea
                    placeholder="Content"
                    value={article.content}
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
      </div>
    </>
  );
}

export default AdminCreateArticleSection;
