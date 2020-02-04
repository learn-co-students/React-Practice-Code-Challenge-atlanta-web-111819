import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.allSushi.map(s => (
            <Sushi 
              sushi={s} 
              eaten={props.eatenSushi.includes(s)}
              addEatenSushi={props.addEatenSushi}
            />))
        }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer