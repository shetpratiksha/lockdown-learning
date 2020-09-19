import React, { Component } from 'react'
import FRInputRef from './FRInputRef';

class FRParentRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInputRef ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FRParentRef
