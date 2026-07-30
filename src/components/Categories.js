import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Всё"
                },
                {
                    key: "Classic",
                    name: "Классические"
                },
                {
                    key: "Loft",
                    name: "Лофт"
                },
                {
                    key: "Provence",
                    name: "Прованс"
                },
                {
                    key: "Modern",
                    name: "Модерн"
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories