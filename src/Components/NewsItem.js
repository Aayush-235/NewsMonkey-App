import React from 'react'
import ErrorImage from './404_Error.jpg';

const NewsItem = (props) =>{

   
        let { title, description, imageURL, newsURL, author, date, Source } = props;
        return (
            <div className=' container my-2'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>{Source}</span>
                    <img src={imageURL ? imageURL : ErrorImage } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text "><small className=" text-success">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsURL} target='_blank' className="btn btn-sm btn-info">Read More</a>
                    </div>
                </div>

            </div>

        )
    
}

export default NewsItem
