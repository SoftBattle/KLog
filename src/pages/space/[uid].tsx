import React, { useEffect, useState } from 'react'
import { withRouter, NextRouter } from 'next/router'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import styles from './index.module.scss'
import Tab from '../../components/Tab'
import { UserInfo } from '../../interface'
import api from '../../services'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { uid } = ctx.params
  const tab = ctx.query?.tab || ''
  let user = {}
  let data: any = null
  // 获取 user 
  const userRe = await api.user.getUserInfo({uid: uid as string})
  console.log(userRe.data)
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
      break // profile的数据
  }
  // 根据 tab 获取初始数据
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

const Space = ({ uid, tab }: {
  uid: string
  tab: string
}) => {
  useEffect(() => {
    // router.query 中存有 参数, 分别为 uid 与 tab
    console.log(uid, tab)
  })
  // const [currentTab, setCurrentTab] = useState<TabType>()

  const [avatar, setAvatar] = useState('')
  const [nickname, setNickname] = useState('')
  const [opwd, setOPwd] = useState('')
  const [npwd, setNPwd] = useState('')
  const [editInfoVisiable, setEditInfoVisiable] = useState(false)
  const [changePwdVisiable, setChangePwdVisiable] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        {/* 显示用户信息与编辑 */}
      </div>
      <div className={styles.tabs}>
        <div className={styles.tab_container}>
          <Tab
            tabs={[
              {
                name: '',
                content: <Link href={`/space/${uid}`}>
                  <div>概览</div>
                </Link>,
                // onClick: async () => {
                //   setCurrentTab('Profile')
                //   document.documentElement.scrollTop = 0
                // }
              },
              {
                name: 'posts',
                content: <Link href={`/space/${uid}?tab=posts`}>
                  <div>博客</div>
                </Link>,
                // onClick: async () => {
                //   setCurrentTab('Posts')
                //   document.documentElement.scrollTop = 0
                // }
              },
              {
                name: 'stars',
                content: <Link href={`/space/${uid}?tab=stars`}>
                  <div>收藏</div>
                </Link>,
                // onClick: async () => {
                //   // setCurrentTab('Stars')
                //   document.documentElement.scrollTop = 0
                // }
              },
              {
                name: 'follows',
                content: <Link href={`/space/${uid}?tab=follows`}>
                  <div>订阅</div>
                </Link>,
                // onClick: async () => {
                //   // setCurrentTab('Follows')
                //   document.documentElement.scrollTop = 0
                // }
              },
              {
                name: 'followers',
                content: <Link href={`/space/${uid}?tab=followers`}>
                  <div>粉丝</div>
                </Link>,
                // onClick: async () => {
                //   setCurrentTab('Followers')
                //   document.documentElement.scrollTop = 0
                // }
              }
            ]} 
            currentTab={tab}
          ></Tab>
        </div>
        <div className={styles.main}>
          {/* 显示内容 */}
        </div>
      </div>
    </div>
  )
}

// 概述
const Profile = () => {}
// 博客
const Posts = () => {}
// 我的收藏
const Stars = () => {}
// 我的关注
const Follows = () => {}
// 我的粉丝
const Followers = () => {}

export default Space