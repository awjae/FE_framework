import React, { Suspense, useDebugValue, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { deleteCallPoint, deleteJobs, getJobCallPoints } from '../../api/contactCenter'
import CallPointMngPop from '../../components/CallPointMngPop'
import Breadcrumb from '../../components/common/Breadcrumb'
import FooterBtn from '../../components/common/FooterBtn'
import Header from '../../components/common/Header'
import Table from '../../components/common/Table'
import Toast from '../../utils/toast'
import commonStyles from '../../styles/common.module.css'
import styles from '../../styles/contactCenter.module.css'
import label_in from '../../assets/label_in_2x.webp'
import label_out from '../../assets/label_out_2x.webp'
import classNames from 'classnames'
import { PageObjType } from '../../types'
import { formatDate } from '../../utils/utils'

function ContactCenterMngDetail() {
  const { row: job } = useLocation().state
  const { jobId } = useParams()
  const [callPointMngPop, setCallPointMngPop] = useState(false)
  const navigate = useNavigate()
  const [callPointList, setCallPointList] = useState<any>([])
  const [pageObj, setPageObj] = useState<PageObjType>({
    pageNo: 0,
    pageSize: 20,
    totalPage: 0,
  })

  const { isLoading, data: jobCallPoints, refetch } = useQuery('getJobCallPoints', () => getJobCallPoints('AICCSample', job.jobId))

  const { mutate: deleteMutate } = useMutation('deleteJobs', (variables: {serviceId: string, jobId: string}) => deleteJobs(variables.serviceId, variables.jobId), {
    onSuccess(data, variables, context) {
      navigate(-1)
      new Toast('컨택센터 삭제 완료.').show()
    },
    onError(error, variables, context) {
      new Toast('컨택센터 삭제에 실패했습니다. 나중에 다시 시도해주세요.').show()
    },
  }) 
  const { mutateAsync: deleteCallpointMutate } = useMutation('deleteCallPoint', (variables: {serviceId: string, jobId: string, mdn: string}) => deleteCallPoint(variables.serviceId, variables.jobId, variables.mdn), {
    onSuccess(data, variables, context) {
      new Toast('수신번호 삭제 완료.').show()
    },
    onError(error, variables, context) {
      new Toast('수신번호 삭제에 실패했습니다. 나중에 다시 시도해주세요.').show()
    },
  }) 

  const handleDeleteBtn = () => {
    if (!jobId) return
    deleteMutate({ serviceId: 'AICCSample', jobId })
  }

  const handleCallPointDelete = async (row: any) => {
    if (!jobId) return
    await deleteCallpointMutate({ serviceId: 'AICCSample', jobId, mdn: row.mdn })
    await refetch()
  }

  const rules = ({ key, value}: { key: string; value: string;}) => {
    if (key === 'createdDateTime') {
      return formatDate(value)
    }
    return value
  }

  useEffect(() => {
    if (!isLoading && jobCallPoints) {
      setCallPointList(jobCallPoints.data.content)
    }
  }, [isLoading, jobCallPoints])

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈','컨택센터 관리', job.name]}></Breadcrumb>
        <div className={styles.info}>
          <h1>{ job.name }</h1>
          <span className={styles.inOutLabel}>
            { job.jobType === 'INBOUND_JOB' && (
              <img src={label_in} alt="" />
            )}
            { job.jobType === 'OUTBOUND_JOB' && (
              <img src={label_out} alt="" />
            )}
          </span>
        </div>
        <div className={styles.summary}>
          <div>
            <span>최초 생성</span>
            <span>2023.03.25  13:25:00</span>
          </div>
          <div>
            <span>최근 수정</span>
            <span>2023.04.24  18:25:00</span>
          </div>
        </div>
        <div className={styles.btnLayer}>
          { job.jobType === 'INBOUND_JOB' && (
            <Link to='/contactCenterMng/callResult' state={{ data: job }} className={commonStyles.button_2}>통화 결과 조회</Link>
          )}
          { job.jobType === 'OUTBOUND_JOB' && (
            <>
              <Link to='transactionsMng' state={{ data: job }} className={commonStyles.button_2}>캠페인 관리</Link>
              <Link to='transactionsTotalStatistics' className={commonStyles.button_2}>전체 캠페인 현황</Link>
            </>
          )}
          <Link to='/contactCenterMng/add' state={{ type: 'update', data: job }} className={commonStyles.button}>컨택센터 수정</Link>
        </div>
        <article className={commonStyles.article}>
          <div>
            <h2>컨택센터 정보</h2>
            <div className={classNames(styles.status, { [styles.active] : job.active})}>
              <span>상태</span>
              <span>{ job.active ? '활성화' : '비활성화' }</span>
            </div>
          </div>
          <div className={styles.view}>
            <div>
              <span>컨택센터 유형</span>
              <span>{ job.jobType }</span>
            </div>
            <div>
              <span>Call 유형</span>
              <span>{ job.callType }</span>
            </div>
            <div>
              <span>할당 채널 수</span>
              <span>{ job.channels }</span>
            </div>
          </div>
        </article>
        <article className={commonStyles.article}>
          <div>
            <h2>Callback URL 설정</h2>
          </div>
          <div className={styles.view}>
            <div>
              <span>Precall URL</span>
              <span>{ job.callbacks.forwards }</span>
            </div>
            <div>
              <span>Complete</span>
              <span>{ job.callbacks.external.complete }</span>
            </div>
          </div>
        </article>
        { job.jobType === 'INBOUND_JOB' && (
          <article className={commonStyles.article}>
            <div>
              <h2>수신번호 설정</h2>
              <button className={commonStyles.button} onClick={() => setCallPointMngPop(true)}>수신번호 관리</button>
            </div>
              { !isLoading && callPointList.length > 0 && (
                <Table 
                  columns={['index', 'mdn', 'createdDateTime', 'buttonDel']} 
                  customColumnsName={['No', '전화번호', '등록일시' , '']} 
                  list={callPointList} 
                  buttonClick={handleCallPointDelete}
                  rules={rules}
                ></Table>
              )}
              { !isLoading && callPointList.length === 0 && (
                <div className={commonStyles.noData}>수신번호 설정 후 컨택센터 활성화가 가능합니다.</div>
              )}
          </article>
        )}
        <FooterBtn type='detail' handleDeleteBtn={handleDeleteBtn}></FooterBtn>
      </main>
      { callPointMngPop && (
        <CallPointMngPop list={callPointList} serviceId={job.serviceId} jobId={job.jobId} close={() => setCallPointMngPop(false)} listRefetch={refetch}></CallPointMngPop>
      )}
    </>
  )
}

export default ContactCenterMngDetail