import "./style.scss";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopMsg from "./Components/TopMsg/TopMsg";
export default function App() {
  return (
    <>
      <TopMsg />
      <div id="top-header-container">
        <Header />
      </div>
      <Home />
      <Footer />
    </>
  );
}
