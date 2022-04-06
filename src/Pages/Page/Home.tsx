import React from "react";
import  HomeImg from "../../Images/HomeImg2.png";
import "../../Sass/Home.scss";
function Home() {
  return (
    <div className="HomePage">
      <section
        aria-labelledby="Home__heading-left"
        className="HomePage__text-and-btn"
      >
        <p>Covid-19 Awareness</p>
        <h1 id="Home__heading-left">Stay safe. Stay Home.</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amets
          int. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          corporis.
        </p>
        <button>How To Prevent</button>
      </section>
      <div className="HomePage__image">
        <img src={HomeImg} alt="business man doctor" />
      </div>
     
    </div>

  );
}

export default Home;
