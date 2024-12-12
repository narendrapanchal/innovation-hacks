import React from 'react'
import Dashboard from '../components/Dashboard.jsx'
import AutomateChat from '../components/AutomateChat.jsx'
import AutomateDesign from '../components/AutomateDesign.jsx'
function Home() {
  return (
    <div className='home'>
      <Dashboard/>
      <AutomateChat/>
      <AutomateDesign/>
    </div>
  )
}

export default Home