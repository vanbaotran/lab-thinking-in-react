import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component{
    render(){
        return (
            <div>
              <SearchBar query= {this.props.query} handleChange = {this.handleChange}/> 
              <ProductTable data = {this.props.products} />
            </div>
        )
    }
}
export default FilterableProductTable