import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import commonStyles from '../../../styles/common.module.css'
import styles from '../../../styles/contactCenter.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../../components/common/Breadcrumb'
import FooterBtn from '../../../components/common/FooterBtn'
import Header from '../../../components/common/Header'
import InputWithHint from '../../../components/common/InputWithHint'
import SelectWithHint from '../../../components/common/SelectWithHint'
import Toast from '../../../utils/toast'
import classNames from 'classnames'
import delIcon from '../../../assets/btn_del_2x.webp'
import { postTransactions } from '../../../api/transactions'
import { useMutation } from 'react-query'

function TransactionsMngAdd() {
  const { jobId, data: jobData } = useLocation().state || {}
  const [transactionsName, setTransactionsName] = useState('')
  const [isShowTransactionsNameHint, setIsShowTransactionsNameHint] = useState(false)
  const [callMdn, setCallMdn] = useState('')
  const [lettering, setLettering] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [scenarioType, setScenarioType] = useState('')
  const [targetList, setTargetList] = useState<any[]>([])
  const navigate = useNavigate()

  const { mutate: postMutate } = useMutation('postTransactions', (variables: {serviceId: string, jobId: string, options: any}) => postTransactions(variables.serviceId, variables.jobId, variables.options), {
    onSuccess(data, variables, context) {
      navigate(`/contactCenterMng/${jobId}/transactionsMng`, { state: { data: jobData }} )
      new Toast('캠페인 생성 완료.').show()
    },
    onError(error, variables, context) {
      new Toast('캠페인 생성에 실패했습니다. 나중에 다시 시도해주세요.').show()
    },
  }) 

  const handleAddBtn = () => {
    if (!transactionsName) {
      setIsShowTransactionsNameHint(true)
      return
    }
    const options = {
      transactionsName,
      callMdn,
      lettering,
      targetList: targetList.map(target => {
        return {
          "bizUid": "user",
          "extParams": {
            scenarioType : "선택된봇시나리오"
          },
          "mdns": [
            target.mdn
          ],
          "rateLimitTargetKey": "string",
          "taskInfo": {
            info: target.info
          }
        }
      })
    }
    postMutate({ serviceId: "AICCSample", jobId, options })
  }

  const handleTargetAdd = () => {
    setTargetList(prevData => [...prevData, {
      id: 'user',
      mdn: '',
      info: '',
      extParams: {
        scenarioType : "선택된봇시나리오"
      },
    }])
  }
  
  const handleTargetDelete = (target: any) => {

    console.log(target)
  }

  const handleMdnChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    setTargetList(prevState =>
      prevState.map((input, i) => (i === index ? { ...input, mdn: value } : input))
    )
  } 
  const handleInfoChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    setTargetList(prevState =>
      prevState.map((input, i) => (i === index ? { ...input, info: value } : input))
    )
  } 

  useEffect(() => {
    if (transactionsName) {
      setIsShowTransactionsNameHint(false)
    }
  }, [transactionsName])

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈','컨택센터 관리', jobId, '캠페인 관리', '새 캠페인']}></Breadcrumb>
        <h1>새로운 캠페인 만들기</h1>
        <label htmlFor='contactName' className={classNames(styles.titleInput, { [styles.error]: isShowTransactionsNameHint })}>
          <input ref={inputRef} type="text" id='transactionsName' placeholder='새로운 캠페인 이름을 입력해주세요.' value={transactionsName} onChange={(e) => setTransactionsName(e.target.value)}/>
          { isShowTransactionsNameHint && (
            <span className={commonStyles.error}>필수 항목입니다.</span>
          )}
        </label>
        <div className={commonStyles.article}>
            <div className={classNames(styles.switchWrapper, commonStyles.selectWidthHint)}>
              <div
                style={{
                  paddingLeft: '0'
                }}
              >봇 시나리오 선택</div>
              <div
                style={{
                  width: 'calc(100% - 184px)',
                }}>
                <select 
                  className={classNames({ [commonStyles.placeholder]: scenarioType === ""})}
                  value={scenarioType} 
                  onChange={(e) => setScenarioType(e.target.value)} 
                  >
                  <option className='placeholder' value="" disabled>콜봇 설정도구에서 만든 봇 시나리오 중 캠페인에 이용할 시나리오를 선택해주세요.</option>
                </select>
              </div>
            </div>
          </div>
        <article className={commonStyles.article}>
          <div>
            <h2>발신 설정</h2>
          </div>
          <div>
            <InputWithHint 
              label='발신 번호'
              type='text'
              placeholder='대상자에게 노출할 발신 번호를 입력해주세요.'
              value={callMdn}
              setValue={setCallMdn}
            ></InputWithHint>
            <InputWithHint 
              label='레터링 문구'
              type='text'
              placeholder='대상자에게 노출되는 레터링 문구입니다. 10자 이내로 작성해주세요.'
              value={lettering}
              setValue={setLettering}
            ></InputWithHint>
          </div>
        </article>
        <article className={commonStyles.article}>
          <div>
            <h2>대상자 등록</h2>
            <button className={commonStyles.button} onClick={handleTargetAdd}>+ 추가</button>
          </div>
          <table className={classNames(commonStyles.table, styles.targetsTable)}>
            <colgroup>
              <col width='10%'/>
              <col width='15%'/>
              <col width='15%'/>
              <col width='60%'/>
            </colgroup>
            <thead>
              <tr>
                <td></td>
                <td>대상자 ID</td>
                <td>전화번호</td>
                <td>대상자 정보 입력</td>
              </tr>
            </thead>
            <tbody>
              { targetList.map((target, idx) => (
                <tr key={idx}>
                  <td>
                    <button className={styles.transactionTargetDelBtn} onClick={() => handleTargetDelete(target)}></button>
                  </td>
                  <td>{target.id+'_'+idx}</td>
                  <td>
                    <input type="text" value={target.mdn} onChange={event => handleMdnChange(event, idx)}/>
                  </td>
                  <td>
                    <input type="text" placeholder='대상자 정보를 입력해주세요.' value={target.info} onChange={event => handleInfoChange(event, idx)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <FooterBtn type='add' handleAddBtn={handleAddBtn}></FooterBtn>
      </main>
    </>
  )
}

export default TransactionsMngAdd