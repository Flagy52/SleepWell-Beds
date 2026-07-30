import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    <h2>Ваша корзина</h2>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Итоговая сумма: {new Intl.NumberFormat().format(summa)} ₽</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h3>В корзине нет товаров</h3>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <nav>
            <span className='logo'>SleepWell Beds</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>
                  <FaShoppingCart 
                    onClick={() => setCartOpen(prev => !prev)} 
                    className={`shop-cart-button ${cartOpen && 'active'}`} />
                </li>
            </ul>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
              </div>
            )}
        </nav>
        <div className='presentation'></div>
    </header>
  )
}
