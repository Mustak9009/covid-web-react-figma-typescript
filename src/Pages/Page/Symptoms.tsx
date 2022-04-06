import SymptomsCard from '../../Module/SymptomsCard';
function Symptoms() {
  return (
    <div className='Symptoms'>
      <section aria-labelledby='Symptoms__main-page-heading-text' className='Symptoms__Heading-main'>
        <h1 id="Symptoms__main-page-heading-text">Symptoms of coronavirus ?</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>do amet sint.</p>
      </section>
      <div className='Symptoms__cards'>
          <SymptomsCard id={1} Heading={"High Fever"} />
          <SymptomsCard id={2} Heading={"Sore Troth"} />
          <SymptomsCard id={3} Heading={"Headache"} />
          <SymptomsCard id={4} Heading={"Cough"}/>
      </div>
    </div>
  )
}

export default Symptoms;