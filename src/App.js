import React from 'react';
import './App.css';
import Result from "./Components/Result_card"

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <div>
      <React.Suspense fallback={<span>Loading...</span>}>
      <h1 className="main-heading ">SpaceX Launch Programs</h1>
      <div className="Container">
      <Result/>
      </div>
      </React.Suspense>
    </div>
  );
}
}
export default App;
