import { Smile, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateAccountCard from "./cards/CreateAccountCard";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import StatusCard from "./cards/StatusCard";

function CommentSection() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCopiedCard, setShowCopiedCard] = useState(false);

  useEffect(() => {
    const getPostsById = async () => {
      try {
        const res = await axios.get(
          `https://blog-post-project-api.vercel.app/posts/${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getPostsById();
  }, []);

  const handleLike = () => {
    if (!isLoggedIn) {
      setOpenDialog(true);
    } else {
      setPost({ ...post, likes: (post.likes || 0) + 1 });
    }
  };

  const handleComment = () => {
    if (!isLoggedIn) {
      setOpenDialog(true);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopiedCard(true);
    setTimeout(() => {
      setShowCopiedCard(false);
    }, 3000);
  };

  return (
    <>
      {!isLoggedIn && (
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
          <AlertDialogContent className="p-0 bg-transparent shadow-none border-none">
            <CreateAccountCard onClose={() => setOpenDialog(false)} />
          </AlertDialogContent>
        </AlertDialog>
      )}
      <div className="w-full bg-[#EFEEEB] py-4 px-6 rounded-2xl">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleLike}
            className="flex gap-3 justify-center bg-[white] border border-[#75716B] py-3 px-8 rounded-full hover:cursor-pointer"
          >
            <Smile size={24} />
            <p>{post.likes}</p>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex gap-1.5 bg-[white] border border-[#75716B] py-3 px-8 rounded-full hover:cursor-pointer"
            >
              <Copy size={24} />
              <p>Copy link</p>
            </button>

            {showCopiedCard && (
              <div className="fixed bottom-5 right-5 z-50">
                <StatusCard
                  title="Copied!"
                  description="This article has been copied to your clipboard."
                  bgColor="bg-[#12B279]"
                />
              </div>
            )}

            <a href="#">
              <img
                src="/src/assets/facebook_logo.png"
                alt="facebook_logo"
                className="size-12"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/linkedin_logo.png"
                alt="linkedin_logo"
                className="size-12"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/twitter_logo.png"
                alt="twitter_logo"
                className="size-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[48px]">
        <h2 className="text-[#75716B] font-medium">Comment</h2>
        <textarea
          name="comment"
          id="comment"
          placeholder="What are your thoughts?"
          value={comment}
          onChange={handleCommentChange}
          className="h-[102px] border border-[#DAD6D1] rounded-lg placeholder:text-[#75716B] py-3 px-4"
        ></textarea>
        <button
          type="submit"
          onClick={handleComment}
          className="flex self-end bg-[#26231E] text-white py-3 px-10 rounded-full hover:cursor-pointer hover:bg-[#75716B] transition"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default CommentSection;
