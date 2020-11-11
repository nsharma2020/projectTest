//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const MAIN_API = 'https://api.spaceXdata.com/v3/launches?limit=100';
const LAUNCH= 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=%';
const LANDING= 'https://api.spaceXdata.com/v3/launches?limit=100&land_success=@';
const DATE = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=$';
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      items:[],
      launch:[],
      landing:[],
      landing_success:[],
      devlp_name: "Nishant Sharma",
      btn_filter: false,
      item1:[],
      launch_filter: false,
      launchVal: false,
      land_filter: false,
      date:[]
    };
  }


  componentDidMount(){
    axios.get(MAIN_API)
    .then(result => this.setState({
      items: result.data,
      item1:result.data
    }))
    .catch(error => this.setState({
      error,
    }));
    
  }

  

   handleLaunch = (e) =>{
     var landSucess = LAUNCH.replace('%',e)
     axios.get(landSucess)
    .then(res => this.setState({
      items: res.data,
      
    }))
    .catch(error => this.setState({
      error,
    }));
   }

   handleLand= (e)=>{
      var launchSucess = LANDING.replace('@',e)
       axios.get(launchSucess)
      .then(ret => this.setState({
        items: ret.data,
        
      }))
      .catch(error => this.setState({
        error,
      }));
   }

  handleDate = (e)=>{
var DateUpdate = DATE.replace('$', e);
axios.get(DateUpdate)
    .then(res => {
      console.log(res.data)
      this.setState({items: res.data})      
  }
    )
    .catch(error => this.setState({
      error,
    }));

  }
  render(){    
    return (
      <div className="App">

<div class="header">
  <h1>SpaceX Launch Program</h1>
</div>

<div class="row">  
  <div class=" menu">
  <h2><strong>Filters</strong></h2>
    <p className="filter_heading">Launch Year</p>
    <button 
    type= "button" 
    value="2006" 
    onClick={e => this.handleDate(e.target.value)}
    >2006</button>
    <button type= "button" 
    value="2007"
    onClick={e => this.handleDate(e.target.value)}
    >2007</button>
    <button type= "button" value="2008"
    onClick={e => this.handleDate(e.target.value)}>2008</button>
    <button type= "button" value="2009"
    onClick={e => this.handleDate(e.target.value)}>2009</button>
    <button type= "button" value="2010"
    onClick={e => this.handleDate(e.target.value)}>2010</button>
    <button type= "button" value="2011"
    onClick={e => this.handleDate(e.target.value)}>2011</button>
    <button type= "button" value="2012"
    onClick={e => this.handleDate(e.target.value)}>2012</button>
    <button type= "button" value="2013"
    onClick={e => this.handleDate(e.target.value)}>2013</button>
    <button type= "button" value="2014"
    onClick={e => this.handleDate(e.target.value)}>2014</button>
    <button type= "button" value="2015"
    onClick={e => this.handleDate(e.target.value)}>2015</button>
    <button type= "button" value="2016"
    onClick={e => this.handleDate(e.target.value)}>2016</button>
    <button type= "button" value="2017"
    onClick={e => this.handleDate(e.target.value)}>2017</button>
    <button type= "button" value="2018"
    onClick={e => this.handleDate(e.target.value)}>2018</button>
    <button type= "button" value="2019" onClick={e => this.handleDate(e.target.value)}>2019</button>
    <button type= "button" value="2020"
    onClick={e => this.handleDate(e.target.value)}>2020</button>

    <p className="filter_heading">Successful Launch</p>
    <button type= "button" value="true"
    onClick={e => this.handleLaunch(e.target.value)}>True</button>
    <button type= "button" value="false"
    onClick={e => this.handleLaunch(e.target.value)}>False</button>

    <p className="filter_heading">Successful Landing</p>
    <button type= "button" 
    value="true"  
    onClick={e => this.handleLand(e.target.value)}
    >True</button>
    <button type= "button" value="false" 
    onClick={e => this.handleLand(e.target.value)}>False</button>
  </div>

  <div class=" contentWrapper  col-3 col-6">
    
     
      {this.state.items.map(item =>
       <div className="flights">
         <img className= "flight_image" src ={item.links.mission_patch_small} />
         <h4 className="detials">{item.mission_name + "#" + item.flight_number}</h4>
         <p className="detials"><strong>Mission Id's</strong></p>
         <p className="detials">{item.mission_id}</p>
         <p className="detials"><strong>Launch Year</strong>: {item.launch_year}</p>
         <p className="detials"><strong>Successful Launch</strong>: {item.launch_success? "true": "false"}</p>
         <p className="detials"><strong>Successful Landing</strong>:{item.rocket.first_stage.cores[0].land_success? "true": "false"} </p>
       </div>
      
      )}    
   
  </div>

  <div className="footer">
    <strong>Developed By : </strong>{this.state.devlp_name}
  </div>
      </div>
      </div>
    );
  }
  
}

export default App;
