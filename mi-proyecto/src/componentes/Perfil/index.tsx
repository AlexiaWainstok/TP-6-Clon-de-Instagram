//fijarse si hay que importar el CSS
interface PerfilProps {
  username: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
  profileImage: string;
}

function Perfil({
  username,
  bio,
  followers,
  following,
  posts,
  profileImage,
}: PerfilProps) {
  return (
    <section className="perfil">
      <img src={profileImage} alt={username} />

      <h2>{username}</h2>

      <p>{bio}</p>

      <div className="stats">
        <span>{posts} publicaciones</span>
        <span>{followers} seguidores</span>
        <span>{following} seguidos</span>
      </div>

      <button>Editar perfil</button>
    </section>
  );
}

export default Perfil;