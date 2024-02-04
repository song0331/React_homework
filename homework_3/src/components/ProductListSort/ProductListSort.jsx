/* eslint-disable */
import '@/components/ProductListSort/ProductListSort.css'
import styles from '@/components/ProductListSort/ProductListSort.module.css'
import { useState } from 'react';

export default function ProductListSort({ setProduct, originProduct }) {

  const [now, setNow] = useState('0');
  const handleIsActive = e => setNow(e.target.dataset.index)
  const handleSortBest = () => setProduct(originProduct);
  const handleSortPriceDes = () => setProduct([...originProduct].sort((x, y) => y.price - x.price))
  const handleSortPriceAsc = () => setProduct([...originProduct].sort((x, y) => x.price - y.price))


  return (
    <div className='product_list_sort' >
      <div>총 284건</div>

      <div className={styles.sort_btn} role='group'>
        <button
          data-index='0'
          type='button'
          className={now === '0' ? 'is_active' : null}
          onClick={(e) => {
            handleSortBest()
            handleIsActive(e)
          }}>
          추천순</button>

        <button
          data-index='1'
          type='button'
          className={now === '1' ? 'is_active' : null}
          onClick={(e) => {
            handleIsActive(e)
          }}>
          신상품순</button>

        <button
          data-index='2'
          type='button'
          className={now === '2' ? 'is_active' : null}
          onClick={(e) => handleIsActive(e)}>
          판매량순</button>

        <button
          data-index='3'
          type='button'
          className={now === '3' ? 'is_active' : null}
          onClick={(e) => {
            handleIsActive(e)
          }}>
          혜택순</button>

        <button
          data-index='4'
          type='button'
          className={now === '4' ? 'is_active' : null}
          onClick={(e) => {
            handleSortPriceAsc()
            handleIsActive(e)
          }}>
          낮은 가격순</button>

        <button
          data-index='5'
          type='button'
          className={now === '5' ? 'is_active' : null}
          onClick={(e) => {
            handleSortPriceDes()
            handleIsActive(e)
          }}>
          높은 가격순</button>

      </div>
    </div>
  )
}