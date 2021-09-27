import React, { Fragment, useState, useRef } from 'react'
import style from './index.module.scss'
import Link from 'next/link'
import DropDown from '../../components/DropDown'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import Dialog from '../../components/Dialog'
import AuthForm from '../Auth'
import NoSSR from 'react-no-ssr'
import { connect } from 'react-redux'
import { storeUser, UserStore } from '../../store/user/actions'
import { Dispatch } from 'redux'
import api from '../../services'

const Header = ({ avatar, uid, nickname, token, setUser }: {
  avatar?: string
  uid?: string
  nickname?: string
  token?: string
  setUser: Function
}) => {
  const [active, setActive] = useState(false)
  const [userMenuCollapsed, setUserMenuCollapsed] = useState(true)
  const [userActionCollapsed, setUserActionCollapsed] = useState(true)
  // const router = useRouter()
  // const authDialogVisible = useRef(false)
  const [authDialogVisible, setAuthDialogVisible] = useState(false)

  const getElems = () => {
    return 
  }

  return (
    <header className={style.header}>
      {/* pc端顶栏 */}
      <div className={style.logo}>
        <img src="/k.svg" alt="KLog" width='36px' height='36px' />
      </div>
      <div className={style.centeral}>
        <nav className={style.topnav}>
          <Link href='/'>
            <span className={style.nav_item}>Home</span>
          </Link>
          <Link href='/test/redux'>
            <span className={style.nav_item}>Found</span>
          </Link>
        </nav>
      </div>
      <div className={style.right}>
        <div className={`${style.search} ${active ? style.search_active : ''}`}>
          <form className={style.input_container} onSubmit={(e) => {
            e.preventDefault()
          }} >
            <input placeholder='type to search...' type="text" onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
          </form>
          <div className={style.search_btn}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7870" width="200" height="200"><path d="M940.571 852.693l-214.475-214.722c44.778-60.855 69.263-134.077 69.263-211.012 0-95.732-37.354-185.78-104.889-253.311-67.781-67.536-157.825-104.889-253.557-104.889s-185.78 37.354-253.311 104.889c-139.518 139.518-139.518 366.859 0 506.626 67.536 67.536 157.579 104.889 253.311 104.889 77.18 0 150.155-24.487 211.257-69.263l214.475 214.722c21.52 21.52 56.403 21.52 77.676 0 21.77-21.52 21.77-56.403 0.25-77.921zM252.866 611.256c-101.425-101.673-101.425-266.916 0-368.342 49.227-49.227 114.535-76.192 184.295-76.192 69.511 0 134.819 26.966 184.047 76.192 49.227 49.227 76.443 114.535 76.443 184.295 0 69.762-27.211 135.065-76.443 184.295-49.227 49.227-114.535 76.192-184.047 76.192-69.762-0.25-135.065-27.211-184.295-76.443z" p-id="7871"></path></svg>
          </div>
          <div className={style.search_icon} onClick={() => setActive(!active)}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7581" width="200" height="200"><path d="M580.52608 757.76H327.68A61.44 61.44 0 0 1 266.24 696.32V327.68A61.44 61.44 0 0 1 327.68 266.24h327.68A61.44 61.44 0 0 1 716.8 327.68v265.09312h40.96V327.68A102.4 102.4 0 0 0 655.36 225.28H327.68A102.4 102.4 0 0 0 225.28 327.68v368.64A102.4 102.4 0 0 0 327.68 798.72h252.84608v-40.96z" p-id="7582" fill="#2c2c2c"></path><path d="M491.52 675.84a143.36 143.36 0 1 0 0-286.72 143.36 143.36 0 0 0 0 286.72z m0-40.96a102.4 102.4 0 1 1 0-204.8 102.4 102.4 0 0 1 0 204.8z" p-id="7583" fill="#2c2c2c"></path><path d="M568.9344 628.40832l153.3952 163.84 29.9008-28.01664-153.43616-163.84z" p-id="7584" fill="#2c2c2c"></path></svg>
          </div>
        </div>
        <NoSSR>
          {
            !!uid && <Fragment>
              <div className={style.new_action} onClick={() => setUserActionCollapsed(!userActionCollapsed)}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4057" width="200" height="200"><path d="M127.289058 490.154459l0 43.770899c0 32.338522 27.009144 57.108672 58.774615 58.734706l233.271858 12.018731 12.005428 233.298464c1.665942 32.258705 26.396183 58.774615 58.734706 58.774615l43.770899 0c32.338522 0 57.108672-27.009144 58.734706-58.774615l12.005428-233.298464 233.351676-12.018731c31.765471-1.626034 58.774615-26.396183 58.774615-58.734706l0-43.770899c0-32.338522-26.51591-57.068763-58.774615-58.734706l-233.351676-12.005428-12.005428-233.311767c-1.626034-31.765471-26.396183-58.774615-58.734706-58.774615l-43.770899 0c-32.338522 0-57.068763 26.51591-58.734706 58.774615L419.334507 419.414325l-233.271858 12.005428C153.804968 433.085696 127.289058 457.815937 127.289058 490.154459z" p-id="4058"></path></svg>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2441" width="200" height="200"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c3.2 3.2 9.6 6.4 12.8 9.6l3.2 3.2c16 6.4 38.4 3.2 51.2-9.6l240-243.2c22.4-22.4 19.2-51.2 3.2-70.4z" p-id="2442"></path></svg>
                <DropDown
                  items={[
                    {content: 'New post', onClick: () => {alert('new post')}}
                  ]} 
                  style={{top: '50px', right: '0'}} 
                  collapsed={userActionCollapsed}
                  >
                  <div 
                    className={style.mask} 
                    onClick={() => setUserActionCollapsed(true)} 
                    ></div>
                </DropDown>
              </div>

              <div className={style.user} onClick={() => setUserMenuCollapsed(!userMenuCollapsed)}>
                <div className={style.avatar}>
                  {
                    avatar && <img src={avatar} alt="" /> || <img src="/avatar.svg" alt="" />
                  }
                </div>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2441" width="200" height="200"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c3.2 3.2 9.6 6.4 12.8 9.6l3.2 3.2c16 6.4 38.4 3.2 51.2-9.6l240-243.2c22.4-22.4 19.2-51.2 3.2-70.4z" p-id="2442"></path></svg>
                <DropDown 
                  items={[
                    {
                      content: <Link href={`/space/profile`}>
                        <span>Your profile</span>
                      </Link>, 
                    },
                    {
                      content: <Link href={`/space/posts`}>
                        <span>Your posts</span>
                      </Link>, 
                    },
                    {
                      content: <Link href={`/space/stars`}>
                        <span>Your stars</span>
                      </Link>, 
                    },
                    {
                      content: <Link href={`/space/follows`}>
                        <span>Your follows</span>
                      </Link>, 
                    },
                    {
                      content: <Link href={`/space/followers`}>
                        <span>Your followers</span>
                      </Link>, 
                    },
                    {
                      content: 'Sign out',
                      onClick: async () => {
                        const flag = window.confirm('当前操作将会退出账户，您确定要退出么？')
                        if(!flag) return
                        const re = await api.auth.userLogout()
                        if(re.stat === 'ok') {
                          setUser({})
                        } else {
                          alert('登出失败')
                        }
                      }
                    }
                  ]}
                  style={{top: '50px', right: '0',}}
                  collapsed={userMenuCollapsed}
                >
                  <div 
                    className={style.mask} 
                    onClick={() => setUserMenuCollapsed(true)}
                    ></div>
                  <Link href={`/space/${uid}`}>
                    <div className={style.user_desc}>
                        Signed in as
                        <strong>{nickname}</strong>
                    </div>
                  </Link>
                  <div className={style.divider}></div>
                </DropDown>
              </div>
            </Fragment>
            || <Fragment>
              <Button size='mid' onClick={() => {
                setAuthDialogVisible(true)
              }}>登录</Button>
              <Dialog 
                visible={authDialogVisible} 
                onClose={() => {
                  setAuthDialogVisible(false)
                }}
                width={440}
              >
                <AuthForm></AuthForm>
              </Dialog>
            </Fragment>
          }
        </NoSSR>
      </div>
    </header>
  )
}

const mapStateToProps = ({ userStore }: {
  userStore: UserStore
}) => {
  return {
    ...userStore
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (user: UserStore) => dispatch(storeUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)