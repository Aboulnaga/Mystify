import { Link } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <section className="bg-dark">
          <div className="container">
            <h2 className="text-accent">Start mastering magic today</h2>
            <ul className="split">
              <li className="flow-content">
                <img
                  src="assets/feature-01.jpg"
                  alt="dice falling into a hand"
                />
                <h3>Feeling stuck?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
              <li className="flow-content">
                <img
                  src="assets/feature-02.jpg"
                  alt="cards spread on a table"
                />
                <h3>Stop with the excuses</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
              <li className="flow-content">
                <img src="assets/feature-03.jpg" alt="man riffling cards" />
                <h3>Unlock your potential</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
              <li className="flow-content">
                <img
                  src="assets/feature-04.jpg"
                  alt="teenager doing cardestry"
                />
                <h3>Get in the game</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
            </ul>
          </div>
          {/* container */}
        </section>

        <section className="join-now">
          <div className="container">
            <h2>Join now and get access to our entire library of tricks</h2>

            <ul className="split">
              <li className="flow-content corner-square">
                <img
                  className="shadow"
                  src="assets/all-access-03.jpg"
                  alt="man with cards flying in front of him"
                />
                <h3>Step-by-step instruction</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </li>
              <li className="flow-content corner-square">
                <img
                  className="shadow"
                  src="assets/all-access-04.jpg"
                  alt="woman and man talking over video conference"
                />
                <h3>1-on-1 mentoring</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </li>
              <li className="flow-content corner-square">
                <img
                  className="shadow"
                  src="assets/all-access-01.jpg"
                  alt="man in front of laptop with earphonese on"
                />
                <h3>Video lessons</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </li>
              <li className="flow-content corner-square">
                <img
                  className="shadow"
                  src="assets/all-access-02.jpg"
                  alt="close up of hands holding cards"
                />
                <h3>Full routines</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </li>
            </ul>
          </div>
          {/* <!-- /container --> */}
        </section>

        <section className="bg-accent cta">
          <div className="container flow-content flow-content--large">
            <h2 className="section-title">Start learning magic today</h2>
            <p className="h2">You’re only one step away</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat, ipsum ac auctor ornare.
            </p>
            <Link to="#" className="btn">
              Start Learning
            </Link>
          </div>
          {/* <!-- /container --> */}
        </section>

        <section className="testimonials">
          <div className="container flow-content flow-content--large">
            <h2 className="section-title">Testimonials</h2>
            <p className="h2">Others have done it, so can you!</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
            </p>
            <div className="split">
              <div className="testimonial bg-dark corner-square">
                <p>
                  Commodo risus non cursus risus, metus, velit scelerisque urna,
                  aenean leo diam arcu sed arcu purus sagittis posuere orci
                  ornare lorem risus malesuada nec sit
                </p>
                <p className="name">John Smith</p>
                <p className="position">CEO of Company</p>
              </div>
              <div className="testimonial bg-accent corner-square">
                <p>
                  Commodo risus non cursus risus, metus, velit scelerisque urna,
                  aenean leo diam arcu sed arcu purus sagittis posuere orci
                  ornare lorem risus malesuada nec sit
                </p>
                <p className="name">John Smith</p>
                <p className="position">CEO of Company</p>
              </div>
              <div className="testimonial bg-dark corner-square">
                <p>
                  Commodo risus non cursus risus, metus, velit scelerisque urna,
                  aenean leo diam arcu sed arcu purus sagittis posuere orci
                  ornare lorem risus malesuada nec sit
                </p>
                <p className="name">John Smith</p>
                <p className="position">CEO of Company</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta bg-light">
          <div className="container flow-content flow-content--large">
            <h2 className="section-title">Start learning magic today</h2>
            <p className="h2">You’re only one step away</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat, ipsum ac auctor ornare.
            </p>
            <Link to="#" className="btn">
              Start Learning
            </Link>
          </div>
          {/* <!-- /container --> */}
        </section>
      </main>
    </>
  );
}
