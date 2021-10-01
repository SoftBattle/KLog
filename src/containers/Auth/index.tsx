import React, { useState, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Button from '../../components/Button'
import { FormItem, Input } from '../../components/Form'
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
        <h1 className={styles.title}>
          登录到 KLog
        </h1>
        <FormItem style={{margin: '24px 0'}}>
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
        </FormItem>
        <FormItem style={{margin: '24px 0'}}>
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
        </FormItem>
        <FormItem>
          <Button func='submit' type='primary' size='max' style={{height: '40px'}}>登  录</Button>
        </FormItem>
        <span className={styles.footer}>还没有账号？去 <a onClick={(e) => {
          e.preventDefault()
          setForm('regist')
          e.stopPropagation()
        }}>注册</a>. </span>
      </form>
    )
  }

  const Regist = () => {
    return <form className={styles.form} onSubmit={handleRegist}>
      <h1 className={styles.title}>
        注册到 KLog
      </h1>
      <FormItem style={{margin: '24px 0'}}>
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
      </FormItem>
      <FormItem style={{margin: '24px 0'}}>
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
      </FormItem>
      <FormItem style={{margin: '24px 0'}}>
        <Button func='submit' type='primary' size='max' style={{height: '40px'}}>注  册</Button>
      </FormItem>
      <span className={styles.footer}>已有账号？去 <a onClick={(e) => {
        e.preventDefault()
        setForm('login')
      }}>登录</a>. </span>
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
