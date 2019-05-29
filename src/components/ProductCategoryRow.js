import React from "react"

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
}