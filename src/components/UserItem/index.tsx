import { useState, useEffect } from 'react'
import { UserInfo } from "../../interface"
import styles from './index.module.scss'
import Avatar from "../Avatar"
import Button from "../Button"
import Link from "next/link"
import api from '../../services'
import message from '../Message'

const UserItem = ({ user, flag=false }: {
  user: UserInfo
  flag?: boolean // 显示关注按钮
}) => {
  const [follow, setFollow] = useState(user.follow)
  useEffect(() => {
    setFollow(user.follow)
  })
  const followOrUnfollow = async () => {
    if(follow) {
      // 执行取关操作
      const re = await api.user.unfollowAuthor({uid: user.uid})
      if(re.stat === 'ok') {
        message.success('取关成功！')
        setFollow(false)
      } else {
        message.error('取关失败！')
      }
    } else {
      // 执行关注操作
      const re = await api.user.followAuthor({uid: user.uid})
      if(re.stat === 'ok') {
        message.success('关注成功')
        setFollow(true)
      } else {
        message.error('关注失败')
      }
    }
  }

  return <div className={styles.user}>
    <Link href={`/space/${user.uid}`}>
      <Avatar imgSrc={user.avatar} type='circle' />
    </Link>
    <div className={styles.info}>
      <Link href={`/space/${user.uid}`}>
        <span>{user.nickname}</span>
      </Link>
      <Link href={`/space/${user.uid}`}>
        <span>{user.uid}</span>
      </Link>
    </div>
    <div className={styles.btn}>
      {
        follow && <Button style={{width: '100%'}} onClick={() => followOrUnfollow()}>取消关注</Button> || <Button style={{width: '100%'}} onClick={() => followOrUnfollow()} type='primary' >关注</Button>
      }
    </div>
  </div>
}

export default UserItem