import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import './News.css'

const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalize(props.category)} - NewsMonkey`

  const capitalize = (word) => {
    let lower;
    lower = word.toLowerCase();
    lower = lower.charAt(0).toUpperCase() + lower.slice(1);

    return lower
  }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`

    setLoading(true)

    let data = await fetch(url);

    props.setProgress(30)

    let parsedData = await data.json();

    props.setProgress(70)

    console.log(parsedData)
    console.log(page)

    setarticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)

    props.setProgress(100)

    console.log(parsedData.totalResults)
    setPage(2)

  }


  useEffect(() => {

    updateNews()

  }, [])



  // const handlePreviousClick = async () => {
  //   setPage(page - 1)
  //   updateNews()
  // }

  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews()

  // }

  const fetchMoreData = async () => {

    if (loading || articles.length >= totalResults) return;



    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData)
    console.log(page)

    setarticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    setPage(page + 1)

  };



  // console.log("Second this component render(run) in DOM (Screen)")
  return (
    <>

      <h1 className=' text-center my-3' style={{ margin: '30px 0px' }}>NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}>
        <div className="container">
          <div className="row">
            {
              articles && articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} Source={element.source.name} />
                </div>
              })
            }
            {/* <div className="container d-flex justify-content-between">
                  <button type="button" disabled={page <= 1} className="btn btn-dark my-3 mx-3" onClick={handlePreviousClick}>&larr; Previous</button>
                  <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark my-3 mx-3" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}

          </div>
        </div>
      </InfiniteScroll>


    </>
  )


  // This creates a column that takes 4 out of 12 columns on md (medium, ≥768px) screens and up.
  // Bootstrap grid is based on a 12-column system, so col-md-4 = 1/3 width of the row.
  // So 3 columns per row on medium screens and above.
  //  On smaller screens, they stack vertically unless you add col-sm-* or col-12.
}


News.defaultProps = {
  pageSize: 8,
  country: 'us',
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News

