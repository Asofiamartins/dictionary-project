import React from "react";
import "./Photos.css"




export default function Photos(props) {
    

    if (props.photos) {
    console.log(props.photos);
    return(
        <div className="Photos">
            <div className="row">
                
            {props.photos.map(function( photos,index){
                return  (
                    <div className="col-3" key={index}>
                    <div classNames="top-tape"></div>
                    <a href={photos.src.orginal} rel="noreferrer" target="_blank" >
                    <img src={photos.src.tiny} className="img-fluid" alt={photos.photographer}/> 
                    </a>
                    
                </div>);
             }) }
             
             </div>
        </div>
    );
    } else{
        return null;
    }

}