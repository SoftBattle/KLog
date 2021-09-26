import { USER_Action, UserStore } from './actions'

const __USER_STORE__ = '__USER_STORE__'

const initialUserStore = (): UserStore => {
  const isServer = typeof window === 'undefined'
  // console.log(isServer)
  return !isServer && JSON.parse(localStorage.getItem(__USER_STORE__)) || {
    uid: '',
    nickname: '',
    avatar: '',
    token: ''
  }
}



export const userStore = (state = {}, action: USER_Action) => {
  switch(action.type) {
    case 'STORE_USER':
      return action.data
    default:
      return state
  }
}