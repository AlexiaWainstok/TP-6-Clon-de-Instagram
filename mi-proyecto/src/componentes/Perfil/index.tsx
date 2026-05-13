import { user } from "../../Data/user";

import "./perfil.css";

function Perfil() {
  return (
    <div className="perfil">
      <img
        src={user.profileImage}
        alt={user.username}
      />

      <h2>{user.username}</h2>

      <p>{user.bio}</p>

      <div className="perfil-stats">
        <div>
          <strong>{user.posts}</strong>
          <span>Posts</span>
        </div>

        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>
      </div>

      <button>Edit Profile</button>
    </div>
  );
}

export default Perfil;