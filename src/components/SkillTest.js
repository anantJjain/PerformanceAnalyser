import React,{useState} from 'react'
import '../../src/styles.css'
import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Modal from './Modal'

function SkillTest() {

  const [show,setShow] = useState(false)
  const [rank,setRank] = useState(5)
  const [percentile,setPercentile] = useState(97)
  const [currentscore,setCurrentScore] = useState(12)

  const minRank = 1;
  const maxPercentile = 100;
  const minPercentile = 0;
  const minCurrentScore = 0;
  const maxCurrentScore = 15;

  const onRankIncrease = () => setRank(rank => rank + 1 )
  const onRankDecrease = () => {
                                    if(rank>minRank)
                                      {
                                        setRank(rank=>rank+1)
                                      }
                                  }
  
  const onPercentileIncrease = () =>{
                                        if(percentile<maxPercentile)
                                        {
                                          setPercentile(percentile => percentile + 1 );
                                        }
  
  
                                      }
  const onPercentileDecrease = () =>{
                                        if(percentile>minPercentile)
                                        {
                                          setPercentile(percentile => percentile -1 );
                                        }
  
  
                                      }

  const onCurrentScoreIncrease = () => {
                                        if(currentscore<maxCurrentScore)
                                        {
                                          setCurrentScore(currentscore => currentscore + 1);
                                        }
                                      }
  const onCurrentScoreDecrease = () => {
                                        if(currentscore>minCurrentScore)
                                        {
                                          setCurrentScore(currentscore => currentscore - 1);
                                        }
                                      }
  const showModal = () => setShow(true)
  const hideModal = () => setShow(false)

  const data = {
    'show':show,
    'rank':rank,
    'percentile':percentile,
    'currentscore':currentscore
  }
  

  return (


    <div className='CenterGrid'>
      <div className='textHead'>Skill Test</div>
<div className='SkillContainer'>
  <div className='TestHeading'>Hypertext Markup Language</div>
  <div className='TestDetails'>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div>
</div>

<button onClick={showModal} className='ModalToggler'>Update</button>

<div className='QuickStats'>
  <div className='QuickStatsHeading'>Quick Statistics</div>
  <div className='QuickStatsContent'>
      <div className='rank'>
        <span className='rankNum'>{rank}</span>
        <span className='rankName'>YOUR RANK</span>  
      </div>
      <div className='percentile'>
        <span className='PercentileNum'>{percentile}</span>
        <span className='PercentileName'>PERCENTILE</span>  
      </div>
      <div className='score'>
        <span className='ScoreNum'>{currentscore}</span>  
        <span className='ScoreName'>CORRECT ANSWERS</span>  
      </div>
  </div>
      
    {/* <div className='rankNum'>{rank}</div>
      <div className='rankName'>YOUR RANK</div>
    
      <div className='PercentileNum'>{percentile}</div>
      <div className='PercentileName'>PERCENTILE</div>
    
      <div className='ScoreNum'>{currentscore}</div>
      <div className='ScoreName'>CORRECT ANSWERS</div> */}
</div>

<div className='GraphBox'>
  
  <h1 className='GraphHead'>Comparison Graph</h1>        
  { 
    percentile<72?<p className='PercentileShow'>You scored {percentile}% percentile which is lower than 72% which is the average percentile of all  those who took this test</p>:<p className='PercentileShow'>You scored {percentile}% percentile which is higher than 72% which is the average percentile of all those who took this test</p>
  } 

  <Line className='LinePercentile'
      datasetIdKey='id'
      data={{
              labels: ['0%', '20%', '40%' ,'60%','80%','100%'],
              datasets: [
                {
                  data:[5,6,10,12,14,55,percentile,45,20,10],
                },
              ],
            }}
    />
</div>     

<h1 className='QuesHead'>Question Analysis {currentscore}/15</h1>        
  { 
    currentscore<15?<p className='QuesAnalysis'>You score {currentscore} correct out of 15.You are just a few miles away.</p>:<p className='QuesAnalysis'>You score {currentscore} correct out of 15.Congratulations!!</p>
  }

  <div className='AnswersPie'>
      <Doughnut 
                className='PieGraph'
                datasetIdKey='id'
                data={{
                        labels: ['Correct Answers','Incorrect Answers'],
                        datasets: [
                          {
                            data:[currentscore,15-currentscore],
                            backgroundColor: [
                              '#438AF6',
                              'rgba(67, 138, 246, 0.1)'
                            ],
                          },
                        ],
                      }}
      />
  </div>

<Modal 
    data={data} 
    onRankIncrease={onRankIncrease}
    onRankDecrease={onRankDecrease}
    onPercentileIncrease={onPercentileIncrease}
    onPercentileDecrease={onPercentileDecrease}
    onCurrentScoreIncrease={onCurrentScoreIncrease}
    onCurrentScoreDecrease={onCurrentScoreDecrease}
    // handleSave={saveData}
    handleClose={hideModal}
/> 
    
       
   
    </div>
  )
}

export default SkillTest

