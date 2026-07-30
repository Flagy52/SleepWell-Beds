import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className='image-wrapper'> 
            <img src={"./img/" + this.props.item.img} alt='Картинка' onClick={() => this.props.onShowItem(this.props.item)} />
        </div>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{new Intl.NumberFormat().format(this.props.item.price)} ₽</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item