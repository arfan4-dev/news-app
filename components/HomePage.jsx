import React from 'react'
import Bar from './Bar'
import MainContent from './mainContent/MainContent'
import Spinner from './Spinner'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      {/* <Spinner/> */}
      
        <Bar/>
        <MainContent/>
    </div>
  )
}

export default HomePage