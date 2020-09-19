import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCount extends Component {
  
    render() {
        return (
            <div>
               <h1 onMouseOver={this.props.clickHandler}>Hovered {this.props.count} times</h1> 
            </div>
        )
    }
}

export default withCounter(HoverCount,2)
