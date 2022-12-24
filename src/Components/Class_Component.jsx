import { Component } from "react";

class ClassComp extends Component {
  state = {
    name: "",
    email: "",
  };
  render() {
    return (
      <>
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <div>
            <strong>Name : {this.state.name}</strong>
          </div>
        </div>

        <br />
        <br />

        <div>
          <label htmlFor="">Email : </label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <div>
            <strong>Email : {this.state.email}</strong>
          </div>
        </div>
      </>
    );
  }
}
export default ClassComp;
