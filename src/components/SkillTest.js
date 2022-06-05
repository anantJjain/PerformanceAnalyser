import React,{useState} from 'react'
import '../../src/styles.css'
import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Modal from './Modal'
import skill from '../../src/components/image4.png'
import rank from '../../src/components/rank.png'
import percentile from '../../src/components/percentile.png'
import score from '../../src/components/score.png'
import Arrow from '../../src/components/QuesAir.png'
// import eclipse from '../../src/components/eclipse.png'

function SkillTest() {

  // let customRadius = ( percentile ) =>
  // {
    
  //   let index = percentile.dataIndex;
  //   let value = context.dataset.data[ index ];
  //   return index === 3 || value >= 8 ?
  //          10 :
  //          2;
  // }
  const [show,setShow] = useState(false)
  const [rank,setRank] = useState(5)
  const [percentile,setPercentile] = useState(97)
  const [currentscore,setCurrentScore] = useState(12)

  const minRank = 1;
  const maxPercentile = 100;
  const minPercentile = 0;
  const minCurrentScore = 0;
  const maxCurrentScore = 15;

  const onRankDecrease = () => setRank(rank => rank + 1 )
  const onRankIncrease = () => {
                                    if(rank>minRank)
                                      {
                                        setRank(rank=>rank-1)
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
        <div className='icon'><img src={skill}></img></div>
        <div className='contentSkill'>
          <div className='SkillName'>Hypertext Markup Language</div>
          <div className='SkillDetails'>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div>
        </div>
        <div>
          <button 
            onClick={showModal} 
            className='ModalToggler'>Update</button>
        </div>
        {/* <div className='TestHeading'>Hypertext Markup Language</div>
        <div className='TestDetails'>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div> */}
      </div>


<div className='QuickStats'>

  <div className='QuickStatsHeading'>Quick Statistics</div>

  <div className='QuickStatsContent'>

      <div className='rankContent'>
        <div className='rankIcon'><img src={rank}></img></div>
        <div className='rank'>
          <span className='rankNum'>{rank}</span>
          <span className='rankName'>YOUR RANK</span>  
        </div>
      </div>
    
      <div className='Line'></div>

      <div className='percentileContent'>
        <div className='percentileIcon'><img src={percentile}></img></div>
        <div className='percentile'>
        <span className='PercentileNum'>{percentile}%</span>
        <span className='PercentileName'>PERCENTILE</span>  
      </div>
      </div>

      <div className='Line'></div>

      <div className='scoreContent'>
        <div className='scoreIcon'><img src={score}></img></div>
        <div className='score'>
          <span className='ScoreNum'>{currentscore}/15</span>  
          <span className='ScoreName'>CORRECT ANSWERS</span>  
        </div>
      </div>          
  </div>
</div>

<div className='GraphBox'>
  
  <h1 className='GraphHead'>Comparison Graph</h1>
  <p className='GraphData'>
  { 
    percentile<72?<p className='PercentileShow'>You scored {percentile}% percentile which is lower than 72% which is the average percentile of all  those who took this test</p>:<p className='PercentileShow'>You scored {percentile}% percentile which is higher than 72% which is the average percentile of all those who took this test</p>
  } 
  </p>   







  <Line 
      className='LinePercentile'
      options={
                  {
                    scales:{x:{ grid:{display:false,drawBorder:false}},y:{ grid:{display:false,drawBorder:false},ticks:{display:false}  }},
                    legend:{display:false},
                    // elements:{line:{borderWidth:'1px'}}
                  }
              } 
      data={{
              labels: ['0%', '20%', '40%' ,'60%','80%','100%'],
              datasets: [{
                  label:'none',
                  data:[5,66,9,42,5,95],
                  // borderWidth:'1px',
                  borderColor:'#C8D6E5',
                  // pointRadius:'0px',
                  tension:0.5
                }],
            }}
            
    />


















</div>     


<div className='QuesPie'>

  <div className='PieHead'>
    <span className='QuesHead'>Question Analysis</span>
    <span className='QuesNumber'>{currentscore}/15</span>
  </div>

  <div className='QuesDesc'>      
  { 
    currentscore<15?<span className='QuesAnalysis'>You score {currentscore} questions correct out of 15. However it still needs improvements.</span>:<span className='QuesAnalysis'>You score {currentscore} correct out of 15.Congratulations!!</span>
  }
  </div>

  <div className='AnswersPie'>
      <img className='Arrow' src={Arrow}></img>
      <Doughnut 
                className='PieGraph'
                datasetIdKey='id'
                data={{
                        datasets: [
                          {
                            data:[currentscore,15-currentscore],
                            // borderWidth:'100px',
                            // radius:'10px',
                            backgroundColor: [
                              '#438AF6',
                              'rgba(67, 138, 246, 0.1)'
                            ],
                          },
                        ],
                      }}
      />
  </div>


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

