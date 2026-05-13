import { useEffect, useState } from "react";

import Feed from "./componentes/Feed";
import Header from "./componentes/Header";
import Perfil from "./componentes/Perfil";
import PostModal from "./componentes/PostModal";

import { PostType } from "./Types/post";

import { api } from "./Services/api";

import "./App.css";

function App() {
  const [posts, setPosts] = useState<
    PostType[]
  >([]);

  const [selectedPost, setSelectedPost] =
    useState<PostType | null>(null);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get(
        "/images/search?limit=10"
      );

      const formattedPosts =
        response.data.map(
          (
            item: {
              id: string;
              url: string;
            },
            index: number
          ) => ({
            id: item.id,
            image: item.url,
            username: `cat_user_${index + 1}`,
            caption:
              "Living my best cat life 🐱",
            likes:
              Math.floor(
                Math.random() * 1000
              ) + 100,
          })
        );

      setPosts(formattedPosts);
    }

    getPosts();
  }, []);

  return (
    <>
      <Header />

      <div className="layout">
        <Feed
          posts={posts}
          onSelectPost={setSelectedPost}
        />

        <Perfil />
      </div>

      <PostModal
        selectedPost={selectedPost}
        onClose={() =>
          setSelectedPost(null)
        }
      />
    </>
  );
}

export default App;