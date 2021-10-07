import React, { useEffect, useState, Fragment } from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import styles from './index.module.scss'
import Tab from '../../components/Tab'
import { PostInfo, UserInfo } from '../../interface'
import message from '../../components/Message'
import Uploader from '../../components/Uploader'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import Dialog from '../../components/Dialog'
import { FormItem, Input } from '../../components/Form'
import { IconEdit, IconSub } from '../../components/Icons'
import { PostItem } from '../../components/MarkDown'
import UserItem from '../../components/UserItem'
import Pagination from '../../components/Pagination'
import { connect } from 'react-redux'
import { updateAvatar, updateInfo, updateNickname, UserStore } from '../../store/user/actions'
import { Dispatch } from 'redux'
import api from '../../services'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { uid } = ctx.params
  const tab = ctx.query?.tab || ''
  let user = {}
  let data: any = null
  // 获取 user 
  const userRe = await api.user.getUserInfo({uid: uid as string})
  if(userRe.stat === 'ok') {
    user = userRe.data
  }
  let dataRe: any
  switch(tab) {
    case 'posts':
      dataRe = await api.user.queryUserPosts({ pageIndex: 1, pageSize: 20, keyword: '', sort: 'ctime', uid: uid as string })
      if(dataRe.stat === 'ok') data = dataRe.data
      break
    case 'stars':
      dataRe = await api.user.queryUserStars({ pageIndex: 1, pageSize: 20, keyword: '', sort: 'ctime', uid: uid as string })
      if(dataRe.stat === 'ok') data = dataRe.data
      break
    case 'follows':
      dataRe = await api.user.queryUserFollows({ pageIndex: 1, pageSize: 20, keyword: '', sort: 'ctime', uid: uid as string })
      if(dataRe.stat === 'ok') data = dataRe.data
      break
    case 'followers':
      dataRe = await api.user.queryUserFollowers({ pageIndex: 1, pageSize: 20, keyword: '', sort: 'ctime', uid: uid as string })
      if(dataRe.stat === 'ok') data = dataRe.data
      break
    default:
      data = 'welcome to my home.'
  }

  return {
    props: {
      uid,
      user,
      tab,
      data
    }
  }
}

type TabType = 'profile' | 'posts' | 'stars' | 'follows' | 'followers'

