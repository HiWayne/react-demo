import React from "react"
import ReactDOM from "react-dom"
import FilterableProductTable from "./components/FilterableProductTable"
import originalData from "../../data.json"

// Array
const data = JSON.parse(originalData).data

ReactDOM.render(<FilterableProductTable data={data} />, document.querySelector("#root"))