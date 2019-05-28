import React from "react"

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..."></input>
        <div>
          <input id="input" type="checkbox"></input>
          <label for="input">Only show products in stock</label>
        </div>
      </div>
    )
  }
}