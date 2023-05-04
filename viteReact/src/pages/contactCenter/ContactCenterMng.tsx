import React, { Suspense, useDebugValue, useEffect, useState } from 'react'
import styles from '../../styles/contactCenter.module.css'
import commonStyles from '../../styles/common.module.css'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { getJobs } from '../../api/contactCenter'
import Breadcrumb from '../../components/common/Breadcrumb'
import Header from '../../components/common/Header'
import Table from '../../components/common/Table'
import { PageObjType } from '../../types'
import PageNation from '../../components/common/Pagination'

function ContactCenterMng() {
  const [jobList, setJobList] = useState([])
  const navigate = useNavigate()
  const [pageObj, setPageObj] = useState<PageObjType>({
    pageNo: 0,
    pageSize: 20,
    totalPage: 0,
  })

  const { data: getJobsData } = useQuery(['getJobs', pageObj.pageNo], () => getJobs('AICCSample', pageObj), {
    onSuccess(data) {
      setPageObj((prevData) => ({...prevData, totalPage: data.data.totalPages}))
    },
  })

  const handleJobclick = (row: any) => {
    navigate(`${row.jobId}`, { state: { row: row }})
  }

  const rules = ({ key, value}: { key: string; value: string;}) => {
    if (key === 'jobType') {
      if (value === 'INBOUND_JOB') {
        return 'IB'
      }
      return 'OB'
    }
    
    if (key === 'createdDateTime' || key === 'modifiedDateTime') {
      return value.slice(0,10).replaceAll('-','.')
    }

    if (key === 'active') {
      return value ? `활성화` : `비활성화`
    }

    return value
  }

  const handlePageNation = (index: number) => {
    setPageObj(prevState => ({...prevState, pageNo: index}))
  }

  useEffect(() => {
    if (getJobsData) {
      setJobList(getJobsData.data.content)
    }
  }, [getJobsData])

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈', '컨택센터 관리']}></Breadcrumb>
        <h1 className={commonStyles.breadcrumbTitle}>컨택센터 관리</h1>
        <div className={styles.info}>
          <div>컨택센터는 AI Call Platform에서 사용하는 콜 수신/발신 그룹의 단위입니다.<br></br>컨택센터 별로 업무 그룹을 분리하여 채널을 할당할 수 있습니다.</div>
          <Link to={'add'} className={commonStyles.button}>+ 새 컨텍센터</Link>
        </div>
        <article className={commonStyles.article}>
          <div>
            <h2>컨택센터 목록</h2>
            <span>총 {jobList.length}개</span>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Table 
              list={jobList} 
              handleClick={handleJobclick} 
              columns={['jobType', 'name', 'callType', 'channels', 'createdDateTime', 'modifiedDateTime', 'active']}
              customColumnsName={['유형', '컨택센터 이름', 'Call 유형', '할당 채널 수', '등록일', '최근 수정일', '상태']}
              colWidth={['5%','30%', '15%', '10%', '15%', '15%', '10%']}
              rules={rules}
            ></Table>
          </Suspense>
          { jobList.length > 0 && (
            <PageNation pageObj={pageObj} handlePageNation={handlePageNation}></PageNation>
          )}
        </article>
      </main>
    </>
  )
}

export default ContactCenterMng