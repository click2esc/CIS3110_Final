import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Items from './Components/items';
console.log("Starting AppJS");

class App extends React.Component {
  render(){
    console.log("Passing Into AppJS");
    return (
      <div className="container">
      <h1 className="text-center">- Manny's To Do List -</h1>
      <Items />
      </div>
    );
  }
}
console.log("Passed Through AppJS");
export default App;
