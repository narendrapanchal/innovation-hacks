import React, { useState } from 'react'
import "../styles/dashboard.css"
function Dashboard() {
  const [activeBackground,setActiveBackground]=useState(-1);
  const dashboardContent =[
    {src:"dashboard.png",
      name:"Dashboard"
    },
    {src:"playground.png",
      name:"Playground"
    },
    {src:"ingest.png",
      name:"Ingest"
    },
    {src:"automation.png",
      name:"Automation"
    },
    {src:"active-automation.png",
      name:"Active Automation"
    },
    {src:"messages.png",
      name:"Messages"
    }
  ]
  return (
    <div className='black'>
      <div className='dashboard'>
        <div className='user'>
          <img src="./images/dashboard/user.png" alt="user"/>
          <div>

          <span>Alex Johns</span>
            <span>alexjohns@gmail.com</span>
          </div>
          <img alt="down-key"  className='down-key' src="./images/dashboard/down-key.png"/>
        </div>

        <img className='logo' src="./images/logo.png" alt="logo"/>
      <div className='dashboard-content'>
        {dashboardContent.map((content,index)=>
        <div key={index} onClick={()=>setActiveBackground(index)} className={`dashboard-item ${activeBackground === index? 'active' : ''}`}>
          <img src={`./images/dashboard/${content.src}`} alt={content.name}/>
          <span>{content.name}</span>
        </div>)}
      </div>
          </div>
    </div>
  )
}

export default Dashboard
