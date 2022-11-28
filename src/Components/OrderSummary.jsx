import React from 'react'
import { useNavigate } from 'react-router-dom'


const OrderSummary = () => {
    const navgate= useNavigate()

  return (
    <div>
      Order confirmed
      <button onClick={()=>navgate('/')}>GO back</button>
    </div>
  )
}

export default OrderSummary
