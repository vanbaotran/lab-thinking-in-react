import React from 'react';
import jsondata from './data.json'
import './App.css';
import SearchBar from './components/SearchBar';
import FilterableProductTable from './components/FilterableProductTable';


class App extends React.Component {
  state = {
    data: jsondata.data
  }
  ChangeHandler = (el) =>{
    let updatedData = []
    for (let i = 0; i<this.state.data.length;i++){
      if(this.state.data.includes.el.toLowerCase()){
        updatedData.push(el)
      }
    }
    this.setState({
      data: updatedData
    })
  }
  render(){
    return (
      <div className="App">
       <SearchBar onChange={()=>this.ChangeHandler}/>
        <FilterableProductTable products={ this.state.data} />
      </div>
    );
  }
 
}

export default App;