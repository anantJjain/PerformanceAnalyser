import React from 'react'
import '../../src/styles.css'
import { NavLink } from 'react-router-dom'
import Skill1 from '../assets/Skill1.png'
import Skill2 from '../assets/Skill2.png'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
import line3 from '../assets/line3.png'
import Internships1 from '../assets/internship.png'
import Internships2 from '../assets/internship1.png'


function Sidebar() {
  return (
    <div className='Sidebar'>
      
        <NavLink 
          to={'/Dashboard'}
          className='Navlink1'
          style={({ isActive }) => ({
            textDecoration:'none',
            borderRadius: isActive ? '0px 100px 100px 0px': '0px',
            color: isActive ? '#445EE2' : '#545e6f',
            fontWeight:isActive ? 900 : 500,
            fontSize:isActive ? '1.2em' :'16px',
            background: isActive ? '#F7F8FA' : '#FFFFFF',
          })} 
        >
          <div className='sideDashboard'>
            <div className='DashboardIcon'>
              <img className='line' src={line1} alt='Sorry'></img>
              <img className='line' src={line2} alt='Sorry'></img>
              <img className='line' src={line3} alt='Sorry'></img>
            </div>  
            <div className='dash'>Dashboard</div>
          </div>
        </NavLink>
    
        <NavLink 
          to={'/'} 
          className='Navlink2'
          style={({ isActive }) => ({
            textDecoration:'none',
            borderRadius: isActive ? '0px 100px 100px 0px': '0px',
            color: isActive ? '#445EE2' : '#545e6f',
            fontWeight:isActive ? 900 : 500,
            fontSize:isActive ? '1.2em' :'16px',
            background: isActive ? '#F7F8FA' : '#FFFFFF',
          })}
        >
          <div className='sideSkill'>
            <div className='SkillIcon1'>
              <img src={Skill1} alt='Sorry'></img>
              <div className='Badge1'>
                <img src={Skill2} alt='Sorry'></img>
              </div>
            </div>  
            <div className='dash'>Skill Test</div>
          </div>
        </NavLink>
    
        <NavLink 
          to={'/Internships'}
          className='Navlink2'
          style={({ isActive }) => ({
            textDecoration:'none',
            borderRadius: isActive ? '0px 100px 100px 0px': '0px',
            color: isActive ? '#445EE2' : '#545e6f',
            fontWeight:isActive ? 900 : 500,
            fontSize:isActive ? '1.2em' :'16px',
            background: isActive ? '#F7F8FA' : '#FFFFFF',
          })} 
        >
          <div className='sideInternships'>
            <div className='SkillIcon'>
              <div className='internIcon'>
                <img src={Internships1} alt='Sorry'></img>
                <div className='internIcon2'>
                  <img src={Internships2} alt='Sorry'></img>
                </div>
              </div>
            </div>  
            <div className='intern'>Internships</div>
          </div>  
        </NavLink>
    </div>
  )
}

export default Sidebar