import React from 'react'

class SearchBar extends React.Component{
    state= {
        query:''
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name] : value})
    }
    render(){
        return(
            <div>
            <label>Search</label>
                <input type='search' name='query' placeholder='Search...' value={this.props.query} onChange={(e) => this.handleChange(e)} onClick={this.props.typing}/>
            </div>
        )
    }
}


export default SearchBar