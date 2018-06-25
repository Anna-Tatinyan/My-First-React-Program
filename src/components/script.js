import React from "react";


class Script extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
    }
  }
  colorChanger = () => {
    const c = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ color: c });
  }
  render() {
    return (
        <h1 className="test" style={{color: this.state.color}} onClick={this.colorChanger}> Hello world</h1>
    )
  }
}

export default Script;
