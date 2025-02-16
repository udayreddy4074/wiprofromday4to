import React, { Component } from 'react';
import beforeClickImage from './uday the.jpg';
import afterClickImage from './uday img.jpeg';   

class MessageApp extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      message: "Hello Uday!",
      showAfterClickImage: false // Initially, show first image
    };
  }

  showImageAndMessage = () => {
    this.setState({
      message: "Thank you for clicking!",
      showAfterClickImage: true // Change the image on click
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.message}</h1>

        {/* Step 1: Show First Image Before Click, Change on Click */}
        <img 
          src={this.state.showAfterClickImage ? afterClickImage : beforeClickImage} 
          alt="Displayed Image" 
          style={{ marginTop: '20px', width: '300px', height: '200px' }} 
        />

        {/* Step 2: Button to Change Image & Message */}
        <br />
        <button onClick={this.showImageAndMessage} style={{ marginTop: '20px' }}>
          Click Me
        </button>
      </div>
    );
  }
}

export default MessageApp;
