import { useState, useEffect } from "react";
import "./postModal.css";

interface PostData {
  id: string;
  imageUrl: string;
  username: string;
  avatar: string;
  caption: string;
  likes: number;
  comments: { user: string; text: string }[];
  date: string;
  liked: boolean;
}
 
interface PostModalProps {
  post: PostData;
  onClose: () => void;
  onLike: (postId: string) => void;
}
 
const PostModal = ({ post, onClose, onLike }: PostModalProps) => {
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState(post.comments);
 
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
 
  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
 
  const handleAddComment = () => {
    const trimmed = newComment.trim();
    if (!trimmed) return;
    setLocalComments((prev) => [...prev, { user: "@you", text: trimmed }]);
    setNewComment("");
  };
 
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAddComment();
  };
return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Left — Image */}
        <div className="modal-image-side">
          <img src={post.imageUrl} alt={post.caption} className="modal-image" />
        </div>
 
        {/* Right — Details */}
        <div className="modal-details-side">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-user">
              <img src={post.avatar} alt={post.username} className="modal-avatar" />
              <div className="modal-user-text">
                <span className="modal-username">{post.username}</span>
                <span className="modal-date">{post.date}</span>
              </div>
            </div>
            <button className="modal-close-btn" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
 
          <div className="modal-divider" />
 
          {/* Caption */}
          <div className="modal-caption-row">
            <img src={post.avatar} alt={post.username} className="modal-avatar modal-avatar--sm" />
            <div>
              <span className="modal-caption-user">{post.username} </span>
              <span className="modal-caption-text">{post.caption}</span>
            </div>
          </div>
 
          {/* Comments */}
          <div className="modal-comments">
            {localComments.map((c, i) => (
              <div key={i} className="modal-comment">
                <span className="comment-user">{c.user}</span>
                <span className="comment-text">{c.text}</span>
              </div>
            ))}
          </div>
 
          <div className="modal-divider" />
 
          {/* Actions */}
          <div className="modal-actions">
            <div className="modal-action-buttons">
              <button
                className={`modal-action-btn ${post.liked ? "modal-action-btn--liked" : ""}`}
                onClick={() => onLike(post.id)}
                title="Like"
              >
                <svg viewBox="0 0 24 24" fill={post.liked ? "#ec4899" : "none"} stroke={post.liked ? "#ec4899" : "currentColor"} strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <button className="modal-action-btn" title="Comment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <button className="modal-action-btn" title="Share">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <button className="modal-action-btn" title="Save">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
 
          {/* Likes count */}
          <div className="modal-likes">
            <span>{post.likes.toLocaleString()} likes</span>
          </div>
 
          {/* Add Comment */}
          <div className="modal-add-comment">
            <input
              type="text"
              className="comment-input"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className={`comment-post-btn ${newComment.trim() ? "comment-post-btn--active" : ""}`}
              onClick={handleAddComment}
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;

