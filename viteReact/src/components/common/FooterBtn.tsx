import React from 'react'
import commonStyles from '../../styles/common.module.css'
import { Link, useNavigate } from 'react-router-dom';

function FooterBtn({ type, handleAddBtn, handleDeleteBtn }: { type: string; handleAddBtn?: Function; handleDeleteBtn?: Function }) {
  const navigate = useNavigate()

  const handleCancelBtn = () => {
    navigate(-1)
  }
  return (
    <div className={commonStyles.footerBtn}>
      { type === 'add' && handleAddBtn && (
        <div className={commonStyles.add}>
          <button onClick={handleCancelBtn}>취소</button>
          <button onClick={() => handleAddBtn()}>저장</button>
        </div>
      )}
      { type === 'detail' && handleDeleteBtn && (
        <div className={commonStyles.detail}>
          <button onClick={() => navigate('/contactCenterMng')}>목록</button>
          <button onClick={() => handleDeleteBtn()}>삭제</button>
        </div>
      )}
    </div>
  )
}

export default FooterBtn