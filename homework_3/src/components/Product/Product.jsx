import '@/components/Product/Product.css';
import { useEffect, useState } from 'react'
import PocketBase from 'pocketbase';
import styles from '@/components/Product/Product.module.css'
import ProductListSort from '../ProductListSort/ProductListSort';

export default function Product() {

  const [originProduct, setOriginProduct] = useState([]);
  const [product, setProduct] = useState([]);

  async function data() {
    const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
    const records = await pb.collection('product').getFullList()

    return records
  }

  useEffect(() => {
    data().then((data) => {
      setOriginProduct(data);
      setProduct(data);
      console.log('데이터 가져왔음');
    })
  }, [])

  return (
    <>
      < ProductListSort product={product} setProduct={setProduct} originProduct={originProduct} />
      <ul className={styles.Product_wrapper}>

        {product.length === 0 ? <h2 className={styles.loading}>로딩중...⏳</h2> :
          product.map((item) => {
            return (
              <li key={item.id} className={styles.product}>
                <a href="#">
                  <img src={`${import.meta.env.VITE_POCKETBASE_URL}/api/files/product/${item.id}/${item.product_img}`} alt={item.product_name} />
                  <div className='product_info'>
                    <span className='delivery_type'>{item.delivery_type}</span>
                    <h3 className='product_name'>{item.product_name}</h3>
                    <p className='product_descriptions'>{item.product_descriptions}</p>
                    <span className='product_price'>{item.price.toLocaleString()} 원</span>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}