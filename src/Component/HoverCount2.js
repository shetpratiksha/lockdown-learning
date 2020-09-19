import React, { Component } from 'react'

class HoverCount2 extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCount2
