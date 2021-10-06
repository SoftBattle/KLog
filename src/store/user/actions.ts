export interface UserStore {
  uid: string
  nickname: string
  avatar: string
  token: string
}

export interface USER_Action {
  type: 'STORE_USER' | 'UPDATE_NICKNAME' | 'UPDATE_AVATAR' | 'UPDATE_INFO'
  data: UserStore | string | any
}

// setUser Action
// 每次set时，需要将store存储在localstorage中
export const storeUser = (user: UserStore): USER_Action => {
  return {
    type: 'STORE_USER',
    data: user
  }
}

export const updateNickname = (nickname: string): USER_Action => {
  return {
    type: 'UPDATE_NICKNAME',
    data: nickname
  }
}

export const updateAvatar = (avatar: string): USER_Action => {
  return {
    type: 'UPDATE_AVATAR',
    data: avatar
  }
}

export const updateInfo = (data: {
  avatar: string
  nickname: string
}): USER_Action => {
  return {
    type: 'UPDATE_INFO',
    data: data
  }
}