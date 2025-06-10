import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import './News.css'

export class News extends Component {
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

  async componentDidMount() {
    // console.log("After the componenet render into the dom then this method will run")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05fd7748f49b470586c98325578ce0f6&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
    })

    console.log(parsedData.totalResults)

  }
  handlePreviousClick = async () => {
    console.log("Previous clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05fd7748f49b470586c98325578ce0f6&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })

  }

  handleNextClick = async () => {
    console.log("Next clicked")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      return;
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05fd7748f49b470586c98325578ce0f6&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
    }

  }

  render() {
    // console.log("Second this component render(run) in DOM (Screen)")
    return (
      <>
        <div className="container my-3 mx-3">
          <h1 className='my-3'>NewsMonkey - Top Headlines</h1>
          <div className="row">
            {
              this.state.articles && this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} />
                </div>
              })
            }
            <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page <= 1} className="btn btn-dark my-3 mx-3" onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark my-3 mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
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

