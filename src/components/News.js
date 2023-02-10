import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [jokes, setjokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://v2.jokeapi.dev/joke/${props.category}?amount=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setjokes(parsedData.jokes);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setHasMore(parsedData.jokes.length==0?false:true);
    props.setProgress(50);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    document.title = `Jokes- ${props.category}`
  }, [])
  
  const fetchMoreData = async () => {
    const url = `https://v2.jokeapi.dev/joke/${props.category}?amount=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setjokes(jokes.concat(parsedData.jokes));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setHasMore(parsedData.jokes.length==0?false:true);
  }
    return (
      <>
        <h2 className='text-center my-lg-5 my-4 pt-5'id='heading'style={{color:props.mode==='light'?'black':'white'}}>Top {props.category} Jokes</h2>
        {loading && <Loading color={props.mode}/>}
        <InfiniteScroll
          dataLength={jokes.length} 
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading color={props.mode}/>}>
          <div className="container">
            <div className="row">
              {jokes.map((e) => {
                return <div className="col-md-4 col-sm-10 my-2" key={e.id}>
                  <NewsItem color={props.mode} title={e.setup ? e.setup : ""} description={e.delivery ? e.delivery : ""} joke={e.joke ? e.joke : ""} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}
News.defaultProps = {
  pageSize: 6,
  category: 'Any'
}
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;