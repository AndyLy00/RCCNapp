import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import rccn1 from "./img/rccn1.png";
import rccn2 from "./img/rccn2.png";
import rccn3 from "./img/rccn3.png";
function App() {
  const play = <FontAwesomeIcon icon={faPlay} />
  const url = "http://127.0.0.1:8000";
  const [query, setQuery] = useState("");
  let [response, setResponse] = useState("");
  let string = "";

  const handleText = async (e : any) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {query});
      string = JSON.stringify(resp.data);
      setResponse(string);
      console.log(string);
    } catch (error : any) {
      console.log(error.response)
    }
  }

  return (
      <div className="background">
    <div className="container">
      <div className="main_title">RCCN compiler</div>
      {/*<img alt="" src={}/>*/}
      <div className="main">
        <div className="first">
          <textarea className="input" value={query} placeholder="Enter text" onChange={(e) => setQuery(e.target.value)}/>
          <img className="img1" alt="" src={rccn1}/>
        </div>

        <button className="button" onClick={handleText}>RUN {play}</button>

        <div className="second">
        <div className="output"> {response} </div>
          <img className="img3" alt="" src={rccn3}/>
          <img className="img2" alt="" src={rccn2}/>
        </div>
      </div>
    </div>
      </div>
  );
}


export default App;
