import React from 'react'
import Skill1 from '../../src/components/Skill1.png'
import Skill2 from '../../src/components/Skill2.png'
import line1 from '../../src/components/line1.png'
import line2 from '../../src/components/line2.png'
import line3 from '../../src/components/line3.png'
import Internships1 from '../../src/components/internship.png'
import Internships2 from '../../src/components/internship1.png'



function Sidebar() {
  return (
    <div className='Sidebar'>
    <div className='sideDashboard'>
      <div className='DashboardIcon'>
        <img className='line' src={line1}></img>
        <img className='line' src={line2}></img>
        <img className='line' src={line3}></img>
      </div>  
       <div className='dash'>Dashboard</div>
       </div>

    <div className='sideSkill'>
      <div className='SkillIcon'>
        <img src={Skill1}></img>
        <div className='Badge'>
          <img src={Skill2}></img>
        </div>
      </div>  
        Skill Test
    </div>

    <div className='sideInternships'>
    <div className='SkillIcon'>
        <div className='internIcon'>
            <img src={Internships1}></img>
          <div className='internIcon2'>
            <img src={Internships2}></img>
          </div>
        </div>
      </div>  
      <div className='intern'>Internships</div>
      </div>
    </div>
  )
}

export default Sidebar