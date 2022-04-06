import '../../Sass/Reports.scss';
import DoneIcon from '../../Images/DoneIcon.png';
import CrossIcon from '../../Images/CrossIcon.png';
import SilverSecurityMan from '../../Images/silver-security-man.png';
function Reports() {
  return (
    <div className='Report'>
        <section aria-labelledby='How-to-prevent-section-covid' className='Report__Heading-text'>
          <h1 id='How-to-prevent-section-covid'>How To Prevent Coronavirus ?</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </section>
        <div className='Report-element'>
          <div className='Report-element__left-side-text'>
            <article className='Report-element__article-1'>
              <h2>You should do</h2>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>Stay at home</p>
              </div>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>Wear mask</p>
              </div>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>Use sanitizer </p>
              </div>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>Desinfect you home  </p>
              </div>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>wash your hands </p>
              </div>
              <div>
                <img src={DoneIcon} alt="done work" />
                <p>Frequent self-isolation</p>
              </div>
            </article>
            {/* ------------------------- */}
            <article className='Report-element__article-2'>
              <h2>You should avoid</h2>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid infected people </p>
              </div>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid animals</p>
              </div>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid handshaking  </p>
              </div>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid infected surfaces </p>
              </div>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid touching your face  </p>
              </div>
              <div>
                <img src={CrossIcon} alt="Cross sign" />
                <p>Avoid droplets</p>
              </div>
            </article>
          </div>
          <div className='Report-element__right-side-img'>
            <img src={SilverSecurityMan} alt="silver security man covid green" />
          </div>
        </div>
    </div>
  )
}

export default Reports;