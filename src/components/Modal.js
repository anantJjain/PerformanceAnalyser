import React from 'react'
import '../../src/Modal.css'

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

        <h1 className='ModalHead'>Update Scores</h1>

        <div className='HoriLine'></div>

        <h1>Update your rank-{data.rank}</h1>
        <button onClick={onRankIncrease}>Increment</button>
        <button onClick={onRankDecrease}>Decrement</button>

        <h1>Update your percentile-{data.percentile}</h1>
        <button onClick={onPercentileIncrease}>Increment</button>
        <button onClick={onPercentileDecrease}>Decrement</button>
        
        <h1>Update your Current Score-{data.currentscore}</h1> 
        <button onClick={onCurrentScoreIncrease}>Increment</button>
        <button onClick={onCurrentScoreDecrease}>Decrement</button>

        {<br></br>}
        {<br></br>}

        <div className='HoriLine'></div>
        {/* <button type="button" onClick={handleSave}> */}
        <button className='buttonSave'>
          Save
        </button>
        
        <button className='buttonClose' onClick={handleClose}>
          Close
        </button>

      </section>

  </div>  
  );
};

export default Modal