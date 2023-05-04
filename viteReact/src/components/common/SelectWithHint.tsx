import classNames from 'classnames'
import React, { useId } from 'react'
import commonStyles from '../../styles/common.module.css'
import { InputWithHintType, SelectWithHintType } from '../../types'

function SelectWithHint({ options, label, placeholder, hint, value, setValue, isRequire }: SelectWithHintType) {
  const sq = useId()
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue ? setValue(event.target.value) : undefined;
  }
  

  return (
    <div className={commonStyles.selectWidthHint}>
      { label && (
        <div className={isRequire ? commonStyles.require : undefined}>
          <label htmlFor={sq}>{label}</label>
        </div>
      )}
      <div>
        <select name="" id={sq} value={value} 
          onChange={handleChange} 
          className={classNames({ [commonStyles.placeholder]: value === "", [commonStyles.error]: hint })}
          disabled={setValue ? false : true}>
          <option className='placeholder' value="" disabled>{placeholder}</option>
          { options.length > 0 && options.map((option: string, idx: number) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
        { hint && (
          <div>
            <span className={commonStyles.error}> 필수 항목입니다.</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectWithHint