import "./feed.css";
import Post from "../Post";
import { PostType } from "../../Types/post";

interface FeedProps {
  posts: PostType[];
  onSelect: (post: PostType) => void;
}

function Feed({ posts, onSelect }: FeedProps) {
  return (
    <section className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}

export default Feed;