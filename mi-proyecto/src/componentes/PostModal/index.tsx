import "./postModal.css";
import { PostType } from "../../Types/post";

interface PostModalProps {
  post: PostType | null;
  onClose: () => void;
}

function PostModal({ post, onClose }: PostModalProps) {
  if (!post) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button onClick={onClose}>X</button>

        <img src={post.image} alt="cat" />

        <h2>{post.caption}</h2>

        <p>{post.likes} likes</p>

      </div>
    </div>
  );
}

export default PostModal;
