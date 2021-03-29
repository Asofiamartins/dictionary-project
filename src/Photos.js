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
                    <div class="top-tape"></div>
                    <a href={photos.src.orginal} rel="noreferrer" target="_blank" >
                    <img src={photos.src.tiny} className="img-fluid" /> 
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