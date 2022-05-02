import React, { Component } from 'react';
import OrderTopping from './OrderTopping';

class Order extends Component {
  render() {
    const { toppings, onAddToOrder, onRemoveFromOrder, orderItems, onResetOrder, totals } = this.props;
    return (
      <div className='order-box'>
        <div className='order-header'>
          <h3>Custom your burger</h3>
        </div>
        <div className='order-detail'>
          <OrderTopping toppings={toppings} onAddToOrder={onAddToOrder} onRemoveFromOrder={onRemoveFromOrder} orderItems={orderItems} totals={totals} />
        </div>
        <div className='order-footer'>
          <button className='btn btn-order'>Order now</button>
          <button className='btn btn-reset' onClick={() => onResetOrder()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Order;
