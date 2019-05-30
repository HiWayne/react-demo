import React from "react"
import { isArray } from "util";
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 把data.json中的数组变成 {产品种类：相关数组} 的对象形式
   * @param 代表产品种类的字段名
   * return {产品种类：相关产品对象组成的数组}
  **/ 
  _sortProduct(key) {
    const data = this.props.data
    let resultObject = {}
    if (isArray(data)) {
      data.forEach(function (object) {
        const sort = object[key]
        if (!resultObject.hasOwnProperty(sort)) {
          resultObject[sort] = []
        }
        resultObject[sort].push(object)
      })
      /* resultObject = {
          "Sporting Goods": [{"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"}, ...],
          "Electronics": [{"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"}, ...]
         }
      */
      return resultObject
    }
  }

  render() {
    const sortObject = this._sortProduct("category")
    const product = Object.keys(sortObject).map((category) => {
      const value = sortObject[category]
      const productRowList = value.map((productData) => <ProductRow key={productData.name} productData={productData}/>)
      return (
        <React.Fragment>
          <ProductCategoryRow key={category} category={category}/>
          {productRowList}
        </React.Fragment>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {product}
      </table>
    )
  }
}