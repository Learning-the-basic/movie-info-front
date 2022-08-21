import React, { Component } from "react";
import Login from "./Login";

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button onClick={this.openModal}>로그인</button>
        <Login authenticated={this.state.authenticated }isOpen={this.state.isModalOpen } close={this.closeModal} />
      </>
    );
  }
}

export default LoginButton;