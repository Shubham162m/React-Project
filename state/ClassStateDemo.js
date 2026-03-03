import React, { Component } from "react";

class ClassStateDemo extends Component {

  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      count: 0,
      name: "",
      isVisible: true,
      user: {
        age: 23,
        city: "Gujarat , Banaskantha"
      }
    };
  }

  // Increment
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Decrement
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  // Handle Input
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  // Toggle Text
  toggleText = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  // Update Object State
  updateCity = () => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        city: "Ahmedabad"
      }
    }));
  };

  // Reset
  resetAll = () => {
    this.setState({
      count: 0,
      name: "shubham",
      isVisible: true,
      user: {
        age: 23,
        city: "Gujarat , Banaskantha"
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component State Demo</h2>

        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <h3>Enter Name:</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>Your Name: {this.state.name}</p>

        <hr />

        <button onClick={this.toggleText}>Toggle Text</button>
        {this.state.isVisible && <p>This text is visible</p>}

        <hr />

        <h3>User Info</h3>
        <p>Age: {this.state.user.age}</p>
        <p>City: {this.state.user.city}</p>
        <button onClick={this.updateCity}>Change City</button>

        <hr />

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default ClassStateDemo;