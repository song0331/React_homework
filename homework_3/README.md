## React 과제3

![](https://velog.velcdn.com/images/thdgusrbek/post/74e51537-af86-4a3b-8d0c-929914295f99/image.png)

### 과제

3주차 과제를 확인한 후, 과제를 제출하세요. (마크업 구현 ✅ / 기능 구현 ✅)

- [x] 바닐라 프로젝트의 데이터베이스 연동 부분을 리액트로 구현합니다.
- [x] 리액트 방식으로 앱의 상태 및 사이드 이펙트를 관리해봅니다.
- [ ] 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
- [ ] 가능한 경우, DOM 객체에 접근/조작하는 부분도 구현합니다. (옵션)
- [ ] 가능한 경우, Storybook을 활용해보세요. (옵션)
      <br><br>

#### 바닐라 프로젝트

: 마켈칼리
<br>

#### 구현할 인터페이스

: 베스트 상품
<br>

#### 구현 내용

: pocketbase를 사용해서 상품 정보 렌더링 (useEffect 사용)
<br>

---

<br>

### 디렉토리 구성

![](https://velog.velcdn.com/images/thdgusrbek/post/dedf217d-6451-4899-baad-2b43e8f11c72/image.png)

---

<br>

### Product 컴포넌트

- useEffect를 사용해 pocketbase에서 데이터를 받아왔다.
  - 의존성 배열을 빈 배열로 적어 마운트 시 1회만 실행

```jsx
import "@/components/Product/Product.css";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import styles from "@/components/Product/Product.module.css";
import ProductListSort from "../ProductListSort/ProductListSort";

export default function Product() {
  const [originProduct, setOriginProduct] = useState([]);
  const [product, setProduct] = useState([]);

  async function data() {
    const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
    const records = await pb.collection("product").getFullList();

    return records;
  }

  useEffect(() => {
    data().then((data) => {
      setOriginProduct(data);
      setProduct(data);
    });
  }, []);

  return (
    <>
      <ProductListSort setProduct={setProduct} originProduct={originProduct} />
      <ul className={styles.Product_wrapper}>
        {product.length === 0 ? (
          <h2 className={styles.loading}>로딩중...⏳</h2>
        ) : (
          product.map((item) => {
            return (
              <li key={item.id} className={styles.product}>
                <a href="#">
                  <img
                    src={`${
                      import.meta.env.VITE_POCKETBASE_URL
                    }/api/files/product/${item.id}/${item.product_img}`}
                    alt={item.product_name}
                  />
                  <div className="product_info">
                    <span className="delivery_type">{item.delivery_type}</span>
                    <h3 className="product_name">{item.product_name}</h3>
                    <p className="product_descriptions">
                      {item.product_descriptions}
                    </p>
                    <span className="product_price">
                      {item.price.toLocaleString()} 원
                    </span>
                  </div>
                </a>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
```

<br>

#### ProductListSort 컴포넌트

- 해당 버튼을 눌러 정렬 후 상품 렌더링 (추천순, 낮은 가격순, 높은 가격순만)

```jsx
/* eslint-disable */
import "@/components/ProductListSort/ProductListSort.css";
import styles from "@/components/ProductListSort/ProductListSort.module.css";
import { useState } from "react";

export default function ProductListSort({ setProduct, originProduct }) {
  const [now, setNow] = useState("0");
  const handleIsActive = (e) => setNow(e.target.dataset.index);
  const handleSortBest = () => setProduct(originProduct);
  const handleSortPriceDes = () =>
    setProduct([...originProduct].sort((x, y) => y.price - x.price));
  const handleSortPriceAsc = () =>
    setProduct([...originProduct].sort((x, y) => x.price - y.price));

  return (
    <div className="product_list_sort">
      <div>총 284건</div>

      <div className={styles.sort_btn} role="group">
        <button
          data-index="0"
          type="button"
          className={now === "0" ? "is_active" : null}
          onClick={(e) => {
            handleSortBest();
            handleIsActive(e);
          }}
        >
          추천순
        </button>

        <button
          data-index="1"
          type="button"
          className={now === "1" ? "is_active" : null}
          onClick={(e) => {
            handleIsActive(e);
          }}
        >
          신상품순
        </button>

        <button
          data-index="2"
          type="button"
          className={now === "2" ? "is_active" : null}
          onClick={(e) => handleIsActive(e)}
        >
          판매량순
        </button>

        <button
          data-index="3"
          type="button"
          className={now === "3" ? "is_active" : null}
          onClick={(e) => {
            handleIsActive(e);
          }}
        >
          혜택순
        </button>

        <button
          data-index="4"
          type="button"
          className={now === "4" ? "is_active" : null}
          onClick={(e) => {
            handleSortPriceAsc();
            handleIsActive(e);
          }}
        >
          낮은 가격순
        </button>

        <button
          data-index="5"
          type="button"
          className={now === "5" ? "is_active" : null}
          onClick={(e) => {
            handleSortPriceDes();
            handleIsActive(e);
          }}
        >
          높은 가격순
        </button>
      </div>
    </div>
  );
}
```

---

<br>

### 결과

![](https://velog.velcdn.com/images/thdgusrbek/post/e8d6f8de-07ca-48d3-bdce-51b681801401/image.gif)

---

<br>

### 회고

이번 과제 요구사항인 커스텀 훅 함수를 만들어 사용하지 못 했다.
커스텀 훅이 익숙하지 않은 것 같아 수업을 듣고 수정해야 할 것 같다.

이번 과제는 저번 과제에서 useEffect, pocketbase 정도만 추가해서 큰 어려움 없이 진행되었다.

---

<br>

### [💻Demo](https://front-end-react3.vercel.app/)
