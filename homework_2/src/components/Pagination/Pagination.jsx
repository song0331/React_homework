import './Pagination.css'

export default function Pagination() {
  return (
    <ul className='pagination'>
      <li>
        <a href="#">
          <img src="/icons/first_page.svg" alt="첫 페이지로 이동" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/next_page.svg" alt="다음 페이지로 이동" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/page_1.svg" alt="페이지 1" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/page_2.svg" alt="페이지 2" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/page_3.svg" alt="페이지 3" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/previous_page.svg" alt="이전 페이지로 이동" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/last_page.svg" alt="끝 페이지로 이동" />
        </a>
      </li>
    </ul>
  )
}