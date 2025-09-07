import { NavBar, Footer } from "@/components/Nav-Hero-FooterSection";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import AuthorCard from "@/components/cards/AuthorCard";
import {authors} from "@/data/authors";
import CommentSection from "@/components/CommentSection";

function ViewPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const isoDate = post.date;
  const formattedDate = new Date(isoDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
  }, [id]);

  return (
    <>
      <NavBar />

        <div className="max-w-[1200px] mx-auto flex flex-col my-15">
            <img src={post.image} alt={post.title} className="w-full h-[587px] object-cover rounded-3xl" />
          <div className="flex justify-between mt-[48px]">
            <div className="w-[815px]">
              <div className="flex items-center gap-4">
                <span className="bg-[#D7F2E9] text-[#12B279] py-1 px-3 rounded-full font-medium">{post.category}</span>
                <span className="text-[#75716B] text-[16px] font-medium">{formattedDate}</span>
              </div>
              <h1 className="text-[#26231E] text-[40px] font-semibold">{post.title}</h1>
              <div className="text-[16px] leading-6 my-12"><ReactMarkdown>{post.content}</ReactMarkdown></div>
            </div>
            <div>
              <AuthorCard
                name={authors[0].name}
                bio={authors[0].bio}
                avatar={authors[0].avatar}
              />
            </div>
          </div>
          <CommentSection />
        </div>

      <Footer />
    </>
  );
}

export default ViewPostPage;
