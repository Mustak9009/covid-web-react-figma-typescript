import React from "react";
import  CovidDetails from "../Images/CovidDetails.png";
import CovidDetails2 from "../Images/CovidDetails2.jpg";
import CheckBox from "../Images/CheckBox.png";
function CenterSub({id}:{id:number}) {
  return (
    <div className={`${id===1?'Center':'Center Center-second-info'}`}>
      <img src={id===1?CovidDetails:CovidDetails2} alt="covid human with musk" />
      <section
        aria-labelledby="CovidDetails__heading-right-side"
        className="Center__text-right-side"
      >
        <h1 id="CovidDetails__heading-right-side">{id===1?"What is Coronavirus":"Why is it Dangerous?"}</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="Center__right-side-list-text-img">
          <div>
            <img src={CheckBox} alt="check box" />
            <p>Amet minim mollit non deserunt ullamco</p>
          </div>
          <div>
            <img src={CheckBox} alt="check box" />
            <p> Velit officia consequat duis enim molito. </p>
          </div>
          <div>
            <img src={CheckBox} alt="check box" />
            <p>Est sit aliqua dolor do amet sint.</p>
          </div>
        </div>
        <button>Learn more</button>
      </section>
    </div>
  );
}

export default CenterSub;
