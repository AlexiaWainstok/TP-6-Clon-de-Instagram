import { useEffect, useState } from "react";
import Feed from "./Componentes/Feed";
import Header from "./Componentes/Header";
import Perfil from "./Componentes/Perfil";
import PostModal from "./Componentes/PostModal";

import { user } from "./Data/user";
import { PostType } from "./Types/post";
import { api } from "./Services/api";

import "./App.css";


function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] =
    useState<PostType | null>(null);

  useEffect(() => {
    async function getCats() {
      const response = await api.get("/images/search?limit=10");

      const formattedPosts = response.data.map((cat: any) => ({
        id: cat.id,
        image: cat.url,
        caption: "Cute cat 😺",
        likes: Math.floor(Math.random() * 1000),
      }));

      setPosts(formattedPosts);
    }

    getCats();
  }, []);

  return (
    <div className="app">

      <Header />

      <Perfil {...user} />

      <Feed
        posts={posts}
        onSelect={setSelectedPost}
      />

      <PostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

    </div>
  );
}

export default App
