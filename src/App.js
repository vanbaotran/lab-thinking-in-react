import React from 'react';
import jsondata from './data.json'
import './App.css';


import FilterableProductTable from './components/FilterableProductTable';
import { render } from '@testing-library/react';


class App extends React.Component() {
  state ={
    query : ""
  }
  handleChange(event){
    const {name, value} = event.target;
    this.setState({[name] : value})
}
  render(){
    return (
      <div className="App">
        <FilterableProductTable products={ jsondata.data } query= {this.state.query} handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;