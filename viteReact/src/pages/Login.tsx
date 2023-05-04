import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'
import styles from '../styles/login.module.css'
import classNames from 'classnames'

function Login() {
  const setToken = useUserStore((state: any) => state.setToken)
  const navigate = useNavigate()
  const [id, setId] = useState('AICC_administor')
  const [isIdFocus, setIsIdFocus] = useState(false)
  const [pw, setPw] = useState('AICC_administor')
  const [isPwFocus, setIsPwFocus] = useState(false)

  const handlerLoginBtn = () => {
    setToken('로그인 후, 토큰 값')

    navigate('/')
  }

  const handleFocus = (type: string) => {
    if (type === 'id') {
      setIsIdFocus(true)
      return
    }
    if (type === 'pw') {
      setIsPwFocus(true)
      return
    }
  }

  const handleBlur = (type: string) => {
    if (type === 'id') {
      setIsIdFocus(false)
      return
    }
    if (type === 'pw') {
      setIsPwFocus(false)
      return
    }
  }

  return (
    <div className={styles.bg}>
      <main>
        <div className={styles.bi}>
          <h1>고객센터 운영 시스템</h1>
        </div>
        <div className={styles.loginForm}>
          <p>Welcome to Admin System</p>
          <label htmlFor="idInput" className={classNames(styles.label, { [styles.focus]: isIdFocus})}>
            <span className={styles.idInput}>ID</span>
            <input type="text" id="idInput" value={id} onChange={(e) => setId(e.target.value)} onFocus={() => handleFocus('id')} onBlur={() => handleBlur('id')}/>
          </label>
          <label htmlFor="pwInput" className={classNames(styles.label, { [styles.focus]: isPwFocus})}>
            <span className={styles.pwInput}>PW</span>
            <input type="password" id="pwInput" value={pw} onChange={(e) => setPw(e.target.value)} onFocus={() => handleFocus('pw')} onBlur={() => handleBlur('pw')}/>
          </label>
          <button onClick={handlerLoginBtn}>LOGIN</button>
        </div>
      </main>
    </div>
  )
}

export default Login