import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
         Balance Your <br /> work and life, together.
        </h1>
        <p>

        Achieve newfound organization and balance in both your professional and personal life.
        </p>
        <button class="home-btn p-2">Make Task List</button>
      </div>
    </div>
  );
};

export default Home;
