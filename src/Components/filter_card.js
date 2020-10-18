import React from 'react';
import '../App.css';

class Filter extends React.Component {
  constructor(props){
    super(props);
  }

  //filter value and filter type is passed to Result component by handleFilter function.
  handleFilter=(display,event)=>{
      let value=event.target.value
      this.props.activateFilter( value,display); 
    }
    
  render(){
  return (
    <div className="Filter-Card-Container">
      <h2 className="Filter-heading">Filters</h2>
      <div className="filter-types">
        <h3 className="Filter-sub-heading1">Launch Year</h3>
        <hr />
        <div className="filter-buttons">
           <tr><button value="2006" onClick={this.handleFilter.bind(this,"year")} >2006</button>
               <button value="2007" onClick={this.handleFilter.bind(this,"year")}>2007</button>
            </tr>
            <tr><button value="2008" onClick={this.handleFilter.bind(this,"year")}>2008</button>
                <button value="2009" onClick={this.handleFilter.bind(this,"year")}>2009</button>
            </tr>
            <tr><button value="2010" onClick={this.handleFilter.bind(this,"year")}>2010</button>
                <button value="2011" onClick={this.handleFilter.bind(this,"year")}>2011</button>
            </tr>
            <tr><button value="2012" onClick={this.handleFilter.bind(this,"year")}>2012</button>
                <button value="2013" onClick={this.handleFilter.bind(this,"year")}>2013</button>
            </tr>
            <tr><button value="2014" onClick={this.handleFilter.bind(this,"year")}>2014</button>
                <button value="2015" onClick={this.handleFilter.bind(this,"year")}>2015</button>
            </tr>
            <tr><button value="2016" onClick={this.handleFilter.bind(this,"year")}>2016</button>
                <button value="2017" onClick={this.handleFilter.bind(this,"year")}>2017</button>
            </tr>
            <tr><button value="2018" onClick={this.handleFilter.bind(this,"year")}>2018</button>
                <button value="2019" onClick={this.handleFilter.bind(this,"year")}>2019</button>
            </tr>
            <tr><button value="2020" onClick={this.handleFilter.bind(this,"year")}>2020</button></tr>
        </div>
        <h3 className="Filter-sub-heading2">Successful Launch</h3>
        <hr />
        <div className="filter-buttons">
            <tr><button value="true" onClick={this.handleFilter.bind(this,"launching")}>True</button>
                <button value="false" onClick={this.handleFilter.bind(this,"launching")}>False</button>
            </tr>
        </div>
        <h3 className="Filter-sub-heading3">Successful Landing</h3>
        <hr />
        <div className="filter-buttons">
            <tr><button value="true" onClick={this.handleFilter.bind(this,"landing")}>True</button>
                <button value="false" onClick={this.handleFilter.bind(this,"landing")}>False</button>
            </tr>
        </div>
      </div>
    </div>
  );
}
}
export default Filter;