import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb'
import Header from '../components/common/Header'
import { useUserStore } from '../store/userStore'
import { isLogin } from '../utils/utils'
import styles from '../styles/common.module.css'

function Main() {
  const token = useUserStore((state: any) => state.token)
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      navigate('/contactCenterMng');
    }

  }, [])

  return (
    <>
      <Header></Header>
      <Breadcrumb depths={['홈']}></Breadcrumb>
      <main className={styles.main}>
        <Link to="/contactCenterMng">컨텍센터 목록</Link>
      </main>
    </>
  )
}

export default Main