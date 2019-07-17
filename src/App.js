import React, { useState, useEffect } from "react";
import Posts from "./components/Posts.js"
import axios from 'axios'
import "./App.css";
//import src from "*.svg";

function App() {
  const [data, setData] = useState([])

  const fetch = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=v6BWrD5polvAAE2wbGy1WHGC35mIllgAGeqCfJHK')
      .then(res => {  
        setData(res.data)
      })
      .catch(error => { console.log('t-minus 10 seconds, error!')}
      )
    }

    useEffect(fetch, [])

    console.log(data)

  return (
    <div className="App">
      <Posts nasaVid={data.url} title={data.title} />
    </div>
  );
}

export default App;
