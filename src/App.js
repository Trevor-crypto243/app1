import React,{Component} from 'react';
import './App.css';

//use two components to fetch data from user and do the api call,then map that component with the api result 

class App extends Component {  
  constructor(props){
    super(props);
    this.state={
      items:[],
      isloaded:false,     
      lat:0,
      lon:0,
    }    
  }  
  
  //Component did mount wil carry out the API call
  componentDidMount(){ 
    var x = this.state.lat; // The lattitude value
    var y = this.state.lon; // The longitude value           
    
    // fetch("https://api.open-meteo.com/v1/forecast?latitude="+x+"&longitude="+y+"&hourly=temperature_2m")
    fetch("https://api.open-meteo.com/v1/forecast?latitude="+x+"&longitude="+y+"&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m")    
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isloaded:true,      
        items : json, 
        })
    });
  }


  render() {       

    var {isloaded,items}=this.state;   //The flag to monitor if the API has been loaded
    if(!isloaded){
      return <div>Loading...</div>
    }else{
      //returns the form having the form and the bootstrap modal
        return ( 
        <div className="App">
          <div className="App">
            <h1>HOURLY WEATHER FORECAST APP</h1>            
            <hr />
            <h4>Enter the lattitude and the longitude values below...</h4>
            <small>please use values in the range of 0.00 - 00.00 , for app testing purposes</small>
            <div className="request"> 

              <div className="mb-3">
                <label className="form-label">Enter the latitude</label>
                <input id="lat"
                onChange={()=>{                  
                  var x = document.getElementById("lat").value;                  
                  this.setState({                    
                    lat:x
                  })}}
                ></input> 

              </div>
              <div className="mb-3">
                
                <label className="form-label">Enter the longitude</label>
                <input id="lon"
                onChange={()=>{                  
                  var y = document.getElementById("lon").value;                  
                  this.setState({                    
                    lon:y
                  })}}
                ></input>
              </div> 
            
            <button type='submit' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
              onClick={()=>{
              var x = document.getElementById("lat").value;
              var y = document.getElementById("lon").value;
              console.log(x)
              console.log(y)
              // this.setState({
              //   lat:x,
              //   lon:y
              // })
              console.log("This is the latitude value",this.state.lat);
              console.log("This is the longitude value",this.state.lon);
              this.componentDidMount();

            }}>Get weather updates</button>           
            
                             
                             
            </div> 
            {/* The response section, to render results from the api call */}
            <div className="response">
            <div className="show">          
           
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Weather updates</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {/* The response compnent goes here<Response /> */} 
                          <p>The following are the weather updates</p>                               
                          <ul>
                            <li>Temprature : {items.hourly.temperature_2m.slice(0,5).join(",")}</li>
                            <li>Wind speed : {items.hourly.windspeed_120m.slice(0,5).join(",f")}</li>
                            <li>Humidity : {items.hourly.relativehumidity_2m.slice(0,5).join(",")}</li>
                            <li>Cloud cover : {items.hourly.cloudcover_mid.slice(0,5).join(",")}</li>
                          </ul>
                        
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>               
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
    
  }}}


export default App;


