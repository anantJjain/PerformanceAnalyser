import React from 'react'
import '../../src/styles.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


function SyllabAnalysis() {
  return (
    <div className='SyllabAnalysis'>
      <div className='Syllabheader'>Syllabus wise Analysis</div> 

      <div className='Topics'>
        <p className='testTags'>HTML Tools,Forms,History</p>
        <Progress 
          percent={80} 
          status="success"
          theme={{
              success: {
                symbol:'80%',
                trailColor: 'rgb(67, 138, 246,0.1)',
                color: '#438AF6'
              }
            }} 
        />
      </div>

      <div className='Topics'>
        <p className='testTags'>Tags and References in HTML</p>
        <Progress 
          percent={60} 
          status="success"
          theme={{
              success: {
                symbol:'60%',
                trailColor: 'rgb(255, 145, 66,0.1)',
                color: '#FF9142'
              }
            }} 
        />
      </div>

      <div className='Topics'>
        <p className='testTags'>Tables and CSS Basics</p>
        <Progress 
          percent={24} 
          status="success"
          theme={{
              success: {
                symbol:'24%',
                trailColor: 'rgb(251, 94, 94,0.1)',
                color: '#FB5E5E'
              }
            }} 
        />
      </div>

      <div className='Topics'>
        <p className='testTags'>Forms</p>
        <Progress 
          percent={96}
          status="success"
          theme={{
              success: {
                symbol:'96%',
                trailColor: 'rgb(46, 201, 113,0.1)',
                color: '#2EC971'
              }
            }} 
        />
      </div>
      
    </div>
  )
}

export default SyllabAnalysis