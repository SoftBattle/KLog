import React, { useEffect, useState } from 'react'
import api from '../../services'

const Index = () => {
  const [intro, setIntro] = useState('')
  const getData = async () => {
    const re = await api.test.testGet()
    setIntro(re.data)
    console.log(re.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return <div>
    {intro}
  </div>
}

export default Index