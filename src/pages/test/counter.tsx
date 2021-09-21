import React, { useState } from 'react'

const Index = () => {
  const [count, setCount] =  useState(0)
  
  return <div>
    <h1>counter</h1>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>增加</button>
  </div>
}

export default Index