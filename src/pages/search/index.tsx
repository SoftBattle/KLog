import react, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import styles from './index.module.scss'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { keyword } = ctx.query
  return {
    props: {
      keyword
    }
  }
}

const Search = ({ keyword }) => {
  return (
    <div className={styles.wrapper}>
      search {keyword}
    </div>
  )
}

export default Search