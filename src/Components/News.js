import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import './News.css'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    pageSize: 8,
    country: 'us',
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  articles = []
  constructor() {
    super();
    // console.log("First constrctor run")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3912a800ccdb4e3f9adae8fc85f68936&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false
    })

    console.log(parsedData.totalResults)

  }
  async componentDidMount() {
    // console.log("After the componenet render into the dom then this method will run")
    // console.log('URL IS : ' + url) for checking api call is working or limit cross

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3912a800ccdb4e3f9adae8fc85f68936&page=1&pageSize=${this.props.pageSize}`

    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   totalResults: parsedData.totalResults,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    // console.log(parsedData.totalResults)
    this.updateNews()

  }
  handlePreviousClick = async () => {
    // console.log("Previous clicked");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3912a800ccdb4e3f9adae8fc85f68936&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({
      page : this.state.page - 1
    })
    this.updateNews()
  }

  handleNextClick = async () => {
    // console.log("Next clicked")
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) return
    
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3912a800ccdb4e3f9adae8fc85f68936&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

    //   this.setState({
    //     loading: true
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData)
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
     this.setState({
      page : this.state.page + 1
    })
    this.updateNews()
  }

  render() {
    // console.log("Second this component render(run) in DOM (Screen)")
    return (
      <>
        <div className='container'>
          <div className="container my-3 mx-3">
            <h1 className=' text-center my-3' style={{ margin: '30px 0px' }}>NewsMonkey - Top Headlines</h1>
            {this.state.loading && <Spinner />}

            <div className="row">
              {
                !this.state.loading && this.state.articles && this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} Source={element.source.name} />
                  </div>
                })
              }
              <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page <= 1} className="btn btn-dark my-3 mx-3" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark my-3 mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
              </div>

            </div>

          </div>
        </div>

      </>
    )
  }

  // This creates a column that takes 4 out of 12 columns on md (medium, ≥768px) screens and up.
  // Bootstrap grid is based on a 12-column system, so col-md-4 = 1/3 width of the row.
  // So 3 columns per row on medium screens and above.
  //  On smaller screens, they stack vertically unless you add col-sm-* or col-12.
}

export default News

