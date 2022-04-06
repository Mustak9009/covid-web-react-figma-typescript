import AboutIcon from "../../Images/AboutIcon.png";
import  '../../Sass/About.scss';
function AboutPageDetails(classP:string,heading:string,paragraph:string) {
  return (
    <>
      <section aria-labelledby={`ABout_page_info-${classP}`} className="AboutPage__Details-covid-row">
        <img src={AboutIcon} alt="beetle" />
        <h1 id={`ABout_page_info-${classP}`}>{heading}</h1>
        <p>{paragraph}</p>
      </section>
    </>
  );
}
function About() {
  return (
    <div className="AboutPage">
      <section aria-labelledby="AboutPage__main-heading" className="AboutPage__heading-text">
        <h1 id="AboutPage__main-heading">Coronavirus Statistics</h1>
        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.</p>
      </section>
      <div className="AboutPage__Details-covid-rows">
        {AboutPageDetails("1","95,856,25","Active cases")}
        {AboutPageDetails("2","5,856,25","Death cases")}
        {AboutPageDetails("3","595,856,25","Recovery cases")}
      </div>
    </div>
  );
}

export default About;
