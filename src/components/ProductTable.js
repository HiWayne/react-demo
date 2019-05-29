import React from "react"
import { isArray } from "util";
import ProductCategoryRow from "./components/ProductCategoryRow"
import ProductRow from "./components/ProductRow"

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props)
  }

  sortProduct(key) {
    const data = this.props.data
    let resultObject = {}
    if (isArray(data)) {
      data.forEach(function (object) {
        const sort = object[key]
        if (resultObject.hasOwnProperty(sort)) {
        }
        else {
          resultObject[sort] = []
        }
        resultObject[sort].push(object)
      })
      return resultObject
    }
  }

  render() {
    const sortObject = this.sortProduct("category")
    const category = Object.keys(sortObject).map((category) => {
      const products = sortObject[category]
      products = products.map((productData) => <ProductRow key={productData.name} name={productData.name} price={productData.price}/>)
      return (
        <ProductCategoryRow key={category} category={category}/>
        {products}
      )
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    )
  }
}