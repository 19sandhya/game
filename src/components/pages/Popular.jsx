import React from "react";
import img5 from "..//images/img5.jpg";
import img6 from "..//images/img6.jpg";
import img7 from "..//images/img7.jpg";
import img8 from "..//images/img8.jpg";
import img9 from "..//images/img9.jpg";
import img10 from "..//images/img10.jpg";
import "./Popular.css";

export const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>POPULAR GAMES</h1>
        <hr />
        <div className="games">
          <div className="game">
            <img src={img5} alt="" />
          </div>
          <div className="game">
            <img src={img6} alt="" />
          </div>
          <div className="game">
            <img src={img7} alt="" />
          </div>
        </div>

        <div className="games">
          <div className="game">
            <img src={img8} alt="" />
          </div>
          <div className="game">
            <img src={img9} alt="" />
          </div>
          <div className="game">
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
