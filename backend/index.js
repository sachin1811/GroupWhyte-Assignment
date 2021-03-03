var fs = require('fs'); 
var findShortRoute = require('./components/findShortestRoute.js'); 
   
// json file with the data 
var data = fs.readFileSync('TrainRoute.json'); 
   
var TrainData = JSON.parse(data); 
const express = require("express"); 
const app = express(); 
   
// To solve the cors issue 
const cors=require('cors'); 
    
app.use(express.static('public')); 
app.use(cors()); 
const port = process.env.PORT || 5000;
   
app.listen(port,  
    () => console.log("Server Start at the Port")); 

  
    
let TrainRoute = {};
for(let counter=0;counter < TrainData.length;counter++)
{
if(TrainRoute.hasOwnProperty([TrainData[counter].DepartStation]))
{
TrainRoute[TrainData[counter].DepartStation][TrainData[counter].ArriveStation] =TrainData[counter].Time;
}
else
{TrainRoute[TrainData[counter].DepartStation] ={};
TrainRoute[TrainData[counter].DepartStation][TrainData[counter].ArriveStation] =TrainData[counter].Time;
}
}



app.get('/ShortestTrainPath', searchElement); 
  
function searchElement(request, response) { 
    var Source = request.query.Source; 
    var Destination =  request.query.Destination;
    //console.log(Source,':',Destination)
     var RouteData = findShortRoute(TrainRoute, Source, Destination);
       
    if(RouteData.distance != "Infinity") { 
        var reply = RouteData;       
    } 
    else { 
        var reply = { 
            status:"Route Not Found"
        } 
    } 
       
    response.send(reply); 
} 

