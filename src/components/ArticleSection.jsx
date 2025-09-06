import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";

export function ArticleSection() {
  const articleCategories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://blog-post-project-api.vercel.app/posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const filteredPosts = (category === "Highlight" ? posts : posts.filter((p) => p.category === category))
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="my-[40px]">
      <div className="w-[90%] mx-auto">
        <h2 className="text-[#26231E] text-3xl mb-8 lg:mb-0 lg:text-2xl font-semibold">
          Latest articles
        </h2>

        {/* Desktop Device */}
        <div className="justify-between px-6 py-4 my-10 bg-[#EFEEEB] rounded-2xl hidden lg:flex">
          <ul className="flex gap-2.5">
            {articleCategories.map((cat) => (
              <li key={cat} className="flex items-center">
                <button
                  className={`text-[#75716B] font-medium py-3 px-5 rounded-[8px] cursor-pointer hover:bg-[#DAD6D1] hover:text-[#43403B] transition${category === cat ? ' bg-[#DAD6D1] text-[#43403B]' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-[360px] self-center bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px] placeholder-[#75716B] placeholder:font-medium focus:border-[#75716B] focus:outline-none focus:ring-0"
            />
            <img
              src="src/assets/search_icon.png"
              alt="search_icon"
              className="absolute size-6 -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1%] opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="flex flex-col lg:hidden bg-[#EFEEEB] w-full p-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full self-center bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px] placeholder-[#75716B] placeholder:font-medium focus:border-[#75716B] focus:outline-none focus:ring-0"
          />
          <img
            src="src/assets/search_icon.png"
            alt="search_icon"
            className="absolute size-6 -translate-x-1/2 -translate-y-1/2 top-1/2 right-[1%] opacity-70"
          />
        </div>
        <div className="mt-4">
          <h3 className="flex justify-start text-2xl text-[#75716B] font-medium">
            Category
          </h3>
          <Select>
            <SelectTrigger className="w-full text-[#75716B] font-medium mt-1 bg-white py-3 pr-3 pl-4 border border-[#DAD6D1] rounded-[8px]">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>
            <SelectContent>
              {articleCategories.map((category) => (
                <SelectItem value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-[90%] h-auto mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {filteredPosts.map((post, index) => (
            <BlogCard key={index}
            id={index + 1}
            title={post.title}
            description={post.description}
            author={post.author}
            date={new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            image={post.image}
            category={post.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
