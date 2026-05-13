import "./stories.css";

const stories = [
  {
    id: 1,
    username: "cat_luna",
    image:
      "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
  },
  {
    id: 2,
    username: "kitty",
    image:
      "https://cdn2.thecatapi.com/images/9j5.jpg",
  },
  {
    id: 3,
    username: "milo",
    image:
      "https://cdn2.thecatapi.com/images/bpc.jpg",
  },
  {
    id: 4,
    username: "tom",
    image:
      "https://cdn2.thecatapi.com/images/63g.jpg",
  },
  {
    id: 5,
    username: "snow",
    image:
      "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
  },
];

function Stories() {
  return (
    <div className="stories-container">
      <h2>STORIES</h2>

      <div className="stories">
        {stories.map((story) => (
          <div
            className="story"
            key={story.id}
          >
            <div className="story-border">
              <img
                src={story.image}
                alt={story.username}
              />
            </div>

            <span>{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;