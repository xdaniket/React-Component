import { Component } from "react";

class OptimizeClassComp extends Component {
  state = {
    name: "",
    email: "",
  };
  getVal = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, email } = this.state;
    return (
      <>
        <div>
          <label htmlFor="">Name : </label>
          <input type="text" name="name" onChange={this.getVal} />
          <div>
            <strong>Name :{name} </strong>
          </div>
        </div>

        <br />
        <br />

        <div>
          <label htmlFor="">Email : </label>
          <input type="text" name="email" onChange={this.getVal} />
          <div>
            <strong>Email : {email} </strong>
          </div>
        </div>
      </>
    );
  }
}
export default OptimizeClassComp;
