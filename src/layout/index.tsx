// import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'
import React, { Fragment, ReactNode } from 'react'
import Header from '../components/Header'

const Layout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <Fragment>
      <Header></Header>
      {
        children
      }
    </Fragment>
  )
}

export default Layout