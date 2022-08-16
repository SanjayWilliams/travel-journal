import React from "react"

function Card(props) {
    return (
        <div className="article-container">
            <div className="article-image-container">
                <img src={`./images/${props.item.imageUrl}`} />
            </div>
            
            <div className="article-text-container">
                <div className="article-map-info">
                    <img src="./images/location.png" className="location-icon"/>
                    <p className="article-city">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="city-link">View on Google Maps</a>
                </div>
                
                <h1 className="article-title">{props.item.title}</h1>
                <p className="article-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="article-body">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card