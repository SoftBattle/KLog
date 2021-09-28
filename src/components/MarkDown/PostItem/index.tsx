import React from "react"
import styles from './index.module.scss'
import { PostInfo } from '../../../interface'
import Link from 'next/link'

export default function PostItem({ post }: {
  post: PostInfo
}) {
  
  return (
    <div 
      className={styles.post}
      onClick={(e: React.MouseEvent) => {
        // 点击，进入文章详情页
      }}
      >

      <div className={styles.banner}>
        {
          post.banners[0] && <img src={post.banners[0]} alt="" /> || <img src='/md/markdowm.png' alt="" />
        }
      </div>

      <div className={styles.infos}>
        <div className={styles.header}>
          {/* 依次存放nickname, 时间， tags */}
          <Link href={`/space/${post.author.uid}`} passHref>
            <a className={styles.user}>{post.author.nickname}</a>
          </Link>
          <div className={styles.divider}></div>
          <div className={styles.time}>{post.ctime}</div>
          <div className={styles.divider}></div>
          <div className={styles.tags}>
            {post.tags.join('·')}
          </div>
        </div>

        <div className={styles.title}>
          <Link href={`/post/${post.pid}`} passHref>
            <a>{post.title}</a>
          </Link>
        </div>

        <div className={styles.subTitle}>
          <Link href={`/post/${post.pid}`} passHref>
            <a>{post.subTitle}</a>
          </Link>
        </div>

        <div className={styles.footer}>
          <div className={styles.item}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4053" width="16" height="16"><path d="M610.944 461.968C648.384 536.608 593.6 624 510.88 624c-61.76 0-111.44-50.24-111.44-112S448 400 512 400v-80c-112 0-192.56 86.128-192.56 192s85.568 192 191.44 192 192-86.128 192-192c0-30.848-7.472-59.92-20.464-85.76l-71.472 35.728zM510.88 176c-240.64 0-448 225.376-448 336 0 110.64 207.36 336 448 336s448.016-225.36 448.016-336c0-110.624-207.376-336-448-336z m0 592c-207.104 0-368-204.192-368-256 0-51.808 160.896-256 368-256s368 204.192 368 256c0 51.808-160.896 256-368 256z" fill="#565D64" p-id="4054"></path></svg>
            <span>{post.views}</span>
          </div>
          <div className={styles.item}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2385" width="16" height="16"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81z m636.4-353l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5c5.2-18.9 22.5-32.2 42.2-32.3 7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z" p-id="2386"></path></svg>
          </div>
          <div className={styles.item}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5126" width="16" height="16"><path d="M853.333333 768c35.413333 0 64-20.650667 64-55.978667V170.581333A63.978667 63.978667 0 0 0 853.333333 106.666667H170.666667C135.253333 106.666667 106.666667 135.253333 106.666667 170.581333v541.44C106.666667 747.285333 135.338667 768 170.666667 768h201.173333l110.016 117.44a42.752 42.752 0 0 0 60.586667 0.042667L651.904 768H853.333333z m-219.029333-42.666667h-6.250667l-115.797333 129.962667c-0.106667 0.106667-116.010667-129.962667-116.010667-129.962667H170.666667c-11.776 0-21.333333-1.621333-21.333334-13.312V170.581333A21.205333 21.205333 0 0 1 170.666667 149.333333h682.666666c11.776 0 21.333333 9.536 21.333334 21.248v541.44c0 11.754667-9.472 13.312-21.333334 13.312H634.304zM341.333333 490.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z" fill="#3D3D3D" p-id="5127"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}