import { Smile, Copy } from 'lucide-react';

function CommentSection(props) {
    const {likes} = props

    return (
        <div className="w-full bg-[#EFEEEB] py-4 px-6 rounded-2xl">
            <div className="flex justify-between">
                <button className='flex gap-3 justify-center bg-[white] border border-[#75716B] py-3 px-8 rounded-full'>
                    <Smile size={24} />
                    <p>321</p>
                </button>
                <div className="flex items-center gap-3">
                    <button className="flex gap-1.5 bg-[white] border border-[#75716B] py-3 px-8 rounded-full">
                    <Copy size={24} />
                    <p>Copy link</p>
                    </button>
                    <a href="#"><img src="/src/assets/facebook_logo.png" alt="facebook_logo" className="size-12" /></a>
                    <a href="#"><img src="/src/assets/linkedin_logo.png" alt="linkedin_logo" className="size-12" /></a>
                    <a href="#"><img src="/src/assets/twitter_logo.png" alt="twitter_logo" className="size-12" /></a>
                </div>
            </div>
        </div>
    )
}

export default CommentSection