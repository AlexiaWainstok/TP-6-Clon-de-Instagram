import Post from "../Post";
import Stories from "../Stories";

import { PostType } from "../../Types/post";

import "./feed.css";

interface Props {
  posts: PostType[];
  onSelectPost: (post: PostType) => void;
}

function Feed({
  posts,
  onSelectPost,
}: Props) {
  return (
    <div className="feed-container">
      <Stories />

      <h2 className="trending-title">
        TRENDING
      </h2>

      <div className="feed">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onSelectPost={onSelectPost}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
