## React 과제2

![](https://velog.velcdn.com/images/thdgusrbek/post/74e51537-af86-4a3b-8d0c-929914295f99/image.png)

### 과제

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
      필요한 경우, 리스트 렌더링을 활용해보세요.
      <br><br>

#### 바닐라 프로젝트: 마켈칼리

#### 구현할 인터페이스: 베스트 상품

#### 구현 내용

- 마크업 (JSON 데이터를 사용)
- 스타일링

---

<br>

### 디렉토리 구성

![](https://velog.velcdn.com/images/thdgusrbek/post/56d41468-aa8d-40b3-babf-3214538263a4/image.png)

---

<br>

### App.jsx

```jsx
import "./App.css";
import ProductList from "ProductList/ProductList";

function App() {
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
```

---

<br>

### ProductList 컴포넌트

```jsx
import Pagination from "Pagination/Pagination";
import Product from "Product/Product";
import ProductListSort from "ProductListSort/ProductListSort";
import "ProductList/ProductList.css";

export default function ProductList() {
  return (
    <div className="product_list_container">
      <h2 className="product_list_title">베스트</h2>
      <ProductListSort />
      <Product />
      <Pagination />
    </div>
  );
}
```

---

<br>

### Product 컴포넌트

```jsx
import "Product/Product.css";
import product_data from "data/product.json";

export default function Product() {
  return (
    <ul className="Product_wrapper">
      {product_data.map((item, index) => {
        return (
          <li key={item.id} className="product">
            <a href="#">
              <img src={`/images/${index + 1}.jpg`} alt={item.product_name} />
              <div className="product_info">
                <span className="delivery_type">{item.delivery_type}</span>
                <h3 className="product_name">{item.product_name}</h3>
                <p className="product_descriptions">
                  {item.product_descriptions}
                </p>
                <span className="product_price">{item.product_price} 원</span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
```

---

<br>

### Pagination 컴포넌트

```jsx
import "./Pagination.css";

export default function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <a href="#">
          <img src="/icons/first_page.svg" alt="첫 페이지로 이동" />
        </a>
      </li>
      {/* 다음 페이지, 페이지1, 페이지2, 페이지3는 같은 마크업이라 README에서만 생략 */}
      <li>
        <a href="#">
          <img src="/icons/last_page.svg" alt="끝 페이지로 이동" />
        </a>
      </li>
    </ul>
  );
}
```

---

<br>

### ProductListSort 컴포넌트

```jsx
import "ProductListSort/ProductListSort.css";

export default function ProductListSort() {
  return (
    <div className="product_list_sort">
      <div>총 284건</div>

      <div className="sort_btn" role="group">
        <button type="button">추천순</button>
        <button type="button">신상품순</button>
        <button type="button">판매량순</button>
        <button type="button">혜택순</button>
        <button type="button">낮은 가격순</button>
        <button type="button">높은 가격순</button>
      </div>
    </div>
  );
}
```

---

<br>

### 결과

![](https://velog.velcdn.com/images/thdgusrbek/post/e8d13bce-10ea-49fc-8d79-01d2c00786c5/image.gif)

---

<br>

### 회고

이번 과제2는 과제1과 다르게 기능구현은 하지 않았다.
과제에 많은 시간을 보내고 힘들어 하는 것보다 요구사항에 맞춰 과제를 하고 React를 예습, 복습하는 것이 효과적이라고 생각했기 때문이다.

과제는 프로젝트에서 담당해서 만들었던 UI(회원가입, 로그인)가 아닌 베스트 상품 UI를 만들었다.
데이터는 JSON 파일에 저장해서 사용했다.

상품 이미지는 JSON 파일이 아닌 public/images에서 불러왔다.
처음 작성 시 상품 이미지는 동적이라 생각해서 src/assets/images에 만들었지만 배포했을 때 경로를 찾지 못했다.

배포된 폴더에 src가 없기 때문인데, 이를 해결하지 못해 일단 public 폴더를 사용했다.

---

<br>

### [💻Demo](https://front-end-react2.vercel.app/)
