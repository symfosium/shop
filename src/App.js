import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Harmaa tuoli',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Musta pöytä',
          img: 'table-black.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'tables',
          price: '189.99',
        },
        {
          id: 3,
          title: 'Valkoinejn pöytä',
          img: 'table-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'tables',
          price: '179.99',
        },
        {
          id: 4,
          title: 'Sänky',
          img: 'bed-blue.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'beds',
          price: '399.99',
        },
        {
          id: 5,
          title: 'Lamppu',
          img: 'lamp.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'lamps',
          price: '134.99',
        },
        {
          id: 6,
          title: 'Sohva harmaa',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, conskdekl poeikfga',
          category: 'lamps',
          price: '789.99',
        },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((item) => item.id !== id),
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((order) => {
      if (order.id === item.id) isInArray = true
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App
