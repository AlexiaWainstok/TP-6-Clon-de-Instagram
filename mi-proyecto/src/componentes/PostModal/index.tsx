import { PostType } from "../../Types/post";

import "./postmodal.css";

interface Props {
  selectedPost: PostType | null;
  onClose: () => void;
}

function PostModal({
  selectedPost,
  onClose,
}: Props) {
  if (!selectedPost) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <img
          src={selectedPost.image}
          alt={selectedPost.caption}
        />

        <div className="modal-info">
          <h2>{selectedPost.username}</h2>

          <p>{selectedPost.caption}</p>

          <span>
            ❤️ {selectedPost.likes} likes
          </span>

          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
