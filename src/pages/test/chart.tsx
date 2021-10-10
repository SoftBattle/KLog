import React, { useState } from 'react'
import { CalendarCharts } from '../../components/CalendarChart'
import NoSSR from 'react-no-ssr'
const Index = () => {
  const [count, setCount] =  useState(0)
  
  return (
    <NoSSR>
      <CalendarCharts></CalendarCharts>
    </NoSSR>
  )
}

export default Index