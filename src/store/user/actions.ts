export interface UserStore {
  uid: string
  nickname: string
  avatar: string
  token: string
}

export interface USER_Action {
  type: 'STORE_USER'
  data: UserStore
}

// setUser Action
// 每次set时，需要将store存储在localstorage中
export const storeUser = (user: UserStore): USER_Action => {
  return {
    type: 'STORE_USER',
    data: user
  }
}