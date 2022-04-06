import '../../Sass/News.scss';
import NewsBodySection from '../../Module/NewsBodySection';
function News() {
  return (
    <div className='NewsPage'>
        <section aria-labelledby='NewsSection__main-heading' className='NewsPage__heading'>
            <h1 id='NewsSection__main-heading'>News And Articles</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor<br/> do amet sint.</p>
        </section>
        <div className='Newses'>
            <NewsBodySection imgId={1}/>
            <NewsBodySection />
            <NewsBodySection imgId={1}/>
        </div>
    </div>
  )
}

export default News;