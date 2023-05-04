import styles from '../../styles/common.module.css'
import classNames from 'classnames'

function Breadcrumb({ depths }: { depths: string[]}) {
  return (
    <ul className={styles.breadcrumb}>
      { depths.map((depth, idx) => (
        <li key={idx} className={classNames({ [styles.active]: idx === depths.length - 1 })}>
          <span>{depth}</span>
          { idx !== depths.length - 1 && (
            <span className={styles.divide}></span>
          )}
        </li>
      ))}      
    </ul>
  )
}

export default Breadcrumb

