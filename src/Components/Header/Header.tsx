import { Link } from "react-router-dom";
import { logoSvg } from "./logoSvg";
export default function Header() {
  return (
    <header id="header" className="bg-dark">
      <div className="header-intro">
        <div className="container">
          <div className="main-logo">
            <div className="icon">{logoSvg}</div>
            <h1>
              <Link to="/">Mystify</Link>
            </h1>
          </div>
          <nav className="primary-nav">
            <ul className="nav-list">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Testimonials</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="scroll-watcher"></div>
      </div>
    </header>
  );
}
