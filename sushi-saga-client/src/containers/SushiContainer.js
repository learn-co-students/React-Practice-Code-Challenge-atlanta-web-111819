import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import BackButton from '../components/BackButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">

        <BackButton handleBackPages={props.handleBackPages} />
        {
          props.list.map(sushi => 
          <Sushi 
          sushi={sushi}
          handleEat={props.handleEat}
          eaten={props.eaten.includes(sushi)} />)
        }
        <MoreButton handlePages={props.handlePages}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer