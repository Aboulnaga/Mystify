import "./style.scss";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopMsg from "./Components/TopMsg/TopMsg";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 5) + 1;

    setTimeout(() => {
      setIsLoading(false);
    }, randomNum * 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <TopMsg />
      <div id="top-header-container"></div>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

// <TopMsg />
//       <div id="top-header-container">
//         <Header />
//       </div>
//       <Home />
//       <Footer />
