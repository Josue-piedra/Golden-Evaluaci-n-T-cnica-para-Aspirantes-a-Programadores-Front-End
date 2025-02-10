import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const PostList = ({ onPostClick }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };

        loadPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} onClick={() => onPostClick(post.id)}>
                    <h3>{post.text}</h3>
                    <p>By: {post.author}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
