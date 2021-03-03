import React,{useState} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import Button from "./components/button.component";
import Input from "./components/input.component";
//import Data from "./components/data.component";

function App() {
  
   const [Source, setSource] = useState( '' );
   const [Destination, setDestination] = useState( '' );
   const [Result, setResult] = useState(false);
   const [ValidData, setData] = useState(false);
   const [ResponseData, setResponseData] = useState('');
   const [ResponsePath, setResponsePathData] = useState('');

  let handleClick = () => {
    

  axios.get(`http://localhost:5000/ShortestTrainPath?Source=${Source}&Destination=${Destination}`)
      .then(res => {
        console.log(res.data);
        if(!!res.data.status && res.data.status === 'Route Not Found')
          {
            setResponseData("Invalid Path/Same Source-Destination");
            setData(false);
            setResult(true);
          }
          else
          {  setResponseData("Total Time Taken :"+res.data.distance+"m");
          setResponsePathData("Path Followed : "+JSON.stringify(res.data.path));
            setData(true);
            setResult(true);
          }
      });
    }
     
    let ClearText = () =>{

      setSource('');
      setDestination('');
      setResult(false);
      setData(false);
      setResponseData('');


    }


  return (
    <div id="BgColor" className="view-port">
    <div className="container">
    <div className="form-section">
    <form>
      <h5>Train Route Data</h5>
      <br/>
      <div className="row input-group input-group-sm mb-3">
  
      <Input  value={Source} placeholder="Enter Source" handleChange={e => {debugger;setSource(e.target.value)}}/>
    <br/>
      </div>
      <div className="row input-group input-group-sm mb-3">
  
      <Input  value={Destination}  placeholder="Enter Destination" handleChange={e => {debugger;setDestination(e.target.value)}}/>
    <br/>
      </div>
      <div className="row">
      <Button id = {"Submit"} label={"Submit"} handleClick={() => handleClick()}/>
      <Button id = {"Clear"} label={"Clear"} handleClick={() => ClearText()}/>
      </div>
      <div className="row">
        {Result && <h4>{ResponseData}</h4>}
      </div>
      <div className="row">
        {Result && ValidData && <h4>{ResponsePath}</h4>}
      </div>
      </form>
      </div>
    </div>
    </div>
  );
}

export default App;
