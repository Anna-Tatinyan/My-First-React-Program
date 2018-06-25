import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/app.css';
import Script from "./script";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  clickHandler = () => {
    const newColor = `rgb( ${(Math.floor(Math.random() * 256))} ,  ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)}`;
    this.setState(prevState => ({items: [...prevState.items, newColor ]}));
  }

  render() {
    let { items } = this.state;
    return (
      <div>
            <button onClick={this.clickHandler}>Click</button>
            <div className="App">
              {items.map((item) =>
                <Script key={item} />)}
            </div>
        </div>
    );
  }
}
export default App;
