import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="split a-center">
          <div className="flow-content flow-content--large">
            <h1 className="section-title">Start learning magic today</h1>
            <p className="h2 page-heading">
              Books hard to follow, and YouTube letting you down?{" "}
              <strong>Learn magic the right way.</strong>
            </p>
            <p>
              Lorem ipsum dolor sit{" "}
              <Link to="#">amet, consectetur adipiscing</Link> elit. Donec
              placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
            </p>
            <Link to="#" className="btn">
              Start learning
            </Link>
          </div>
          <div className="img">
            <img
              className="shadow"
              src="assets/hero.jpg"
              alt="man with a deck of cards floating between his hands, which are in front of his concealed face"
            />
          </div>
        </div>
      </div>
      {/* <!-- /container --> */}
    </section>
  );
}
