import React,{Component} from 'react';
import './weather.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isloaded:false,
      x : 67.9,
      y : 56.8,
    }
  }
  componentDidMount(){      
    // var x = 67.9;
    // var y = 56.8;    
    fetch("https://api.open-meteo.com/v1/forecast?latitude="+this.state.x+"&longitude="+this.state.y+"&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m")    
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
      return <div>Loading...</div>}else{
        return (      
      <div>
         <p>Hello</p>
      </div>
    );
  }}
}

export default App;