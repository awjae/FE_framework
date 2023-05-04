import React, { Suspense, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getTransactionsDetail, getTransactionsDetailStats, getTransactionsDetailTargets } from '../../../api/transactions'
import Breadcrumb from '../../../components/common/Breadcrumb'
import Header from '../../../components/common/Header'
import Table from '../../../components/common/Table'
import commonStyles from '../../../styles/common.module.css'
import styles from '../../../styles/contactCenter.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Popup from '../../../components/common/Popup'
import classNames from 'classnames'
import { PageObjType } from '../../../types'

function TransactionsMngDetail() {
  const { jobId, transactionId } = useParams() 
  const [callResult, setCallResult] = useState([])
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [stats, setStats] = useState<any>()
  const [transaction, setTransaction] = useState<any>()
  const navigate = useNavigate()
  const [pageObj, setPageObj] = useState<PageObjType>({
    pageNo: 0,
    pageSize: 20,
    totalPage: 0,
  })

  useQuery('getTransactionsDetail', () => getTransactionsDetail({ serviceId: 'AICCSample', jobId: (jobId||""), transactionId: (transactionId||""), pageObj }), {
    onSuccess(data) {
      setTransaction(data.data)
    },
  })
  useQuery('getTransactionsDetailTargets', () => getTransactionsDetailTargets({ serviceId: 'AICCSample', jobId: (jobId||""), transactionId: (transactionId||""), pageObj }), {
    onSuccess(data) {
      setCallResult(data.data.content)
    },
  })
  useQuery('getTransactionsDetailStats', () => getTransactionsDetailStats({ serviceId: 'AICCSample', jobId: (jobId||""), transactionId: (transactionId||""), pageObj }), {
    onSuccess(data) {
      setStats(data.data[0])
    },
  })

  const rules = ({ key, value}: { key: string; value: string;}) => {
    
    if (key === 'callStartDateTime' || key === 'callEndDateTime') {
      return value.slice(0,10).replaceAll('-','.')
    }

    return value
  }


  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈', '컨택센터 관리', (jobId||""),'캠페인 관리', '시니어 안부 확인']}></Breadcrumb>
        <div className={styles.info}>
          <h1>{transaction ? transaction.name : ""}</h1>
        </div>
        <div className={styles.twoCol}>
          <article className={commonStyles.article}>
            <div>
              <h2>캠페인 진행 상황</h2>
            </div>
            <div className={styles.chartWrapper}>
              <div>
                <CircularProgressbar 
                  value={stats ? Math.round(stats.resultStats.stats.SUCCESS.count/stats.resultStats.totalCount * 100) : 0} 
                  text={`${stats ? Math.round(stats.resultStats.stats.SUCCESS.count/stats.resultStats.totalCount * 100) : 0}%`}
                  styles={buildStyles({
                    textColor: '#3583f9',
                    pathColor: '#3583f9',
                    trailColor: '#d9d9d9',
                    textSize: '24px'
                  })} 
                />
              </div>
              <div>
                  <p>발신진행중</p>
                  <div>
                    <div>
                      <span>성공</span>
                      <span>{stats ? stats.resultStats.stats.SUCCESS.count : 0}명</span>
                    </div>
                    <div>
                      <span>전체</span>
                      <span>{stats ? stats.resultStats.totalCount : 0}명</span>
                    </div>
                  </div>
              </div>
            </div>
          </article>
          <article className={commonStyles.article}>
            <div>
              <h2>캠페인 정보</h2>
            </div>
            <div className={classNames(styles.view, styles.transactionInfo)}>
              <div>
                <span>발신번호</span>
                <span>{transaction ? transaction.billingMdn : ""}</span>
              </div>
              <div>
                <span>레터링 문구</span>
                <span>{transaction ? transaction.displayName : ""}</span>
              </div>
            </div>
          </article>
        </div>
        <article className={commonStyles.article}>
          <div>
            <h2>통화 결과</h2>
            <span>
              발신 진행 중입니다. 잠시 후 화면을 새로고침 해 주세요.
            </span>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Table 
              list={callResult} 
              handleClick={() => setIsShowDetail(true)}
              columns={['teParams', 'taskId', 'callStartDateTime', 'callEndDateTime', 'status', 'status', 'buttonDetail']}
              customColumnsName={['전화번호', '대상자명', '통화시작시간', '통화종료시간', '발신상태', '통화결과', '']}
              colWidth={['15%','15%', '15%', '15%', '10%', '20%', '10%']}
              rules={rules}
              buttonClick={() => {}}
            ></Table>
          </Suspense>
        </article>
        <div className={commonStyles.footerBtn} style={{ textAlign: 'center' }}>
          <button onClick={() => navigate(-1)}>목록</button>
        </div>
        {isShowDetail && (
          <Popup type='transactionsTargets' title='통화 결과 상세' close={() => setIsShowDetail(false)}></Popup>
        )}
      </main>
    </>
  )
}

export default TransactionsMngDetail