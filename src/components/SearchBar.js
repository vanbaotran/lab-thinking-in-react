import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div>
            <label>Search</label>
                <input type='search' name='query' value={this.props.query} onChange={(e) => this.handleChange(e)}/>
            </div>
        )
    }
}


export default SearchBar