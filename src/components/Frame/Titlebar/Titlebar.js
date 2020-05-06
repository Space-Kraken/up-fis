import React from "react";
import Title from "./Title";
import "./Titlebar.scss";

export default function Titlebar() {
  return (
    <div className="titlebar">
      <header>
        <Title />
      </header>
    </div>
  );
}
