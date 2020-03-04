import React, { Component } from "react";
import "./WithModalBackdrop.css";

const WithModalBackdrop = WrappedComponent => {
  return class ModalBackdrop extends Component {
    state = {
      isModalOpen: false
    };

    componentDidMount() {
      document.onkeydown = this.closeModal;
    }

    componentWillUnmount() {
      document.onkeydown = null;
    }

    openModal = () => {
      this.setState({
        isModalOpen: true
      });
    };

    closeModal = event => {
      if (event.key && event.code === "Escape") {
        this.setState({
          isModalOpen: false
        });
      }

      if (
        event.target.className === "modalBackdrop" ||
        event.target.className === "closeBtn"
      ) {
        this.setState({
          btnName: "Open",
          isModalOpen: false
        });
      }
    };

    render() {
      const { isModalOpen } = this.state;
      return (
        <>
          <button onClick={this.openModal}>
            {this.state.isModalOpen ? "Close" : "Open"}
          </button>
          {isModalOpen && (
            <div className="modalBackdrop" onClick={this.closeModal}>
              <WrappedComponent
                {...this.props}
                onCloseModal={this.closeModal}
              />
            </div>
          )}
        </>
      );
    }
  };
};

export default WithModalBackdrop;
