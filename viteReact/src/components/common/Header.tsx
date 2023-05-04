import styles from '../../styles/header.module.css'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store/userStore'

function header() {
  const navigate = useNavigate()
  const resetToken = useUserStore((state: any) => state.resetToken)

  const handleLogoutBtn = () => {
    resetToken()
    navigate('/login')
  }

  return (
    <div className={styles.bg}> 
      <div className={styles.headerWrapper}>
        <div onClick={() => navigate('/')}>
          <span className={styles.bi}></span>
          <span className={styles.biTitle}>컨택센터</span>
        </div>
        <div>
          <span className={styles.webcomeText}>김유리님, 환영합니다.</span>
          <span className={styles.profile}></span>
          <button onClick={handleLogoutBtn}>로그아웃</button>
        </div>
      </div>
    </div>
  )
}

export default header