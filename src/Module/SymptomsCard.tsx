import SymptomsCardImg from "../Images/SymptomsCardImg.png";
import  '../Sass/Symptoms.scss';
function SymptomsCard({Heading,id}:{Heading:string,id:number}) {
  return (
    <div className={`SymptomsCard Card-${id}`}>
      <img src={SymptomsCardImg} alt="illustration man covid fever" />
      <section aria-labelledby="SymptomsCard__Card-heading" className="SymptomsCard__card-texts">
        <h2 id="SymptomsCard__Card-heading">{Heading}</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </section>
    </div>
  );
}

export default SymptomsCard;
