import React from "react"

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const name = this.props.productData.stocked ? this.props.productData.name : <span style={{color: 'red'}}>{this.props.productData.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.productData.price}</td>
      </tr>
    )
  }
}