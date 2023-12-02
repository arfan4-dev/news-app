import React from 'react'
import Bar from './Bar'
import MainContent from './mainContent/MainContent'
import Spinner from './Spinner'
import { useSelector } from 'react-redux'

const HomePage = () => {

  return (
    <div className='overflow-hidden'>
    
        <React.Fragment><Bar/>
        <MainContent/></React.Fragment>
    

        
    </div>
  )
}

export default HomePage