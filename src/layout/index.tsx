import React, { Fragment, ReactNode } from 'react'
import Header from '../containers/Header'
import Footer from '../components/Footer'

const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <Fragment>
      <Header></Header>
      <div className="wrapper">
        {
          children
        }
      </div>
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout