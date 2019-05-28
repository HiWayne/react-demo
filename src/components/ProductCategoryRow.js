import React from "react"

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <th>
        <td>{this.props.category}</td>
      </th>
    )
  }
}