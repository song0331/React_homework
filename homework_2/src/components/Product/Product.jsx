import './Product.css';
import product_data from './../../data/product.json';

export default function Product() {

  console.log(product_data);

  return (
    product_data.map((item, index) => {
      return (
        <li key={index} className="product">
          <img src={`./src/assets/images/${index + 1}.jpg`} alt={item.product_name} />

          <div className='product_info'>
            <div className='delivery_type'>{item.delivery_type}</div>
            <div className='product_name'>{item.product_name}</div>
            <div className='product_descriptions'>{item.product_descriptions}</div>
            <div className='product_price'>{item.product_price} 원</div>
          </div>
        </li>
      )
    })
  )
}