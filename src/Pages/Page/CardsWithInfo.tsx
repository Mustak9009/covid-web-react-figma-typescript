import CheckBox from "../../Images/CheckBox.png";
import "../../Sass/CardsWithInfo.scss";
import Cards from "../../Module/Cards";
function CardsWithInfo() {
  return (
    <div className="CardsWithInfo__just-for-background-color">
      <div className="Center CardsWithInfo">
        <div className="Cards">
          <Cards />
          <Cards id={1} />
          <Cards />
          <Cards id={2} />
        </div>
        <section
          aria-labelledby="CovidDetails__heading-right-side"
          className="Center__text-right-side CardsWithInfo__right-side-text"
        >
          <h1 id="CovidDetails__heading-right-side">
            How To Prevent Coronavirus ?
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="CardsWithInfo__text-paragraph-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            officiis assumenda quaerat illo molestias libero.
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
          <button className="CardsWithInfo__Button-last-element">
            Read more About prevention
          </button>
        </section>
      </div>
    </div>
  );
}

export default CardsWithInfo;
