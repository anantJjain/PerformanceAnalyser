import React from 'react'
import '../../src/Modal.css'
import Ellipse from '../../src/components/Ellipse 77.png'
import b1 from '../../src/components/1.png'
import b2 from '../../src/components/2.png'
import b3 from '../../src/components/3.png'
import logo from '../../src/components/image4.png'
import arrow from '../../src/components/saveArrow.png'

const Modal = (
                { 
                  onRankIncrease,
                  onRankDecrease,
                  onPercentileIncrease,
                  onPercentileDecrease,
                  onCurrentScoreIncrease,
                  onCurrentScoreDecrease,
                  // handleSave,
                  handleClose,
                  data
                }
              
              ) => {

const showHideClassName = data.show ? "modal display-block" : "modal display-none";

return (
    
  <div className={showHideClassName}> 

      <section className="modal-main">

        <div className='ModalHead'>Update Scores<img className='logo' src={logo}></img></div>

        <div className='HoriLine'></div>

        <div className='setContent'>
          
          <div className='Update'>
            <div className='Ellipse'>
              <img src={Ellipse}></img>
              <div className='number'>
                <img src={b1}></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>rank</b></div>
            <div className='buttons1'> 
              <button  className='btn'onClick={onRankIncrease}>+</button>
              <div className='input'>{data.rank}</div>
              <button  className='btn'onClick={onRankDecrease}>-</button>
            </div>
          </div>

          <div className='Update'>
          <div className='Ellipse'>
              <img src={Ellipse}></img>
              <div className='number'>
                <img src={b2}></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>percentile</b></div> 
            <div className='buttons'>
              <button  className='btn'onClick={onPercentileIncrease}>+</button>
              <div className='input'>{data.percentile}</div>
              <button  className='btn'onClick={onPercentileDecrease}>-</button>
            </div>
          </div>
          
          <div className='Update'>
          <div className='Ellipse'>
              <img src={Ellipse}></img>
              <div className='number'>
                <img src={b3}></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>current score (out of 15)</b></div>
            <div className='buttons'>
              <button className='btn' onClick={onCurrentScoreIncrease}>+</button>
              <div className='input'>{data.currentscore}</div>
              <button className='btn' onClick={onCurrentScoreDecrease}>-</button></div>
            </div>
          </div>

        {/* <h1></h1>
        

        <h1></h1>
        
        
        <h1></h1> 
        

        {<br></br>}
        {<br></br>} */}

        <div className='HoriLine'></div>
        {/* <button type="button" onClick={handleSave}> */}
        <button className='buttonSave' onClick={handleClose}>
          Save
          <img src={arrow} className='arrow'></img>
        </button>
        
        {/* <button className='buttonClose' onClick={handleClose}>
          Close
        </button> */}

      </section>

  </div>  
  );
};

export default Modal