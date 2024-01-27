import Product from '../Product/Product';
import './ProductList.css';

export default function ProductList() {

  return (
    <div className="product_list_container">
      <h2 className='product_list_title'>베스트</h2>

      <div className='product_list_sort' role='group'>
        <div role='none'>총 284건</div>

        {/* div로 변경 */}
        <ul>
          {/* button으로 변경 */}
          <li>추천순</li>
          <li>신상품순</li>
          <li>판매량순</li>
          <li>혜택순</li>
          <li>낮은 가격순</li>
          <li>높은 가격순</li>
        </ul>
      </div>

      <ul className='Product_wrapper' role='group'>
        <Product />
      </ul>

      <ul className='pagination'>
        <li><img src="./src/assets/icons/first_page.svg" alt="첫 페이지로 이동" /></li>
        <li><img src="./src/assets/icons/next_page.svg" alt="다음 페이지로 이동" /></li>
        <li><img src="./src/assets/icons/page_1.svg" alt="페이지 1" /></li>
        <li><img src="./src/assets/icons/page_2.svg" alt="페이지 2" /></li>
        <li><img src="./src/assets/icons/page_3.svg" alt="페이지 3" /></li>
        <li><img src="./src/assets/icons/previous_page.svg" alt="이전 페이지로 이동" /></li>
        <li><img src="./src/assets/icons/last_page.svg" alt="끝 페이지로 이동" /></li>
      </ul>

    </div>
  )
}