import '../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
// import { getOrCreateStore } from '../store'
// import rootReducer from '../store/reducers'
import Layout from '../layout'

import '../main'

import { store, unsubscribe } from '../store'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/k.svg" />
        <title>KLog, record every moment.</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  )
}

export default App