import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
import Layout from '../layout'

import '../styles/global.css'
import 'highlight.js/styles/atom-one-light.css'
import 'bytemd/dist/index.min.css'

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