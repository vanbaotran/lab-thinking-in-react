import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div>
            <label>Search</label>
                <input type='search' name='query' value={this.props.query} onChange={this.props.handleChange}/>
            </div>
        )
    }
}


export default SearchBar