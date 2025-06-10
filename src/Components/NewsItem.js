import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageURL, newsURL } = this.props;
        return (
            <div className=' container my-2'>
                <div className="card" >
                    <img src={imageURL?imageURL:"https://c8.alamy.com/comp/2CNJ7M5/404-error-2CNJ7M5.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsURL} target='_blank'className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default NewsItem
