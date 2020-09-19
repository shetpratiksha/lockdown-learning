import React, { Component } from 'react'
import withCounter from './WithCounter'

class CounterInc extends Component {
  
    render() {
       // const {count} = this.state
        return (
            <div>
                <button onClick={this.props.clickHandler}>{this.props.name} Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default withCounter(CounterInc, 5)
