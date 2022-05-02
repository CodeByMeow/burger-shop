import React, { Component } from 'react';
import Options from './Options';

class OrderTopping extends Component {
  render() {
    const { toppings, orderItems, onAddToOrder, onRemoveFromOrder, totals } = this.props;
    const toppingDetail = toppings.map(item => {
      const selected = orderItems?.findIndex(topping => topping.id === item.id);
      const visibility = selected !== -1 ? 1 : 0;
      let total = 0;
      if (visibility) {
        const { quantity, price } = orderItems[selected];
        total = quantity * price;
      }
      return (
        <tr key={item.id}>
          <td className='topping-name'>{item.name}</td>
          <td><Options visibility={visibility} onAddToOrder={onAddToOrder} onRemoveFromOrder={onRemoveFromOrder} item={item} /></td>
          <td>{item.price}</td>
          <td>{total}</td>
        </tr >
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <td>Topping</td>
            <td>Option</td>
            <td>Unit Price</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {toppingDetail}
        </tbody>
        <tfoot>
          <tr>
            <td>Total cost</td>
            <td></td>
            <td></td>
            <td>{totals}$</td>
          </tr>
        </tfoot>
      </table >
    );
  }
}

export default OrderTopping;
