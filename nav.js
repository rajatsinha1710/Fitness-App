import React from 'react'
import logo from './logo.svg'
import {FaVideo, FaNewspaper, FaRunning, FaThLarge, FaUser} from 'react-icons/fa'


function Nav() {
  return (
    <nav>
      <div className='Nav-Container'>
            <div className='nav-header'>
                <img src={logo} alt="logo" className='nav-logo' />
            </div>
                <div className='nav-icons-container'>
                  <ul className='icons'>
                    <li >
                        <button className='icon-list btn'>
                          <FaVideo/>
                        </button>
                        <p className='btn'>Live</p>
                    </li>
                    <li >
                        <button className='icon-list btn'>
                          <FaNewspaper/>
                        </button>
                        <p className='btn'>Subscription</p>
                    </li>
                    <li >
                        <button className='icon-list btn'>
                          <FaRunning/>
                        </button>
                        <p className='btn'>Plans</p>
                    </li>
                    <li >
                        <button className='icon-list btn'>
                          <FaThLarge/>
                        </button>
                        <p className='btn'>More</p>
                    </li>
                  </ul>

                </div>
                <button className='btn signIn-btn'><FaUser/>  Login</button>
      </div>            
    </nav>
  )
}

export default Nav