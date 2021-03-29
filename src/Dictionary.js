import React, {useState} from 'react';
import axios from 'axios';
import Results from "./Results"
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function handlePexelsResponse(response){
    setPhotos(response.data.photos);
    }
    function handleResponse(response){
    setResults(response.data[0]);
     }

    function search(event){
     event.preventDefault();
      let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
      axios.get(apiUrl).then(handleResponse);

      const pexelsApiKey="563492ad6f917000010000010507b9e95436467183dfd0f0aee050d1";
      let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
      const headers= { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
      
        }
    

    function handleKeywordChange(event){
        setKeyword(event.target.value); 
    }
    return (
        <div className="Dictionary">
            <section className="Form">
            <h1>What word do you want to look up?</h1>
            <form onSubmit={search} >
            <input type="search" autoFocus={true} onChange={handleKeywordChange}  />
            </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    )
}