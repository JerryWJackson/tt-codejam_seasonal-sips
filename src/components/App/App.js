import "./App.css";
import { React, useState } from "react";
import "../../vendor/fonts.css";
// eslint-disable-next-line
import Home from "../Home/Home";
// eslint-disable-next-line
import Main from "../Main/Main";
// eslint-disable-next-line
import Footer from "../Footer/Footer";

export default function App() {
  const [hasTag, setHadTag] = useState(false);
  const [forHome, setForHome] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLocated, setIsLocated] = useState(false);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleScroll = (elementId) => {
    setIsLocated(true);
    setTimeout(() => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        console.log("targetElement");
        const { top } = targetElement.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Home
        setIsLocated={setIsLocated}
        handleScroll={handleScroll}
        setAddress={setAddress}
        setPin={setPin}
      />
      <Main />
    </div>
  );
}
