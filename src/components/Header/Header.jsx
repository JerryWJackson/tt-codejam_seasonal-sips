import { React } from "react";
import "./Header.css";
import logo from "/src/images/tumbler.png";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__container-title">
          What Are You In The Mood For?
        </h1>
      </div>
    </div>
  );
}
