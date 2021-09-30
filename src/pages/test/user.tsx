import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { storeUser, UserStore } from '../../store/user/actions'
import Message from '../../components/Message/message'

const Index = ({ uid, nickname, avatar, token, setUser }) => {
  const [id, setId] = useState(uid)
  useEffect(() => {
    console.log({ uid, nickname, avatar, token })
  }, [uid])
  return (
    <div>
      <h1>user redux</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setUser({
        uid: id,
        nickname,
        avatar,
        token
      })}>确定</button>
      <Message type={'success'} text={'请求 http request'}></Message>
    </div>
  )
}

const mapStateTpProps = ({userStore}) => {
  return {
    ...userStore
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (data: UserStore) => dispatch(storeUser(data))
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(Index)