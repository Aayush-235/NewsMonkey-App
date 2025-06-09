import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "England women's cricket: Four talking points from Charlotte Edwards and Nat Sciver-Brunt's first series",
      "description": "England have started the summer by thrashing a depleted West Indies side - but what does it mean for the team's post-Ashes rebuild and World Cup hopes?",
      "url": "http://www.bbc.co.uk/sport/cricket/articles/crr785ddxv0o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/2cbc/live/a539f140-43cd-11f0-b6e6-4ddb91039da1.jpg",
      "publishedAt": "2025-06-07T19:52:21.0165676Z",
      "content": "Fielding has been one of England's biggest areas for improvement, with six drops seeing them prematurely knocked out in T20 World Cup group stage and seven on day one of the Ashes Test alone. \r\nThey … [+1802 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
constructor() {
    super();

    console.log("Hello i am a constructro form news.js")
    this.state = {
        articles: this.articles,
        loading: false
    }
}
render() {
    return (
        <div className="container my-3 mx-3">
            <h2 className='my-3'>NewsMonkey - Top Headlines</h2>
            <div className="row">
                {
                    this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.split(0,45)} description={element.description.split(0,88)} imageURL={element.urlToImage} newsURL={element.url}/>
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

