import { Data } from "../../Module/MreInfoData";
import '../../Sass/MreInfo.scss';
function MreInfo() {
  return (
    <>
      <div className="MoreInfo">
        {Data.map((data) => (
          <div className="MoreInfo__items" key={data.id}>
            <img src={data.img} alt="icons" />
            <section aria-labelledby="MoreInfo__heading-each">
              <h2 id="MoreInfo__heading-each">{data.Heading}</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

export default MreInfo;