const Space = ({ uid, tab, user, uuser, data, updateReduxUserInfo, updateReduxUserNickname, updateReduxUserAvatar }: {
  uid: string
  tab: TabType
  user: UserInfo,
  uuser: {
    uid: string
    nickname: string
  }
  updateReduxUserInfo: Function
  updateReduxUserNickname: Function
  updateReduxUserAvatar: Function
  data: any
}) => {
  const [avatar, setAvatar] = useState(user.avatar)
  const [nickname, setNickname] = useState(user.nickname)
  const [opwd, setOPwd] = useState('')
  const [npwd, setNPwd] = useState('')
  const [cpwd, setCPwd] = useState('')
  const [changeAvatarVisiable, setChangeAvatarVisiable] = useState(false)
  const [editInfoVisiable, setEditInfoVisiable] = useState(false)
  const [changePwdVisiable, setChangePwdVisiable] = useState(false)
  
  const [posts, setPosts] = useState<PostInfo[]>([])
  const [users, setUsers] = useState<UserInfo[]>([])
  const [pageIndex, setPageIndex] = useState(1)
  // const total = data?.total || 0
  const [total, setTotal] = useState(0)
  const pageSize = 10

  useEffect(() => {
    setPageIndex(1)
    refreshData()
  }, [tab])

  const uploadImage = async (files: File[]) => {
    const formData = new FormData()
    formData.append('file', files[0])
    const re = await api.file.uploadFile(formData)
    if(re.stat === 'ok') {
      message.success('头像上传成功！')
      setAvatar(re.data)
    } else {
      message.error('上传失败！')
    }
  }

  const handleInfoChange = () => {
    // 更新全局store
    updateReduxUserInfo({nickname, avatar})
  }

  const handleNicknameChange = async () => {
    if(nickname.trim().length === 0) {
      message.info('昵称不能为空！')
      return
    }
    const re = await api.user.updateUserNickname({nickname})
    if(re.stat === 'ok') {
      // 全局更新store
      message.info('昵称修改该成功！')
      updateReduxUserNickname(nickname)
    }
  }

  const handleAvatarChange = async () => {
    if(nickname.trim().length === 0) {
      message.info('请选择图片！')
      return
    }
    const re = await api.user.updateUserAvatar({avatar})
    if(re.stat === 'ok') {
      // 全局更新store
      updateReduxUserAvatar(avatar)
      setChangeAvatarVisiable(false)
    }
  }

  const handlePasswdChange = async (o, n, c) => {
    if(n !== c) {
      message.error('新密码与确认密码不一致！')
      return
    }
    const re = await api.user.updateUserPasswd({ newPasswd: n, oldPasswd: o })
    if(re.stat === 'ok') {
      message.info('密码修改成功！')
      setCPwd('')
      setOPwd('')
      setNPwd('')
      setChangePwdVisiable(false)
    } else {
      message.error('密码修改失败！')
    }
  }

  const getTabContent = () => {
    switch(tab) {
      case 'posts':
        return <Posts posts={posts} />
      case 'stars':
        return <Stars stars={posts} />
      case 'follows':
        return <Follows follows={users} />
      case 'followers':
        return <Followers followers={users} />
      default:
        return <Profile data={data as string} />
    }
  }

  const refreshData = async () => {
    let apiFunc: Function
    switch(tab) {
      case 'posts':
        apiFunc = api.user.queryUserPosts
        break
      case 'stars':
        apiFunc = api.user.queryUserStars
        break
      case 'follows':
        apiFunc = api.user.queryUserFollows
        break
      case 'followers':
        apiFunc = api.user.queryUserFollowers
        break
      default:
        return
    }
    const params = { pageIndex, pageSize: 20, sort: 'ctime', uid }
    const re = await apiFunc(params)
    if(re.stat === 'ok') {
      re.data?.posts && setPosts(re.data?.posts)
      re.data?.users && setUsers(re.data?.users)
      re.data?.total && setTotal(re.data?.total)
    } else {
      message.error('数据请求失败！')
    }
  }

  useEffect(() => {
    refreshData()
  }, [pageIndex])

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        {/* 显示用户信息与编辑 */}
        <div className={styles.info}>
          <div className={styles.avatar}>
            {
              !changeAvatarVisiable 
              && <Avatar imgSrc={avatar} type='circle' style={{width: '180px', height: '180px', display: 'inline-block'}}></Avatar>
              || <Uploader
                upload={uploadImage}
                type='avatar'
                initialValue={user.avatar}
                style={{width: '180px', height: '180px', display: 'inline-block'}}
              />
            }
            {
              uuser.uid === uid && (
                !changeAvatarVisiable && <div className={styles.abtn} onClick={() => {
                  // 上传
                  setChangeAvatarVisiable(true)}
                }><IconEdit /></div>
                ||
                <div className={styles.abtn} 
                  title='点击更换头像'
                  onClick={() => {
                  // 上传
                    handleAvatarChange()
                  }
                }><IconSub /></div>
              )
            }
          </div>
          <div className={styles.name}>
            <span style={{fontSize: '26px', fontWeight: 700, display: 'block'}}>{user.nickname}</span>
            <span style={{fontSize: '20px', fontWeight: 300, display: 'block'}}>{user.uid}</span>
          </div>
          <div className={styles.btns}>
            {
              uuser.uid === uid && <Fragment>
                <Button size='max'
                  onClick={() => {
                    setEditInfoVisiable(true)
                  }}
                  >编辑信息</Button>
                <Button size='max' type='primary'
                  onClick={() => {
                    setChangePwdVisiable(true)
                  }}
                  >修改密码</Button>
              </Fragment>
              ||
              <Button size='max'>关注</Button>
            }
          </div>
        </div>
        <Dialog
          visible={editInfoVisiable}
          title='用户信息修改'
          onClose={() => {
            setEditInfoVisiable(false)
          }}
          width={400}
        >
          <form onSubmit={e => {
            e.preventDefault()
            handleNicknameChange()
            setEditInfoVisiable(false)
          }}>
            <FormItem label='昵称：'>
              <Input type='text' value={nickname} onChange={e => setNickname(e.target.value)} />
            </FormItem>
            <FormItem style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button style={{marginRight: '8px'}} onClick={() => setEditInfoVisiable(false)}>取消</Button>
              <Button func='submit' type='primary'>确定</Button>
            </FormItem>
          </form>
        </Dialog>

        <Dialog
          visible={changePwdVisiable}
          title='密码修改'
          onClose={() => {
            setChangePwdVisiable(false)
          }}
          width={400}
        >
          <form onSubmit={e => {
            e.preventDefault()
            handlePasswdChange(opwd, npwd, cpwd)
          }}>
            <FormItem label='原密码'>
              <Input type='password' value={opwd} onChange={e => setOPwd(e.target.value) } />
            </FormItem>
            <FormItem label='新密码'>
              <Input type='password' value={npwd} onChange={e => setNPwd(e.target.value) } />
            </FormItem>
            <FormItem label='确认密码'>
              <Input type='password' value={cpwd} onChange={e => setCPwd(e.target.value) } />
            </FormItem>
            <FormItem style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button style={{marginRight: '8px'}} onClick={() => setChangePwdVisiable(false)}>取消</Button>
              <Button func='submit' type='primary'>确定</Button>
            </FormItem>
          </form>
        </Dialog>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tab_container}>
          <Tab
            tabs={[
              {
                name: '',
                content: <Link href={`/space/${uid}`}>
                  <a>概览</a>
                </Link>,
              },
              {
                name: 'posts',
                content: <Link href={`/space/${uid}?tab=posts`} passHref>
                  <a>博客</a>
                </Link>,
              },
              {
                name: 'stars',
                content: <Link href={`/space/${uid}?tab=stars`} passHref>
                  <a>收藏</a>
                </Link>,
              },
              {
                name: 'follows',
                content: <Link href={`/space/${uid}?tab=follows`} passHref>
                  <a>订阅</a>
                </Link>,
              },
              {
                name: 'followers',
                content: <Link href={`/space/${uid}?tab=followers`} passHref>
                  <a>粉丝</a>
                </Link>,
              }
            ]} 
            currentTab={tab}
          ></Tab>
        </div>
        {/* <div className={styles.main}></div> */}
        {
          getTabContent()
        }
        <div className={styles.pagi}>
          <Pagination current={pageIndex} total={total} pageSize={pageSize} onChange={(idx) => {
            console.log(idx)
            setPageIndex(idx)
            document.documentElement.scrollTop = 0
          }} />
        </div>
      </div>
    </div>
  )
}

