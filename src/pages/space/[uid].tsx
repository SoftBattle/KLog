import React, { useEffect, useState } from 'react'
import { withRouter, NextRouter } from 'next/router'

const Space = ({ router }: {
  router: NextRouter
}) => {
  useEffect(() => {
    // router.query 中存有 参数, 分别为 uid 与 tab
    console.log(router.query)
  })
  return <div>Spacem of {router.query.uid}</div>
}

export default withRouter(Space)