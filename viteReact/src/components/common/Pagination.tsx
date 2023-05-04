import React from 'react'
import styles from '../../styles/pagination.module.css'
import { PageObjType } from '../../types'
import icon_left_bb from '../../assets/icon_left_arrow_bb_2x.webp'
import icon_left_b from '../../assets/icon_left_arrow_b_2x.webp'
import icon_right_bb from '../../assets/icon_right_arrow_bb_2x.webp'
import icon_right_b from '../../assets/icon_right_arrow_b_2x.webp'

function Pagenation({ pageObj, handlePageNation }: { pageObj: PageObjType; handlePageNation: Function; }) {
  const pages = [];
  for (let i = 0; i <= pageObj.totalPage - 1; i++) {
    pages.push(i + 1);
  }
  const maxCoverage = Math.ceil((pageObj.pageNo + 1)/10) * 10;
  const minCoverage = Math.ceil((pageObj.pageNo + 1)/10) * 10 - 10;

  return (
    <div className={styles.paginationWrapper}>
      <button onClick={() => handlePageNation(0)}>
        <img src={icon_left_bb} alt="" />
      </button>
      <button onClick={() => handlePageNation(pageObj.pageNo - 1)}>
        <img src={icon_left_b} alt="" />
      </button>
      <span className={styles.page}>
        { pages.filter(page => page <= maxCoverage && page > minCoverage).map((page, idx) => (
          <button key={idx} className={pageObj.pageNo === page - 1 ? styles.active : undefined} onClick={() => handlePageNation(page - 1)}>{page}</button>
        ))}
      </span>
      <button onClick={() => handlePageNation(pageObj.pageNo + 1)}>
        <img src={icon_right_b} alt="" />
      </button>
      <button onClick={() => handlePageNation(pageObj.totalPage - 1)}>
        <img src={icon_right_bb} alt="" />
        </button>
    </div>
  )
}

export default Pagenation