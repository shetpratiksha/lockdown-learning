import React from 'react'

const FRInputRef = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref}/>
        </div>
    )
})

export default FRInputRef
