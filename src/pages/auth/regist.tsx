import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services'
import { AuthInfo } from '../../interface'

// 登录与注册两个页面为fixed定位，包含一个mask层，背部掩膜

const uidReg = '^[0-9A-Za-z]{2,18}$'
const passwdReg = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$'

const Regist = () => {
  const [uid, setUid] = useState('')
  const [passwd, setPasswd] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const params: AuthInfo = {
      uid,
      passwd
    }
    const re = await api.auth.userRegist(params)
    if(re.stat === 'ok') {
      router.push('/')
    } else {
      alert(re.msg)
    }
  }

  return (
    <div className={styles.auth}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.form_title}>
          Sign up an account
        </h2>
        <div className={styles.form_item}>
          <Input 
            type="text" 
            name="uid" 
            placeHolder='Your account'
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
            placeHolder='Your password'
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
          e.preventDefault();
          // history.push('/signup');
        }}>Sign in</a>. </span>
      </form>
    </div>
  )
}

export default Regist