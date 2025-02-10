import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error al obtener detalles:", error));
  }, [postId]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{post.author}</h2>
      <p>{post.text}</p>
      <p>Fecha: {new Date(post.date).toLocaleString()}</p>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default PostDetail;
