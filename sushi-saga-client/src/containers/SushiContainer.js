import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         props.sushiSlicer.map(sushi => <Sushi sushi={sushi} sushiSlicer={props.sushiSlicer} key={sushi.id} eaten={props.eaten} eat={props.eat}/>)
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer