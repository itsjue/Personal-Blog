import { X } from 'lucide-react';

function CreateAccountCard() {
    return (
        <div className="flex flex-col items-center w-[621px] h-[352px] p-6 rounded-2xl border border-red-500">
            <div className="flex self-end">
            <X />
            </div>
            <h1 className=" text-center text-[40px] font-semibold leading-12 my-6">Create an account to <br />continue</h1>
            <a href="#" className="bg-[#26231E] text-white py-3 px-10 rounded-full font-medium hover:bg-[#75716B] transition">Create account</a>
            <div className="flex gap-3 mt-10">
                <p className="text-[#75716B] font-medium">Already have an account?</p>
                <a href="#" className="font-medium underline">Log in</a>
            </div>
        </div>
    )
}

export default CreateAccountCard;