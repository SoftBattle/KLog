import { createStore, applyMiddleware, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const isServer = typeof window === 'undefined'
const __NEXT_STORE__ = '__NEXT_STORE__'

const initialNextStore = !isServer && JSON.parse(localStorage.getItem(__NEXT_STORE__)) || {}

export function initializeStore(initialStore = initialNextStore) {
  // const isDev = process.env.NODE_ENV === 'development'
  return createStore(rootReducer, initialStore, applyMiddleware(thunkMiddleware))
}

export function getOrCreateStore(initialState?): Store {
  
  if(isServer) {
    return initializeStore(initialState)
  }

  if(!window[__NEXT_STORE__]) {
    window[__NEXT_STORE__] = initializeStore(initialState)
  }

  return window[__NEXT_STORE__]
}

export const store = getOrCreateStore()

export const unsubscribe = store.subscribe(() => {
  !isServer && localStorage.setItem(__NEXT_STORE__, JSON.stringify(store.getState()))
})

