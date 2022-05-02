import React, { Component } from 'react';
import './burger.css';
import toppings from '../data/topping.json';
import Topping from './Topping';
import Order from './Order';

class BurgerShop extends Component {
  state = { orders: [], totals: 0 }

  onAddToOrder = (topping) => {
    const orders = this.state.orders;
    const selected = orders.findIndex(item => item.id === topping.id);
    if (selected === -1) {
      const order_item = { ...topping, quantity: 1 };
      const temp_orders = [...orders];
      temp_orders.unshift(order_item);
      this.calculateOrder(temp_orders);
      return this.setState({
        orders: temp_orders,
      })
    }

    const temp_orders = [...orders];
    temp_orders[selected].quantity += 1;
    this.calculateOrder(temp_orders);
    this.setState({
      orders: temp_orders,
    })
  }

  onRemoveFromOrder = (id) => {
    const orders = this.state.orders;
    const selected = orders.findIndex(item => item.id === id);
    if (selected === -1) return;

    if (orders[selected].quantity === 1) {
      const temp_orders = [...orders];
      temp_orders.splice(selected, 1);
      this.calculateOrder(temp_orders);
      return this.setState({
        orders: temp_orders,
      })
    }

    const temp_orders = [...orders];
    temp_orders[selected].quantity -= 1;
    this.calculateOrder(temp_orders);
    this.setState({
      orders: temp_orders,
    })
  }

  onResetOrder = () => {
    this.setState({
      orders: [],
    })
  }

  calculateOrder = (orders) => {
    const totals = orders.reduce((sum, item) => sum += (item.quantity * item.price), 0)
    this.setState({
      totals: totals,
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="box">
          <div className="bread-top">
            <div className="seeds"></div>
            <div className="seeds2"></div>
          </div>
          <Topping orders={this.state.orders} />
          <div className="bread-bottom"></div>
        </div>
        <Order
          toppings={toppings}
          orderItems={this.state.orders}
          onAddToOrder={this.onAddToOrder}
          onRemoveFromOrder={this.onRemoveFromOrder}
          onResetOrder={this.onResetOrder}
          totals={this.state.totals}
        />
      </div>
    );
  }
}
export default BurgerShop;
