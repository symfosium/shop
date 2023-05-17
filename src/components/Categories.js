import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Kaikki',
        },
        {
          key: 'chairs',
          name: 'Tuolit',
        },
        {
          key: 'tables',
          name: 'Pöydät',
        },
        {
          key: 'beds',
          name: 'Sängyt',
        },
        {
          key: 'lamps',
          name: 'Lamput',
        },
        {
          key: 'sofa',
          name: 'Sohvat',
        },
      ],
    }
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category) => (
          <div
            key={category.key}
            onClick={() => this.props.chooseCategory(category.key)}
          >
            {category.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Categories
