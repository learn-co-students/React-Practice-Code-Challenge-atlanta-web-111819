import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=>props.handlePages()}>
            More sushi!
          </button>
}

export default MoreButton