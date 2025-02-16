import React, { Component } from 'react';
import './styles.css';

class ComponentBase extends Component {
  render() {
    return <div className="base-style">{this.renderContent()}</div>;
  }

  renderContent() {
    return null; // To be overridden by child classes
  }
}

export default ComponentBase;
