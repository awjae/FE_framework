import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumb from '../../../components/common/Breadcrumb'
import Header from '../../../components/common/Header'
import commonStyles from '../../../styles/common.module.css'
import styles from '../../../styles/contactCenter.module.css'
import dummy_img_statistics_1 from '../../../assets/dummy_img_statistics_1.svg'
import dummy_img_statistics_2 from '../../../assets/dummy_img_statistics_2.svg'


function TransactionsTotalStatistics() {
  const { jobId = '' } = useParams() 
  const navigate = useNavigate()

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈', '컨택센터 관리', jobId,'캠페인 전체 통계']}></Breadcrumb>
        <h1 className={commonStyles.breadcrumbTitle}>캠페인 전체 통계</h1>
        <img src={dummy_img_statistics_1} alt="" style={{ margin: '10px 0 20px', }}/>
        <img src={dummy_img_statistics_2} alt="" />
      </main>
      <div className={commonStyles.footerBtn} style={{ textAlign: 'center', marginTop: 14}}>
        <button onClick={() => navigate(-1)}>목록</button>
      </div>
    </>
  )
}

export default TransactionsTotalStatistics