import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'sofa',
          price: '789.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(
        (item) => item.category === category
      ),
    })
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
