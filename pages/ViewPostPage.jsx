import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewPostPage(props) {
    const {image, category, title, description, author, date} = props;
    const { id } = useParams();

    const getPostsById = async () => {
        try {
          const response = await axios.get(`https://blog-post-project-api.vercel.app/posts/${id}`);
          console.log(response.data.posts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
        getPostsById();
      };

  return (
    <div className="">View Post Page</div>
  )
}

export default ViewPostPage