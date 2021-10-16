import React, { useState } from 'react'
import CalendarCharts from '../../components/CalendarChart'
import NoSSR from 'react-no-ssr'
const Index = () => {
  const [count, setCount] =  useState(0)
  
  return (
    <NoSSR>
      <CalendarCharts year='2021' max={10} min={0} />
    </NoSSR>
  )
}

export default Index