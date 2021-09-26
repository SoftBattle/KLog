import React, { useState, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
// import Dialog from '../../components/Dialog'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services'
import { connect, DispatchProp } from 'react-redux'
import { Dispatch,  } from 'redux'
import { UserStore, storeUser } from '../../store/user/actions'
import { AuthInfo } from '../../interface'

const uidReg = '^[0-9A-Za-z]{2,18}$'
const passwdReg = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$'

const AuthForm = ({ setUser }: {
  setUser: Function
}) => {
  const formRef = useRef('login')
  const [uid, setUid] = useState('')
  const [passwd, setPasswd] = useState('')
  const router = useRouter()
  const [form, setForm] = useState('login')
  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const params: AuthInfo = {
      uid,
      passwd
    }
    const re = await api.auth.userLogin(params)
    if(re.stat === 'ok') {
      const { uid, nickname, avatar, token } = re.data
      setUser({uid, nickname, avatar, token})
    } else {
      alert('账户或密码错误!')
    }
  }

  const handleRegist = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const params: AuthInfo = {
      uid,
      passwd
    }
    const re = await api.auth.userRegist(params)
    if(re.stat === 'ok') {
      const { uid, nickname, avatar, token } = re.data
      setUser({uid, nickname, avatar, token})
    } else {
      alert('用户已存在')
    }
  }

  const Login = () => {
    return (
      <form 
        className={styles.form} 
        onClick={e => e.stopPropagation()}
        onSubmit={handleLogin}
        >
        <h2 className={styles.form_title}>
          Sign into KLog
        </h2>
        <div className={styles.form_item}>
          <Input 
            type="text" 
            name="uid" 
            placeHolder='Your uid'
            value={uid} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUid(e.target.value)} 
            rules={{
              required: true,
              pattren: uidReg
            }}
            style={{height: '38px'}}
          />
        </div>
        <div className={styles.form_item}>
          <Input 
            type="password"  
            name="passwd" 
            placeHolder='Your passwd'
            value={passwd} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswd(e.target.value)} 
            rules={{
              required: true,
              pattren: passwdReg
            }}
            style={{height: '38px'}}
          />
        </div>
        <div className={styles.form_item}>
          <Button func='submit' type='primary' size='max' style={{height: '40px'}}>Sign in</Button>
        </div>
        <span className={styles.form_footer}>Don't have an account? Go to <a onClick={(e) => {
          e.preventDefault()
          setForm('regist')
          e.stopPropagation()
        }}>Sign up</a>. </span>
      </form>
    )
  }

  const Regist = () => {
    return <form className={styles.form} onSubmit={handleRegist}>
      <h2 className={styles.form_title}>
        Sign up to KLog
      </h2>
      <div className={styles.form_item}>
        <Input 
          type="text" 
          name="uid" 
          placeHolder='Your uid'
          value={uid} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUid(e.target.value)} 
          rules={{
            required: true,
            pattren: uidReg
          }}
          style={{height: '38px'}}
        />
      </div>
      <div className={styles.form_item}>
        <Input 
          type="password"  
          name="passwd" 
          placeHolder='Your passwd'
          value={passwd} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswd(e.target.value)} 
          rules={{
            required: true,
            pattren: passwdReg
          }} 
          style={{height: '38px'}}
        />
      </div>
      <div className={styles.form_item}>
        <Button func='submit' type='primary' size='max' style={{height: '40px'}}>Sign in</Button>
      </div>
      <span className={styles.form_footer}>Already have an account? Go to <a onClick={(e) => {
        e.preventDefault()
        // e.stopPropagation()
        setForm('login')
      }}>Sign in</a>. </span>
    </form>
  }

  return (
    <Fragment>
      {
        (form === 'login') && Login() || Regist()
      }
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (user: UserStore) => dispatch(storeUser(user))
  }
}

export default connect(null, mapDispatchToProps)(AuthForm)
