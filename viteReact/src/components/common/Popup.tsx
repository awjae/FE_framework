import React, { useEffect } from 'react'
import commonStyles from '../../styles/common.module.css'
import dummy_img from '../../assets/dummy_img_2x.webp'

function Popup({ type, title, close }: { type: string; title: string; close: Function; }) {

  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <section className={commonStyles.popup}>
      <div className={commonStyles.dimmed} onClick={() => close()}></div>
      <div className={commonStyles.contents}>
      <div className={commonStyles.close} onClick={() => close()}>닫기</div>
        <h2>{title}</h2>
        <div>
          { type === 'transactionsTargets' && (
            <img src={dummy_img} alt="" style={{ width: 696, height: 501 }}/>
          )}  
        </div>
      </div>
    </section>
  )
}

export default Popup