import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []
  constructor() {
    super();

    // console.log("Hello i am a constructro form news.js")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount() {

    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05fd7748f49b470586c98325578ce0f6";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
    })

  }
  render() {
    return (
      <div className="container my-3 mx-3">
        <h1 className='my-3'>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {
            this.state.articles && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description: ""} imageURL={element.urlToImage} newsURL={element.url} />
              </div>


            })
          }


        </div>

      </div>
    )
  }

  // This creates a column that takes 4 out of 12 columns on md (medium, ≥768px) screens and up.
  // Bootstrap grid is based on a 12-column system, so col-md-4 = 1/3 width of the row.
  // So 3 columns per row on medium screens and above.
  //  On smaller screens, they stack vertically unless you add col-sm-* or col-12.
}

export default News

