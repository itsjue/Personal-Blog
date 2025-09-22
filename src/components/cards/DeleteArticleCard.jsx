import { X } from "lucide-react";

function DeleteArticleCard({onCancel, onConfirm}) {
  return (
    <>
      <div className="relative w-[477px] h-[256px] bg-white flex flex-col items-center justify-center gap-6 rounded-2xl">
        <button onClick={onCancel} className="absolute right-5 top-3 cursor-pointer">
          <X />
        </button>
        <h3 className="font-semibold text-2xl text-[#26231E]">Delete article</h3>
        <p className="font-medium text-[#75716B]">Do you want to delete this article</p>
        <div className="flex gap-2">
            <button onClick={onCancel} className="bg-white text-[#26231E] py-3 px-10 border border-[#75716B] rounded-full cursor-pointer hover:text-[#75716B] hover:border-[#75716B] transition">Cancel</button>
            <button onClick={onConfirm} className="bg-[#26231E] text-white py-3 px-10 rounded-full cursor-pointer hover:bg-[#75716B] transition">Delete</button>
        </div>
      </div>
    </>
  );
}

export default DeleteArticleCard;
