// import './ProductListSort.css'
import 'ProductListSort/ProductListSort.css'

export default function ProductListSort() {
  return (
    <div className='product_list_sort' >
      <div>총 284건</div>

      <div className='sort_btn' role='group'>
        <button type='button'>추천순</button>
        <button type='button'>신상품순</button>
        <button type='button'>판매량순</button>
        <button type='button'>혜택순</button>
        <button type='button'>낮은 가격순</button>
        <button type='button'>높은 가격순</button>
      </div>
    </div>
  )
}