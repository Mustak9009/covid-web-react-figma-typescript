import ManGroupLogo from "../Images/ManGroupLogo.png";
import Man from "../Images/Man.png";
import Woman from "../Images/Woman.png";
function NewsBodySection({ imgId }: { imgId?: number }) {
  return (
    <div className="News">
      <div className="News__image">
        <img src={`${imgId === 1 ? Woman : Man}`} alt="woman" />
      </div>
      <div className="News__footer-texts-logo">
        <div>
          <div>
            <img src={ManGroupLogo} alt="man group illustration" />
            <p>ADMIN</p>
          </div>
          <div>
            <img src={ManGroupLogo} alt="man group illustration" />
            <p>2 COMMENT</p>
          </div>
        </div>
        <p>How coronavirus very continue</p>
      </div>
    </div>
  );
}

export default NewsBodySection;
