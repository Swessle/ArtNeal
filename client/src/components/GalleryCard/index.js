import React from "react";
import './style.css'


function GalleryCard(props) {
  return (
    <div id={props.id} className="card col-xs-12 col-sm-6 col-md-3" >
      <div id={props.id} className="img-container">
        <img id={props.id} alt={props.name} src={props.image} category={props.category} />
      </div>
    </div>
  );
}

export default GalleryCard;