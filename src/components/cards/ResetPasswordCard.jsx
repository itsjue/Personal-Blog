import { X } from "lucide-react"

function ResetPasswordCard() {
    return (
        <>
        <div className="relative bg-[#f9f8f6] flex flex-col items-center w-[477px] h-fit gap-6 rounded-2xl">
            <div className="absolute top-4 right-6">
            <button><X /></button>
            </div>
            <h3 className="font-semibold text-2xl mt-[64px]">Reset password</h3>
            <p>Do you want to reset your password?</p>
            <div className="flex mb-10 gap-2">
            <button className="bg-[#ffffff] py-3 px-10 rounded-full border border-[#26231e] cursor-pointer">Cancel</button>
            <button className="bg-[#26231e] text-[#ffffff] py-3 px-10 rounded-full cursor-pointer">Reset</button>
            </div>
        </div>
        </>
    )
}

export default ResetPasswordCard