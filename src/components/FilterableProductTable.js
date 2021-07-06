import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component{
state = {
query :""
}
handleChange(event){
this.setState({query: event.target.value})
}
render(){
return (
<div>
<SearchBar query= {this.state.query} handleChange = {(e)=>{this.handleChange(e)}}/>
<ProductTable data = {this.props.products.filter((item) => {
return item.name.toLowerCase().includes(this.state.query)
})} />
</div>
)
}
}
export default FilterableProductTable 