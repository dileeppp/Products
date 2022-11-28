import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navgate= useNavigate()
  return (
    <div>
      Home

      <div style={{padding:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus, repellendus exercitationem expedita assumenda vitae harum ipsam, dolore iste, necessitatibus tempora possimus? Officia molestiae libero placeat dolorum, corrupti tempora! Quae.</div>
      <hr />
      
      <button onClick={()=>navgate('order-summary')}>place Order</button>

    </div>
  )
}

export default Home
