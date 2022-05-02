import React, { Component } from 'react';

class Topping extends Component {
  render() {
    const { orders } = this.props;
    const toppingItems = orders.map(topping => {
      const tempItem = [];
      for (let i = 0; i < topping.quantity; i++) {
        tempItem.push(<div className={topping.name} key={`${topping.id}-${i}`}></div>)
      }

      return tempItem;
    })

    return toppingItems;
  }
}

export default Topping;
