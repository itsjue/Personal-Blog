import { Link } from "react-router-dom";

function BlogCard(props) {
    const {id ,image, category, title, description, author, date} = props;

  return (
    <div className="flex flex-col gap-4">
      <Link to={`/posts/${id}`} className="relative h-[212px] lg:h-[360px]">
        <img className="w-full h-full object-cover rounded-md" src={image} alt={title} />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{category}
          </span>
        </div>
        <Link to={`/posts/${id}`}>
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
        {description}</p>
        <div className="flex items-center text-sm">
          <img className="w-8 h-8 rounded-full mr-2 object-cover" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt="Tomson P." />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;