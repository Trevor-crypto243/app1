import React,{Component} from 'react';
import './App.css';
import Form from './form'

//use two components to fetch data from user and do the api call,then map that component with the api result 
//in the response section

class App extends Component {  
  constructor(props){
    super(props);
    this.state={
      items:[],
      isloaded:false,
    }
  }


  render() {     
        return ( 
        <div className="App">
          <div className="App">
            <h1>HOURLY WEATHER FORECAST APP</h1>
            <hr />
            <div className="request"> 
            <Form />       
            </div> 
            <div className="response">
            <div class="show">          
           
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Weather updates</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {/* The response compnent goes here<Response /> */} 
                          <p>Details from the api should be rendered here</p>                               
                        
                        </div>
                        <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>               
                        </div>
                    </div>
                    </div>
                </div>
           </div>
            </div>
         </div>       
      </div>
    );
  //}         
    
  }}


export default App;


// function App() {  
//   return (
//     <><Response />
//     <div className="App">
//       <h1>HOURLY WEATHER FORECAST APP</h1>
//       <hr />
//       <div className="request">
//         <form>
//           <div className="mb-3">
//             <label for="latitude" className="form-label">lattitude</label>
//             <input type="number" className="form-control" id="latitude" aria-describedby="emailHelp"></input>
//           </div>

//           <div className="mb-3">
//             <label for="longitude" className="form-label">Longitude</label>
//             <input type="number" className="form-control" id="longitude"></input>
//           </div>

//           <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//             Get weather updates
//           </button>
//         </form>
//       </div>

//       <div class="show">

//         <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title" id="staticBackdropLabel">Weather updates</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">

//                 <div class="response">
//                   <div class="temp">The temprature is {items.hourly.temperature_2m}</div>
//                   <div class="wind">Wind details {items.hourly.windspeed_120m}</div>
//                   <div class="cloud_cover">Cloud cover {items.hourly.relativehumidity_2m}</div>
//                   <div class="humidity">The humidity is {items.hourly.cloudcover_mid}</div>
//                 </div>

//               </div>
//               <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div></>
//   );
//   }

// export default App;
