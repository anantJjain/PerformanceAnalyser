import React from 'react'
import '../../src/Modal.css'
import Ellipse from '../assets/Ellipse 77.png'
import b1 from '../assets/1.png'
import b2 from '../assets/2.png'
import b3 from '../assets/3.png'
import logo from '../assets/image4.png'
import arrow from '../assets/saveArrow.png'

const Modal = ({ 
                  onRankIncrease,
                  onRankDecrease,
                  onPercentileIncrease,
                  onPercentileDecrease,
                  onCurrentScoreIncrease,
                  onCurrentScoreDecrease,
                  handleClose,
                  data
                }) => {

const showHideClassName = data.show ? "modal display-block" : "modal display-none";
return (
    <div className={showHideClassName}> 
      <section className="modal-main">
        <div className='ModalHead'>Update Scores
          <img className='logo' src={logo} alt='Sorry'></img>
        </div>

        <div className='HoriLine'></div>

        <div className='setContent'>

          <div className='Update'>
            <div className='Ellipse'>
              <img src={Ellipse} alt='Sorry'></img>
              <div className='number'>
                <img src={b1} alt='Sorry'></img>
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
              <img src={Ellipse} alt='Sorry'></img>
                <div className='number'>
                  <img src={b2} alt='Sorry'></img>
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
              <img src={Ellipse} alt='Sorry'></img>
              <div className='number'>
                <img src={b3} alt='Sorry'></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>current score (out of 15)</b></div>
            <div className='buttons'>
              <button className='btn' onClick={onCurrentScoreIncrease}>+</button>
              <div className='input'>{data.currentscore}</div>
              <button className='btn' onClick={onCurrentScoreDecrease}>-</button></div>
            </div>
          </div>
          
        <div className='HoriLine'></div>
        
        <button className='buttonSave' onClick={handleClose}>
          Save
          <img src={arrow} className='arrow' alt='Sorry'></img>
        </button>

      </section>
    </div>  
  );
};

export default Modal