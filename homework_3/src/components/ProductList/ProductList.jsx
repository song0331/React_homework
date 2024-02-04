import Pagination from 'components/Pagination/Pagination';
import Product from '@/components/Product/Product';
import 'components/ProductList/ProductList.css';


export default function ProductList() {

  return (
    <div className="product_list_container">
      <h2 className='product_list_title'>베스트</h2>
      <Product />
      <Pagination />
    </div>
  )
}