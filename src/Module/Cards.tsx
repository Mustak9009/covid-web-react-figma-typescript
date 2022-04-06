import HomeIcon from '../Images/HomeIcon.png';
import '../Sass/CardsWithInfo.scss';
function Cards({id}:{id?:number}) {
  return (
    <div className={`Card ${id===1 || id===2?"Card__right-side-two":""}`}>
      <div className="Card__Img-header">
          <img src={HomeIcon} alt="Home icon" />
      </div>
      <article className="Card__text-bottom">
        <h3>Stay At Home</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit.
        </p>
      </article>
    </div>
  );
}

export default Cards;
