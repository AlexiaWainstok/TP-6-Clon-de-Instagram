import "./post.css";
import { PostType } from "../../Types/post";

interface PostProps {
  post: PostType;
  onSelect: (post: PostType) => void;
}

function Post({ post, onSelect }: PostProps) {
  return (
    <article className="post" onClick={() => onSelect(post)}>
      <img src={post.image} alt="cat" />

      <div className="post-info">
        <p>{post.caption}</p>
        <span>{post.likes} likes</span>
      </div>
    </article>
  );
}

export default Post;