import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <div className='image-wrapper'> 
                <img src={"./img/" + this.props.item.img} alt='Картинка' />
            </div>
            <h2>{this.props.item.title}</h2>
            <p>{new Intl.NumberFormat().format(this.props.item.price)} ₽</p>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order