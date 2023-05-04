import classNames from 'classnames'
import React, { useId } from 'react'
import commonStyles from '../../styles/common.module.css'
import { InputWithHintType } from '../../types'

function InputWithHint({ label, type = 'text', placeholder, hint, value, setValue, isRequire }: InputWithHintType) {
  const sq = useId()

  return (
    <div className={commonStyles.inputWidthHint}>
      { label && (
        <div className={isRequire ? commonStyles.require : undefined}>
          <label htmlFor={sq}>{label}</label>
        </div>
      )}
      <div>
        <input 
          type={type} id={sq} 
          className={classNames({ [commonStyles.error]: hint })} 
          placeholder={placeholder} 
          onChange={(e) => setValue(e.target.value)} 
          value={value}
          step={type === 'number' ? 1 : undefined}
          min={type === 'number' ? 0 : undefined}
        />
        { hint && (
          <div>
            <span className={commonStyles.error}> 필수 항목입니다.</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputWithHint