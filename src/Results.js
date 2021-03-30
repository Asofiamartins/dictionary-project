import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic"

import "./Results.css";


export default function Results(props){
   
    if (props.results){
return (
       <div className="Results">
           
                <section className="postIt">
                    
                    <div cclassName="pin">
                     <div className="metal"></div>
                    <div className="bottom-circle"></div>
                     </div>
                        <h2>{props.results.word}</h2>
           
                        {props.results.phonetics.map(function (phonetic, index){
                        return (
                        <div key={index}>
                        <Phonetic phonetic={phonetic}/>
                        </div>
                             );
                             })}
                    
           </section>
                   
           {props.results.meanings.map(function(meaning, index){
               return (
                   <section  key={index}>
                    <section className="Paper">
              <div class="top-tape"></div>    
                   <Meaning meaning={meaning}/>
                   </section> 
                   </section>
               )
           })}
             
       </div>  );
    } else {
        return null
    }
   
  
}