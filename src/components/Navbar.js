import React from 'react'
import '../../src/styles.css'
import C from '../assets/C.png'
import Uout from '../assets/U.png'
import Uin from '../assets/Uin.png'
import V from '../assets/V.png'
import E1 from '../assets/E1.png'
import T1 from '../assets/T1.png'
import T2 from '../assets/T2.png'
import E2 from '../assets/E2.png'
import ProfileLogo from '../assets/ProfileLogo.png'


function Navbar() {
  return (
    <div className='Navbar'>
  
      <div className='Logo'>
        <img src={C} alt='Sorry'></img>
        <img src={Uout} className='Uout' alt='Sorry'></img>
        <img src={Uin}  className='Uin' alt='Sorry'></img>
        <img src={V} alt='Sorry'></img>
        <img src={E1} alt='Sorry'></img>
        <img src={T1} alt='Sorry'></img>
        <img src={T2} alt='Sorry'></img>
        <img src={E2} alt='Sorry'></img>  
      </div>

      <div className='Profile'>
        <div>
          <img src={ProfileLogo} className='ProfileImage' alt='Sorry'></img>
        </div>
        <div className='ProfileName'>Anant Jain</div>
      </div>  
    
    </div>
  )
}

export default Navbar