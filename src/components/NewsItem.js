import React, { Component } from 'react'
import './css/NewsItem.css';
export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "22rem"}}>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img src={imageUrl?imageUrl:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {publishedAt}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
