import React,{Component} from 'react';
import './App.css';
import Form from './form'
import Form2 from './form2'


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


  componentDidMount(){
    //fetch('https://jsonplaceholder.typicode.com/users')    
    var x = 67.9;
    var y = 56.8;
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

    var {isloaded,items}=this.state;   
    if(!isloaded){
      return <div>Loading...</div>
    }else{
        return ( 
        <div className="App">
          <div className="App">
            <h1>HOURLY WEATHER FORECAST APP</h1>
            <hr />
            <h4>Enter the lattitude and the longitude values below...</h4>
            <div className="request"> 
            <Form />       
            </div> 
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
    );  //}         
    
  }}}

export default App;


