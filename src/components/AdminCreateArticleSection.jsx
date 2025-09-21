import AdminSideBarMenu from "./menu/AdminSideBarMenu";

function AdminCreateArticleSection() {
  return (
    <>
      <div>
        <div className="flex">
          <AdminSideBarMenu />
          <div className="flex flex-1">
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-center h-[96px] px-[60px] border-b border-[#DAD6D1]">
                <h3 className="font-semibold text-6 text-[#26231E]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCreateArticleSection;
