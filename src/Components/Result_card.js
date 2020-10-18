import React from 'react';
import '../App.css';
import Filter from "./filter_card"

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state={
      initialData:[],
      loading:false
    }
  }

  //initial data if fetched initially and is kept in initialData state for initial rendering.
   async componentDidMount() {
    const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`);
    const json = await response.json();
    this.setState({ initialData: json });
    this.setState({loading:true})
  }

   /*activateFilter function is passed as props to Filter component and is called from there with 
      parameter display value and filter type to fetch data accordingly*/
    activateFilter(value,displayType){
  
    //fetches data from api when landing buttons are clicked 
    if(displayType=='landing'){
      setTimeout(()=>{alert(`${displayType} filter is activated with ${value} value`);
                      fetch(`https://api.spacexdata.com/v3/launches?limit=100&&launch_success=true&&land_success=${value}`)
                      .then(res=>res.json())
                      .then(data=>{this.setState({initialData:data});console.log(data)})
                      .catch(console.log)},2000) ;
    }

    //fetches data from api when launching buttons are clicked 
    else if(displayType=="launching"){
      setTimeout(()=>{alert(`${displayType} filter is activated with ${value} value`);
                      fetch(`https://api.spacexdata.com/v3/launches?limit=100&&launch_success=${value}`)
                      .then(res=>res.json())
                      .then(data=>{this.setState({initialData:data});console.log(data)})
                      .catch(console.log)},2000) ;
    }

    //fetches data from api when year buttons are clicked 
    else if(displayType=="year"){
      setTimeout(()=>{alert(`${displayType} filter is activated with ${value} value`);
                      fetch(`https://api.spacexdata.com/v3/launches?limit=100&&launch_success=true&&land_success=true&&launch_year=${value}`)
                      .then(res=>res.json())
                      .then(data=>{this.setState({initialData:data});console.log(data)})
                      .catch(console.log)},2000); 
    }
   }

  render(){
    if(!this.state.loading){
      return(<div className="loading"><h1>Loading...</h1></div>)
    }
    else{
      return (
        <div className="Result-Card-Container">
          <Filter activateFilter={this.activateFilter.bind(this)}/>
           <div className="results-data">
           {this.state.initialData.map(mission=>(
                                         <div className="results">
                                           <div className="result-image">
                                             <img  src={mission.links.mission_patch_small} width="200px" height="200px"/>
                                           </div>
                                           <div className="result-detail">
                                           <div className="mission-name">{ mission.mission_name}#{ mission.flight_number}</div>
                                              <div className="mission-id">Mission Ids:{"  "+ mission.mission_id.map(id=>id)}</div>
                                              <div className="mission-launchYear">Launch Year :{"  "+ mission.launch_year}</div>
                                              <div className="mission-successful-launching">Successful Launch :{" "+ mission.launch_success.toString() }</div>
                                              <div className="mission-successful-landing" >Successful Landing :{" "+mission.rocket.first_stage.cores[0].land_success}</div> 
                                            </div>
                                           </div>
                                                     )
                                        )
              } 
            </div>
        <footer>Developed by: Nilesh</footer>
        </div>
               )
           }
         }
}
export default Result;