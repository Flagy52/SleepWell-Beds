import React, { Component } from 'react'

export class ShowFullItem extends Component {
    handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
        this.props.onShowItem(null); 
        }
    }
  render() {
    return (
      <div className='full-item' onClick={this.handleOverlayClick}>
        <div>
            <div className='image-wrapper'> 
                <img src={"./img/" + this.props.item.img} alt='Картинка' onClick={() => this.props.onShowItem(this.props.item)} />
            </div>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{new Intl.NumberFormat().format(this.props.item.price)} ₽</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem