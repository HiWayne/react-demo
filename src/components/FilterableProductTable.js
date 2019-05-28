import React from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable data={this.props.data}/>
      </div>
    )
  }
}