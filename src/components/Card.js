import React from "react";
import pinImage from "../images/pin-image.png";

function Card(props) {
  return (
    <div>
      <div className="card-container">
        <img
          src={props.item.imageUrl}
          alt="Mount Fuji"
          className="card-image"
        />
        <div className="card-details-container">
          <p className="card-top-line">
            <img src={pinImage} alt="Pin" className="card-pin-image" />
            <span className="card-location">{props.item.location}</span>
            <span className="card-google-maps-link">
              <a href={props.item.googleMapsUrl} target="_blank">
                View on Google Maps
              </a>
            </span>
          </p>
          <h1 className="card-header">{props.item.title}</h1>
          <h4 className="card-travel-dates">
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p className="card-travel-description">{props.item.description}</p>
        </div>
      </div>
      <hr className="card-bottom-line"></hr>
    </div>
  );
}

export default Card;