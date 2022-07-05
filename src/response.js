//import the form component from the form.js file
import Form from './form';
//get lat and lon values from the form

//fetch data from the api
//render the response component



import React,{Component} from 'react';

export default class Response extends React.Component{    
  constructor(props){
    super(props);
    this.state={
      items:[],
      isloaded:false, 
      lat: "",  
      lon: ""      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState(
        {
            lon: event.target.value,
            lat: event.target.value
        });  
  }
  handleSubmit(event){
    // event.preventDefault()  
    var {isloaded,items}=this.state;
    //alert(this.lat,this.lon);      
    var x = this.state.lat;
    var y = this.state.lon;   
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude="+x+"&longitude="+y+"&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m")    
    .then(res=>res.json())
    .then(json=>{
    this.setState({
        isloaded:true,      
        items : json, 
        })
    });
    if(!isloaded){
    return <div>Loading...</div>
    }else{
    return(
            <div class="show">
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Weather updates</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="response">
                        <div class="temp">The temprature is {items.hourly.temperature_2m}</div>
                        <div class="wind">Wind details {items.hourly.windspeed_120m}</div>
                        <div class="cloud_cover">Cloud cover {items.hourly.relativehumidity_2m}</div>
                        <div class="humidity">The humidity is {items.hourly.cloudcover_mid}</div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }    
  }  

  render() {   
    return (
      <div className="App">
        <div className="App">
      <h1>HOURLY WEATHER FORECAST APP</h1>
      <hr />
      <div className="request">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="lat" className="form-label">lattitude</label>
            <input onChange={this.handleChange} value={this.state.lat} type="number" className="form-control" id="lat" aria-describedby="emailHelp"></input>
          </div>

          <div className="mb-3">
            <label htmlFor="lon" className="form-label">Longitude</label>
            <input onChange={this.handleChange} value={this.state.lon} type="number" className="form-control" id="lon"></input>
          </div>

          <button type='submit' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Get weather updates
          </button>
        </form>
      </div>      
    </div>       
      </div>
    );}
  }


//Get the app to run again
//save it
//make two components,request and response
//make api call in request component
//get the results from the request component,pass it to the response component
//pass state from one component to the other
//render the response component