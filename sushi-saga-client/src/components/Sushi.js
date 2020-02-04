import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushi, eaten, addEatenSushi} = props
  const {img_url, name, price} = sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => addEatenSushi(sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi