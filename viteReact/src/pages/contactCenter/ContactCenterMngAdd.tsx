import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import commonStyles from '../../styles/common.module.css'
import styles from '../../styles/contactCenter.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/common/Breadcrumb'
import FooterBtn from '../../components/common/FooterBtn'
import Header from '../../components/common/Header'
import InputWithHint from '../../components/common/InputWithHint'
import SelectWithHint from '../../components/common/SelectWithHint'
import Toast from '../../utils/toast'
import classNames from 'classnames'
import { useMutation } from 'react-query'
import { patchJobs, postJobs, putJobs } from '../../api/contactCenter'

function ContactCenterMngAdd() {
  const { type, data } = useLocation().state || {}
  const [contactName, setContactName] = useState('')
  const [isShowcontactNameHint, setIsShowcontactNameHint] = useState(false)
  const [contactType, setContactType] = useState('')
  const [isShowContactTypeHint, setIsShowContactTypeHint] = useState(false)
  const [callType, setCallType] = useState('AICALL')
  const [channelCount, setChannelCount] = useState('')
  const [isShowChannelCount, setIsShowChannelCount] = useState(false)
  const [preCall, setPreCall] = useState("https://external.somewhere.com/precall")
  const [complete, setComplete] = useState("https://external.somewhere.com/complete")
  const [switchBtn, setSwitchBtn] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const { mutate: postMutate } = useMutation('postJobs', (variables: {serviceId: string, options: any}) => postJobs(variables.serviceId, variables.options), {
    onSuccess(data, variables, context) {
      navigate(`/contactCenterMng/${data.jobId}`, { state: { row: data.data }})
      new Toast('컨택센터 생성 완료.').show()
    },
    onError(error, variables, context) {
      new Toast('컨택센터 생성에 실패했습니다. 나중에 다시 시도해주세요.').show()
    },
  }) 

  const { mutateAsync: putMutate } = useMutation('putJobs', (variables: {serviceId: string, jobId: string, options: any}) => putJobs(variables.serviceId, variables.jobId, variables.options), {
    onSuccess(data, variables, context) {
      navigate(`/contactCenterMng/${data.data.jobId}`, { state: { row: data.data }})
      new Toast('컨택센터 수정 완료.').show()
    },
    onError(error, variables, context) {
      new Toast('컨택센터 수정에 실패했습니다. 나중에 다시 시도해주세요.').show()
    },
  }) 

  const { mutateAsync: patchMutate } = useMutation('patchJobs', (variables: {serviceId: string, jobId: string, options: any}) => patchJobs(variables.serviceId, variables.jobId, variables.options)) 

  const handleAddBtn = async () => {
    if (!contactName) {
      setIsShowcontactNameHint(true)
      return
    }
    if (!contactType) {
      setIsShowContactTypeHint(true)
      return
    }
    if (!channelCount && channelCount !== String(0)) {
      setIsShowChannelCount(true)
      return
    }
    const options = {
      callType,
      complete,
      preCall,
      channelCount,
      jobType: contactType === 'Inbound' ? 'INBOUND_JOB' : 'OUTBOUND_JOB',
      name: contactName
    }
    if (type && type === "update") {
      try {
        await patchMutate({ serviceId: 'AICCSample', jobId: data.jobId, options : { active: switchBtn }})
      } catch (error) {
        //이미 활성화 인 경우 api가 에러로 처리됨  
      }
      await putMutate({ serviceId: 'AICCSample', jobId: data.jobId, options })
      return
    }
    postMutate({ serviceId: 'AICCSample', options })
  }

  const handleSwitchCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchBtn(e.target.checked)
  }

  useEffect(() => {
    if (contactName) {
      setIsShowcontactNameHint(false)
    }
    if (contactType) {
      setIsShowContactTypeHint(false)
    }
    if (channelCount) {
      setIsShowChannelCount(false)
    }
  }, [contactName, contactType, channelCount])

  useEffect(() => {
    if (type && type === "update") {
      setContactName(data.name)
      setSwitchBtn(data.active)
      setContactType(data.jobType)
      setCallType(data.callType)
      setChannelCount(data.channels)
      setPreCall(data.callbacks.external.precall)
      setComplete(data.callbacks.external.complete)
    } else {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [type, data])

  return (
    <>
      <Header></Header>
      <main className={commonStyles.main}>
        <Breadcrumb depths={['홈','컨택센터 관리', '새 컨택센터']}></Breadcrumb>
        <h1>새로운 컨택센터 만들기</h1><div></div>
        <label htmlFor='contactName' className={classNames(styles.titleInput, { [styles.error]: isShowcontactNameHint })}>
          <input ref={inputRef} type="text" id='contactName' placeholder='새로운 컨택센터의 이름을 입력해주세요.' value={contactName} onChange={(e) => setContactName(e.target.value)}/>
          { isShowcontactNameHint && (
            <span className={commonStyles.error}>필수 항목입니다.</span>
          )}
        </label>
        { type && type === "update" && (
          <div className={commonStyles.article}>
            <div className={styles.switchWrapper}>
              <div>컨택센터 상태</div>
              <div>
                <label className={styles.switch}>
                  <input type="checkbox" checked={switchBtn} onChange={handleSwitchCheck}/>
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div>{switchBtn ? '활성화' : '비활성화'}</div>
            </div>
          </div>
        )}  
        <article className={commonStyles.article}>
          <div>
            <h2>컨택센터 정보<span>(필수)</span></h2>
          </div>
          <div>
            <SelectWithHint isRequire label='컨택센터 유형' options={['Inbound', 'OutBound']} placeholder='컨택센터 유형을 선택해주세요. 저장 후 변경할 수 없습니다.' value={contactType} setValue={setContactType} hint={isShowContactTypeHint}></SelectWithHint>
            {/* <SelectWithHint isRequire label='Call 유형' options={['BOTCALL']} placeholder='Call 유형을 선택해주세요. 저장 후 변경할 수 없습니다.' value={callType}></SelectWithHint> */}
            <SelectWithHint isRequire label='Call 유형' options={['AICALL']} placeholder='Call 유형을 선택해주세요. 저장 후 변경할 수 없습니다.' value={callType}></SelectWithHint>
            <InputWithHint 
              isRequire
              label='할당 채널 수'
              type='number'
              placeholder='컨택센터에서 사용할 채널의 숫자를 입력해주세요.'
              value={channelCount}
              setValue={setChannelCount}
              hint={isShowChannelCount}
            ></InputWithHint>
          </div>
        </article>
        <article className={commonStyles.article}>
          <div>
            <h2>Callback URL 설정</h2>
            <span>통화 결과를 전달받을 URL을 입력해주세요.</span>
          </div>
          <div>
            <div>
              <InputWithHint 
                label='PreCall'
                type='text'
                placeholder='통화 시작전 발생하는 precall Event를 전달받을 주소를 입력해주세요.'
                value={preCall}
                setValue={setPreCall}
              ></InputWithHint>
              <InputWithHint 
                label='Complete'
                type='text'
                placeholder='통화 종료시 발생하는 complete Event를 전달받을 주소를 입력해주세요.'
                value={complete}
                setValue={setComplete}
              ></InputWithHint>
            </div>
          </div>
        </article>
        { (type && type === "update") && contactType === 'Inbound' && (
          <div>
            <div>
              <h2>수신번호 설정</h2>
              <button>수신번호 관리</button>
            </div>
            <div>
              수신번호 설정 후 컨택센터 활성화가 가능합니다.
            </div>
          </div>
        )}
        <FooterBtn type='add' handleAddBtn={handleAddBtn}></FooterBtn>
      </main>
    </>
  )
}

export default ContactCenterMngAdd