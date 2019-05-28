import React from "react"

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table>
          <th>
            <td>Name</td>
            <td>Price</td>
          </th>
        </table>
      </div>
    )
  }
}