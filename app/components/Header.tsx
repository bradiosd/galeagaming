import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <span className="logo-text">Galea Gaming</span>
        </Link>
        <nav className="nav">
          <Link to="/become-an-affiliate" className="nav-link">
            Become an Affiliate
          </Link>
        </nav>
      </div>
    </header>
  );
}
