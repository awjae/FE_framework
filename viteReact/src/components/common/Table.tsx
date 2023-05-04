import style from '../../styles/common.module.css'
import classNames from 'classnames'

function Table({ list, handleClick, buttonClick, columns, customColumnsName, colWidth, rules }: { list: any[]; handleClick?: Function; buttonClick?: Function; columns: string[]; customColumnsName?: string[]; colWidth?: string[]; rules?: Function;}) {
  return (
    <>
      <table className={style.table}>
        { colWidth && (
          <colgroup>
            { colWidth.map((col, idx) => (
              <col width={col} key={idx}></col>
            ))}
          </colgroup>
        )}
        <thead>
          <tr>
          { customColumnsName && customColumnsName.map((name, idx) => (
            <th key={idx}>{name}</th>
          ))}
          { !customColumnsName && columns.map((column, idx) => (
            <th key={idx}>{column}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          { list.map((row, idx) => (
            <tr key={idx} onClick={handleClick ? () => handleClick(row) : undefined}>
              { columns.map((column, jdx) => (
                <td key={jdx} className={classNames({ [style.w280]: column === 'name' })}>
                  { column === 'active' && (
                    <span className={classNames(style.statusPoint, { [style.statusPointActive]: row[column] })}></span>
                  )}
                  { rules ? rules({ key: column, value: row[column], item: row }) : row[column]}
                  { column === 'buttonDel' && buttonClick && (
                    <button className={style.button_2} style={{ padding: '7px 21px' }} onClick={() => buttonClick(row)}>삭제</button>
                  )}
                  { column === 'buttonDetail' && buttonClick && (
                    <button className={style.button_2} style={{ padding: '7px 21px' }} onClick={() => buttonClick(row)}>상세</button>
                  )}
                  { column === 'index' && (
                    idx + 1
                  )}
                </td>
              ))}
            </tr>
          ))}
          { list.length === 0 && (
            <tr><td colSpan={columns.length}>데이터가 없습니다.</td></tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table