import './App.css'
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

function App() {

  return <div className='wrapper clear'>
<header className='d-flex justify-between align-center p-40'>
  <div className='d-flex align-center'>
  <img src="/img/shoes.jpg" alt="" width="80" height="80"/>
<div>
<h3 className='text-uppercase'>React Sneakers</h3>
<p className='opacity-5'>Магазин найкращих кросівок</p>
</div>
  </div>
  
<ul className='d-flex'>
  <li className='mr-30'>
  <FiShoppingCart />
    <span style={{ marginLeft: '30px' }}>1205 грн</span>
  </li>
  <li>
  <FaUser />
  </li>
</ul>
</header>

<div className='content p-40'>
  <div className='d-flex align-center mb-40 justify-between'>
  <h1>Всі кросівки</h1>
<div className='search-block d-flex'>
<img src="/img/search.svg" alt="Search" width={30} height={30}/>
<input placeholder='Пошук...' />
  </div>
</div>


<div className='d-flex'>
<div className='card'>
  <img className='favorite' src="/public/img/heart_nolike.svg" alt="nolike" width={20} height={20} />
  <img src="/img/img_shoes/Shoes_2.jpg" alt="shoes_2" width={133}/>
  <h5>Чоловічі кросівки adidas chiki-chiki</h5>
  <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
      <span>
        Ціна:
      </span>
      <b> 7800 грн</b>
    </div>
    <button className='button'>
      <img src="/img/plus.svg" alt="Plus" width={14} height={14} />
    </button>
  </div>

  
</div>
<div className='card'>
  <img src="/img/img_shoes/Shoes_3.jpg" alt="shoes_2" width={133}/>
  <h5>Чоловічі кросівки adidas chiki-chiki</h5>
  <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
      <span>
        Ціна:
      </span>
      <b> 7800 грн</b>
    </div>
    <button className='button'>
      <img src="/img/plus.svg" alt="Plus" width={14} height={14} />
    </button>
  </div>

  
</div>
<div className='card'>
  <img src="/img/img_shoes/Shoes_4.jpg" alt="shoes_2" width={133}/>
  <h5>Чоловічі кросівки adidas chiki-chiki</h5>
  <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
      <span>
        Ціна:
      </span>
      <b> 7800 грн</b>
    </div>
    <button className='button'>
      <img src="/img/plus.svg" alt="Plus" width={14} height={14} />
    </button>
  </div>

  
</div>
<div className='card'>
  <img src="/img/img_shoes/Shoes_5.jpg" alt="shoes_2" width={133}/>
  <h5>Чоловічі кросівки adidas chiki-chiki</h5>
  <div className='d-flex justify-between align-center'>
    <div className='d-flex flex-column'>
      <span>
        Ціна:
      </span>
      <b> 7800 грн</b>
    </div>
    <button className='button'>
      <img src="/img/plus.svg" alt="Plus" width={14} height={14} />
    </button>
  </div>

  
</div>

</div>


</div>
  </div>
  
}

export default App
