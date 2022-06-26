import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa';

function Row() {


  return (
    <div className='main-container'>
      <div className='content'>
        <div className='strength tile' >
          <h4 className='text'>Strength</h4>
          <i><FaChevronCircleRight/></i>
        </div>
        <div className='mobility tile'>
          <h4 className='text'>Mobility</h4>
          <i><FaChevronCircleRight/></i>
        </div>
        <div className='drills tile'>
          <h4 className='text'>Drills</h4>
          <button>
          <i><FaChevronCircleRight/></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Row