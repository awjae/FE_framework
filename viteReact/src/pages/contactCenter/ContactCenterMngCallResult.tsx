import React, { Suspense, useDebugValue, useEffect, useState } from 'react'
import styles from '../../styles/contactCenter.module.css'
import commonStyles from '../../styles/common.module.css'
import { useQuery } from 'react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getJobResults } from '../../api/contactCenter'
import Breadcrumb from '../../components/common/Breadcrumb'
import Header from '../../components/common/Header'
import Table from '../../components/common/Table'
import { PageObjType } from '../../types'
import PageNation from '../../components/common/Pagination'
import Popup from '../../components/common/Popup'

function ContactCenterMng() {
  const { data: job } = useLocation().state
  const [callList, setCallList] = useState([])
  const navigate = useNavigate()
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [pageObj, setPageObj] = useState<PageObjType>({
    pageNo: 0,
    pageSize: 20,
    totalPage: 0,
  })

  const { data: getJobResultsData } = useQuery(['getJobResults', pageObj.pageNo], () => getJobResults('AICCSample', job.jobId, pageObj), {
    onSuccess(data) {
      setPageObj((prevData) => ({...prevData, totalPage: data.data.totalPages}))
    },
  })

  const handleCallclick = (row: any) => {
    // navigate(`${row.jobId}`, { state: { row: row }})
  }

  const rules = ({ key, value, item}: { key: string; value: string; item?: any}) => { 
    if (key === 'callStartDateTime' || key === 'callEndDateTime') {
      return value.slice(0,10).replaceAll('-','.')
    }
    if (key === 'taskResults.mdn') {
      return item.taskResults[0].mdn
    }
    if (key === 'taskResults.callId') {
      return item.taskResults[0].callId
    }
    if (key === 'taskResults.acpCallResult') {
      return item.taskResults[0].acpCallResult
    }

    return value
  }

  const handlePageNation = (index: number) => {
    setPageObj(prevState => ({...prevState, pageNo: index}))
  }

  const handleDetail = () => {
    setIsShowDetail(true)
  }

  useEffect(() => {
    if (getJobResultsData) {
      setCallList(getJobResultsData.data.content)
    }
  }, [getJobResultsData])

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈', '컨택센터 관리', job.name, '통화 결과']}></Breadcrumb>
        <h1 className={commonStyles.breadcrumbTitle}>통화 결과</h1>
        <article className={commonStyles.article}>
          <div>
            <h2>통화 결과</h2>
          </div>
          <div>
            조회 조건 영역
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Table 
              list={callList} 
              handleClick={handleCallclick} 
              columns={['taskResults.mdn', 'taskResults.callId', 'callStartDateTime', 'callEndDateTime', 'overallTaskResult', 'taskResults.acpCallResult', 'buttonDetail']}
              buttonClick={handleDetail}
              customColumnsName={['전화번호', '대상자명(임시로 callId)', '통화시작시간', '통화종료시간', '발신상태', '통화결과', '']}
              colWidth={['15%','10%', '20%', '20%', '10%', '15%', '10%']}
              rules={rules}
            ></Table>
          </Suspense>
          { callList.length > 0 && (
            <PageNation pageObj={pageObj} handlePageNation={handlePageNation}></PageNation>
          )}
        </article>
        {isShowDetail && (
          <Popup type='transactionsTargets' title='통화 결과 상세' close={() => setIsShowDetail(false)}></Popup>
        )}
      </main>
    </>
  )
}

export default ContactCenterMng