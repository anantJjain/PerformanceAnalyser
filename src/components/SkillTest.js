import React,{useState} from 'react'
import '../../src/styles.css'
import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Modal from './Modal'
import skill from '../assets/image4.png'
import score from '../assets/score.png'
import Arrow from '../assets/QuesAir.png'
import Ellipse from '../assets/Ellipse125.png'
import graph from '../assets/graph.png'
import score1 from '../assets/score1.png'
import trophy from '../assets/trophy.png'

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
                                          setPercentile(percentile => percentile + 1 )
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
        <div className='icon'>
          <img src={skill} alt='Sorry'></img>
        </div>
        <div className='contentSkill'>
          <div className='SkillName'>Hypertext Markup Language</div>
          <div className='SkillDetails'>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div> 
        </div>
        <button 
          onClick={showModal} 
          className='ModalToggler'>Update
        </button>
      </div>

      <div className='QuickStats'>
        <div className='QuickStatsHeading'>Quick Statistics</div>
        <div className='QuickStatsContent'>
          <div className='rankContent'>
            <div className='rankIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                <div className='Trophy'>
                  <img src={trophy} alt='Sorry'></img>
                </div>
              </div>
            </div>
            <div className='rank'>
              <span className='rankNum'>{rank}</span>
              <span className='rankName'>YOUR RANK</span>  
            </div>
          </div>
      
          <div className='Line'></div>

          <div className='percentileContent'>
            <div className='percentileIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                <div className='Trophy'>
                  <img src={score1} alt='Sorry'></img>
                </div>
              </div>
            </div>
            <div className='percentile'>
              <span className='PercentileNum'>{percentile}%</span>
              <span className='PercentileName'>PERCENTILE</span>  
            </div>
          </div>

          <div className='Line'></div>

          <div className='scoreContent'>
            <div className='scoreIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                  <div className='Trophy'>
                    <img src={score} alt='Sorry'></img>
                  </div>
              </div>
            </div>
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
          <div className='GraphIcon'>
            <div className='Ellipse'>
              <img src={Ellipse} alt='Sorry'></img>
              <div className='Trophy'>
                <img src={graph} alt='Sorry'></img>
              </div>
            </div>
          </div>
        </p>
        <Line 
          value={percentile}
          className='LinePercentile'
          options={{
                      scales:{x:{ grid:{display:false,drawBorder:false}},y:{ grid:{display:false,drawBorder:false},ticks:{display:false}  }},
                      legend:{display:false},
                      responsive:true,
                      plugins:{
                        tooltip:{
                          callbacks: {
                                        label: function(context) {
                                          let label = context.dataset.label;
                                          label = '';
                                          return label;
                                        } 
                                  },   
                          // enabled:false,
                          // backgroundColor:'red',
                          backgroundColor: '#1E272E',
                          // borderWidth:'2px',
                          padding:20,
                          titleFont:{weight:'700',family:'DM Sans',size:18},
                          titleColor:'#FFFFFF',
                          cornerRadius:5,
                          caretPadding:25,
                          caretSize:10,
                          // yAlign:100
                          // border-radius: 5px,
                        }
                      }
                    }} 
          data={{
                labels: ['0%', '20%', '40%' ,'60%','80%','100%'],
                datasets: [{
                    label:' ',
                    data:[5,66,9,42,5,95,5],
                    borderColor:'#C8D6E5',
                    tension:0.5
                  }],
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
          handleClose={hideModal}
      />   

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
          <div className='AnswerPie'>
            <img className='Arrow' src={Arrow} alt='Sorry'></img>
            <Doughnut 
              className='PieGraph'
              data={{
                      datasets: [{
                                  data:[currentscore,15-currentscore],
                                  backgroundColor: [
                                                    '#438AF6',
                                                    'rgba(67, 138, 246, 0.1)'
                                                  ],

                                }],
                          }}
              options={{ 
                          cutout:120,
                          rotation:90,
                          radius:150,         
                        }}
            >
              
            </Doughnut>
          </div>
        </div> 

    </div>

    
  )
}

export default SkillTest

