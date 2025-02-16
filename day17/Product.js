import React from 'react';
import ComponentBase from './ComponentBase';

class Product extends ComponentBase {
  renderContent() {
    return (
      <div className="product-card">
        <h2>Product Details</h2>
        <p><strong>Product Name:</strong> Laptop</p>
      </div>
    );
  }
}

export default Product;
