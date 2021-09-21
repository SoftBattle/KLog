import '../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../store/reducers'
import Layout from '../layout'

const store = createStore(rootReducer)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {/* <Provider store={store}>
        <Component {...pageProps} />
      </Provider> */}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  )
}

export default App