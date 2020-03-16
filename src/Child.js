import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  
  render() {
    console.log(this.props.color)
    return (
      <div
        // onClick={ () => this.props.handleColorChange(getRandomColor())}
        className="child"
        // style={{backgroundColor: this.props.childrenColor}}
        style={{backgroundColor: this.props.color}}
        onClick={this.props.handleColorChange}
      ></div>
    )
  }
}

export default Child
