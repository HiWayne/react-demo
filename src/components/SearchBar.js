import React from "react"

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.filterTextChange = this.filterTextChange.bind(this)
    this.inStockOnlyChange = this.inStockOnlyChange.bind(this)
  }

  filterTextChange(e) {
    this.props.filterTextChange(e.target.value)
  }

  inStockOnlyChange(e) {
    this.props.inStockOnlyChange(e.target.checked)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.filterTextChange}></input>
        <div>
          <input id="input" type="checkbox" checked={this.props.inStockOnly} onChange={this.inStockOnlyChange}></input>
          <label for="input">Only show products in stock</label>
        </div>
      </div>
    )
  }
}