import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Instagram</h1>

      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />

      <div className="header-icons">
        <span>🏠</span>
        <span>💬</span>
        <span>❤️</span>
      </div>
    </header>
  );
}

export default Header;