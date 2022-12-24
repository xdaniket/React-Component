import { Component } from "react";

class HandleCountVal extends Component {
  state = {
    counter: 0,
  };

  handleVal = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <div>
          <p>{counter}</p>
          <button onClick={this.handleVal}>Increment</button>
        </div>
      </>
    );
  }
}
export default HandleCountVal;
