import React, { Fragment, useState } from 'react'
import Tab from '../components/Tab'
import { PostItem } from '../components/MarkDown'
import styles from './index.module.scss'

type TabType = 'Latest' | 'Popular'

const Index = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('Latest')
  const [posts, setPosts] = useState([])

  const getPostsList = () => posts.map((post, index) => {
    return <div>文章</div>
  })

  return (
    <Fragment>
      <div className={styles.show}>
        {/* 欢迎展示区 */}
        <div className={styles.slogan}>
          <span>We are </span>
          <span>talking here...</span>
        </div>
      </div>

      <div className={styles.page_tab}>
        {/* tab菜单区 */}
        <Tab 
          tabs={[
            {
              name: 'Latest',
              content: <div>最新</div>,
              onClick: () => {
                setCurrentTab('Latest')
              }
            },
            {
              name: 'Popular',
              content: <div>最热</div>,
              onClick: () => {
                setCurrentTab('Popular')
              }
            }
          ]} 
          currentTab={currentTab}
          ></Tab>
      </div>

      <div className={styles.posts}>
        {/* post显示区 */}
        {
          getPostsList()
        }
      </div>
    </Fragment>
  )
}

export default Index