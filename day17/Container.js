import React from 'react';
import ComponentBase from './ComponentBase';

class Container extends ComponentBase {
  renderContent() {
    return (
      <div className="container-card">
        <h2>Container Details</h2>
        <p><strong>Device Name:</strong> Smartphone</p>
      </div>
    );
  }
}

export default Container;
