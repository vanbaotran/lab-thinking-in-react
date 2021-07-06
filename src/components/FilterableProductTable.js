import React from 'react'
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component{
    render(){
        return (
            <div>
              <ProductTable data = {this.props.products} />
            </div>
        )
    }
}
export default FilterableProductTable