import React, { Component } from 'react';

class Options extends Component {
  render() {
    const { visibility, onAddToOrder, onRemoveFromOrder, item } = this.props;
    if (visibility) {
      return (
        <>
          <button className='btn' onClick={() => onRemoveFromOrder(item.id)}>Less</button><button className='btn' onClick={() => onAddToOrder(item)}>More</button>
        </>
      );
    }

    return (
      <>
        <button className='btn' onClick={() => onRemoveFromOrder(item.id)} disabled>Less</button><button className='btn' onClick={() => onAddToOrder(item)}>More</button>
      </>
    );

  }
}

export default Options;
