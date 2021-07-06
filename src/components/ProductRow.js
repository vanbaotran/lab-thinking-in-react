import React from 'react'

function ProductRow(props) {
let divStyle = {
color: 'red'
}
if (props.stocked){
divStyle.color='black'
} else {
divStyle.color='red'
}
return(
<tr style={divStyle}>
<td>
{props.name} 
</td>
<td>
{props.price}
</td>
</tr>
)
}
export default ProductRow 