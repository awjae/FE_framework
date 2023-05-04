import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { deleteCallPoint, postCallPoint } from '../api/contactCenter';
import InputWithHint from './common/InputWithHint';
import Table from './common/Table'
import commonStyles from '../styles/common.module.css'

function CallPointMngPop({ list, serviceId, jobId, close, listRefetch }: { list: any; serviceId: string; jobId: string; close: Function; listRefetch: Function}) {
  const [mdn, setMdn] = useState('')

  const { mutate } = useMutation('postCallPoint', (variables: {serviceId: string, jobId: string, options: any}) => postCallPoint(variables.serviceId, variables.jobId, variables.options), {
    onSuccess(data, variables, context) {
      listRefetch()
    },
  })
  const { mutate: deleteMutate } = useMutation('deleteCallPoint', (variables: {serviceId: string, jobId: string, mdn: string}) => deleteCallPoint(variables.serviceId, variables.jobId, variables.mdn), {
    onSuccess(data, variables, context) {
      listRefetch()
    },
  })

  const handleAddMdn = () => {
    const options = {
      mdn: mdn,
      tts: "소리샘으로 연결됩니다."
    }
    mutate({ serviceId, jobId, options })
  }

  const handleDelete = (row: any) => {
    deleteMutate({ serviceId, jobId, mdn: row.mdn})
  }

  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <section className={commonStyles.popup}>
      <div className={commonStyles.dimmed} onClick={() => close()}></div>
      <article className={commonStyles.contents}>
        <div className={commonStyles.close} onClick={() => close()}>닫기</div>
        <h2>수신번호 관리</h2>
        <div className={commonStyles.callPointPopContents}>
          <div>
            <InputWithHint 
              label='신규번호 등록'
              type='text'
              placeholder='전화를 받을 수신번호를 입력해주세요.'
              value={mdn}
              setValue={setMdn}
            ></InputWithHint>
          </div>
          <button onClick={handleAddMdn} className={commonStyles.button}>추가</button>
        </div>
        <div className={commonStyles.callPointPopContentsInfo}>
          <h3>번호 목록</h3>
          <span>총 {list.length}개</span>
        </div>
        <Table 
          columns={['index', 'mdn', 'createdDateTime', 'buttonDel']} 
          customColumnsName={['No', '전화번호', '등록일시' , '']} 
          list={list}
          buttonClick={handleDelete}></Table>
      </article>
    </section>
  )
}

export default CallPointMngPop