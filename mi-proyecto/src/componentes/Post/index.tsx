import { PostType } from "../../Types/post";
import "./post.css";

interface Props {
  post: PostType;
  onSelectPost: (post: PostType) => void;
}

function Post({ post, onSelectPost }: Props) {
  return (
    <div
      className="post"
      onClick={() => onSelectPost(post)}
    >
      <div className="post-header">
        <img
          src={`https://i.pravatar.cc/100?u=${post.id}`}
          alt={post.username}
        />

        <h4>{post.username}</h4>
      </div>

      <img
        className="post-image"
        src={post.image}
        alt={post.caption}
      />

      <div className="post-content">
        <p className="likes">
          ❤️ {post.likes} likes
        </p>

        <p>
          <strong>{post.username}</strong>{" "}
          {post.caption}
        </p>
      </div>
    </div>
  );
}

export default Post;