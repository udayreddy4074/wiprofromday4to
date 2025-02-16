import React from 'react';
import Employee from './Employee';
import Department from './Department';
import Product from './Product';
import Container from './Container';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>First React Page</h1>
        <Employee />
        <Department />
        <Product />
        <Container />
      </div>
    );
  }
}

export default App;
