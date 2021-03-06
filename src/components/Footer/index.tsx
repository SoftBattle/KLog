import React from 'react'
import style from './index.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span> 
        <a href="https://github.com/SoftBattle" target='_blank'>© 2021 SoftBattle</a>
      <span>|</span>
        <a href="https://softbattle.github.io/" target='_blank'>know more about us.</a>.
      </span>
    </footer>
  )
}

export default Footer