// 概述
const Profile = ({data}) => {
  return <div>{data}</div>
}

// 博客
const Posts = ({ posts }: {
  posts: PostInfo[]
}) => {
  return (
    <div className={styles.posts}>
      {
        posts.map((post, idx) => <PostItem post={post} key={idx} />)
      }
    </div>
  )
}

// 我的收藏
const Stars = ({ stars }: {
  stars: PostInfo[]
}) => {
  return (
    <div className={styles.stars}>
      {
        stars.map((star, idx) => <PostItem post={star} key={idx} />)
      }
    </div>
  )
}

// 我的关注
const Follows = ({ follows }: {
  follows: UserInfo[]
}) => {
  return (
    <div className={styles.follows}>
      {
        follows.map((follow, idx) => <UserItem user={follow} key={idx} />)
      }
    </div>
  )
}

// 我的粉丝
const Followers = ({ followers }: {
  followers: UserInfo[]
}) => {
  return (
    <div className={styles.followers}>
      {
        followers.map((follower, idx) => <UserItem user={follower} key={idx} />)
      }
    </div>
  )
}

const mapStateToProps = ({ userStore }: { userStore: UserStore }) => {
  return {
    uuser: {
      uid: userStore?.uid,
      nickname: userStore?.nickname
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateReduxUserInfo: (data: { avatar: string, nickname: string }) => dispatch(updateInfo(data)),
    updateReduxUserNickname: (data: string) => dispatch(updateNickname(data)),
    updateReduxUserAvatar: (data: string) => dispatch(updateAvatar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Space)