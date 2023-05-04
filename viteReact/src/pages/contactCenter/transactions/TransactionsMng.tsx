import React, { Suspense, useDebugValue, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getTransactions } from '../../../api/transactions'
import Breadcrumb from '../../../components/common/Breadcrumb'
import Header from '../../../components/common/Header'
import Table from '../../../components/common/Table'
import commonStyles from '../../../styles/common.module.css'
import styles from '../../../styles/contactCenter.module.css'
import { PageObjType } from '../../../types'
import PageNation from '../../../components/common/Pagination'

function TransactionsMng() {
  const navigate = useNavigate()
  const { data } = useLocation().state || {}
  const [transactionsList, setTransactionsList] = useState([])
  const [pageObj, setPageObj] = useState<PageObjType>({
    pageNo: 0,
    pageSize: 20,
    totalPage: 0,
  })

  useQuery('getTransactions', () => getTransactions({ serviceId: 'AICCSample', jobId: data.jobId, pageObj }), {
    onSuccess(data) {
      //TODO : 페이지 네이션 필요
      setTransactionsList(data.data.content)
      setPageObj((prevData) => ({...prevData, totalPage: data.data.totalPages}))
    },
  })

  const handleTransactionclick = (row: any) => {
    console.log(row)
    navigate(row.transactionId)
  }

  const rules = ({ key, value}: { key: string; value: string;}) => {
    if (key === 'status') {
      //TODO : 코드값 확인 필요
      if (value === 'READY') {
        return '발신진행중'
      }
      return '발신진행중'
    }
    
    if (key === 'createdDateTime' || key === 'modifiedDateTime') {
      return value.slice(0,10).replaceAll('-','.')
    }

    return value
  }

  const handlePageNation = (index: number) => {
    setPageObj(prevState => ({...prevState, pageNo: index}))
  }

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈', '컨택센터 관리', data.name,'캠페인 관리']}></Breadcrumb>
        <div className={styles.transactionsMngTitle}>
          <h1 className={commonStyles.breadcrumbTitle}>캠페인 관리</h1>
          <Link to={'add'} state={{ jobId: data.jobId, data: data }} className={commonStyles.button}>+ 새 캠페인</Link>
        </div>
        <article className={commonStyles.article}>
          <div>
            <h2>캠페인 목록</h2>
            <span>총 {transactionsList.length}개</span>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Table 
              list={transactionsList} 
              handleClick={handleTransactionclick} 
              columns={['transactionId', 'name', 'displayName', 'caller', 'status', 'createdDateTime']}
              customColumnsName={['캠페인 ID', '캠페인명', '연결 시나리오', '대상자', '발신 상태', '등록일']}
              colWidth={['15%','15%', '25%', '15%', '15%', '15%']}
              rules={rules}
            ></Table>
          </Suspense>
          <PageNation pageObj={pageObj} handlePageNation={handlePageNation}></PageNation>
        </article>
      </main>
    </>
  )
}

export default TransactionsMng