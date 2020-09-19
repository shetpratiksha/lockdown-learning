import React from 'react'

const withCounter = (WrappedComponent,incrCounter) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
    
        clickHandler = () =>{
            this.setState(prevState =>{
                return {count: prevState.count + incrCounter}
            })
        }
        render(){
            return <WrappedComponent 
                    count={this.state.count} 
                    clickHandler={this.clickHandler}
                    {...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter