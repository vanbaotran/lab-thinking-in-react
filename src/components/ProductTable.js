import React from 'react'
import ProductRow from './ProductRow'
class ProductTable extends React.Component {

    render(){
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.data.map((el)=>{
                        return <ProductRow name={el.name} price={el.price}/>
                    })}
                </tbody>
            </table>
        )
    }
}
export default ProductTable