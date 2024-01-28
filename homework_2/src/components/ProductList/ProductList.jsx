// import Pagination from '../Pagination/Pagination';
// import Product from '../Product/Product';
// import ProductListSort from '../ProductListSort/ProductListSort';
// import './ProductList.css';
import Pagination from 'Pagination/Pagination';
import Product from 'Product/Product';
import ProductListSort from 'ProductListSort/ProductListSort';
import 'ProductList/ProductList.css';

export default function ProductList() {

  return (
    <div className="product_list_container">
      <h2 className='product_list_title'>베스트</h2>
      <ProductListSort />
      <Product />
      <Pagination />
    </div>
  )
}