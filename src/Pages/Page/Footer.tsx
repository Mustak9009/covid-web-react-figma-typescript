import "../../Sass/Footer.scss";
import Youtube from "../../Images/Youtube.png";
import FaceBook from "../../Images/FaceBook.png";
import InstagramBgRemove from "../../Images/InstagramBgRemove.png";
import Twitter from "../../Images/Twitter.png";
function Footer() {
  return (
    <footer className="FooterSection">
      <div className="FooterContent">
        <section className="FooterContent__body">
          <h1>About</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div>
            <img src={FaceBook} alt="face book" />
            <img src={Youtube} alt="you tube" />
            <img src={InstagramBgRemove} alt="instagram" />
            <img src={Twitter} alt="twitter" />
          </div>
        </section>
        <div className="FooterContent__right-side">
          <section
            aria-labelledby="Footer__right-side-text-paragraph1"
            className="FooterContent__right-side-elements"
          >
            <h1 id="Footer__right-side-text-paragraph1">Quick Links</h1>
            <li>Symptoms</li>
            <li>Prevention </li>
            <li>FAQs</li>
            <li>Coronavirus</li>
            <li>Contact Us</li>
          </section>
          <section
            aria-labelledby="Footer__right-side-text-paragraph2"
            className="FooterContent__right-side-elements"
          >
            <h1 id="Footer__right-side-text-paragraph2">Helpful Links</h1>
            <li> Healthcare Professional</li>
            <li>LGU Facilities</li>
            <li>Protect Your Family </li>
            <li> World Health</li>
          </section>
          <section
            aria-labelledby="Footer__right-side-text-paragraph3"
            className="FooterContent__right-side-elements"
          >
            <h1 id="Footer__right-side-text-paragraph3">Resources</h1>
            <li> WHO Website</li>
            <li> CDC Website </li>
            <li> Gov Website</li>
            <li> DOH Website</li>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
