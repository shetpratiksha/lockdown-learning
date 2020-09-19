import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setcbRef = (element) =>{
            this.cbRef = element
        }
    }

    componentDidMount(){
        console.log(this.cbRef)
        this.cbRef.focus()
      //  console.log(this.inputRef)
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setcbRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefDemo
