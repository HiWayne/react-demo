import React from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.filterTextChange = this.filterTextChange.bind(this)
    this.inStockOnlyChange = this.inStockOnlyChange.bind(this)
    this.state = {
      filterText: "",
      inStockOnly: false
    }
  }

  filterTextChange(newText) {
    this.setState({
      filterText: newText
    })
  }

  inStockOnlyChange() {
    this.setState((state) => ({
      inStockOnly: !state.inStockOnly
    }))
  }

  //根据filterText和inStockOnly筛选产品
  _updateProductList() {
    const filterText = this.state.filterText.toLowerCase()
    const inStockOnly = this.state.inStockOnly
    const productList = this.props.data
    if (filterText === "" && !inStockOnly) {
      return productList
    }
    let newProductList = []
    productList.forEach((object) => {
      if (inStockOnly && object["stocked"] !== inStockOnly) {
        return
      }
      for (let key in object) {
        if ( key !== "category" && typeof (object[key]) === "string" && object[key].toLowerCase().indexOf(filterText) !== -1) {
          newProductList.push(object)
          break
        }
      }
    })
    return newProductList
  }

  render() {
    const data = this._updateProductList()
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} filterTextChange={this.filterTextChange} inStockOnlyChange={this.inStockOnlyChange}/>
        <ProductTable data={data}/>
      </div>
    )
  }
}