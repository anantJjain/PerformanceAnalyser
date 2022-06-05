import React from 'react'
import '../../src/styles.css'
import C from '../../src/components/C.png'
import U from '../../src/components/U.png'
import Uin from '../../src/components/Uin.png'
import V from '../../src/components/V.png'
import E1 from '../../src/components/E1.png'
import T1 from '../../src/components/T1.png'
import T2 from '../../src/components/T2.png'
import E2 from '../../src/components/E2.png'
import ProfileLogo from '../../src/components/ProfileLogo.png'


function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={C}></img>
        <img src={U}></img>
        <img src={Uin}></img>
        <img src={V}></img>
        <img src={E1}></img>
        <img src={T1}></img>
        <img src={T2}></img>
        <img src={E2}></img>  
      </div>

      <div className='Profile'>
        <div><img src={ProfileLogo} className='ProfileImage'></img></div>
        <div className='ProfileName'>Anant Jain</div>
      </div>  
    </div>
  )
}

export default Navbar