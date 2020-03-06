import React, { Component } from "react";
import styles from "./modalLogout.module.css";

class ModalLogout extends Component {
  state = { isOpen: false };

  openModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  closeModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };
  render() {
    return (
      <>
        <button onClick={() => this.openModal()}>Logout</button>
        {this.state.isOpen && (
          <div className={styles.centerCase}>
            <div className={styles.moduleCase}>
              <img
                alt="close"
                onClick={() => this.closeModal()}
                className={styles.btnClose}
                src="https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png"
              />
              <p className={styles.text}>Ты дейсвтительно хочешь выйти?</p>
              <hr className={styles.line}></hr>
              <div className={styles.btnCase}>
                <button className={styles.btnYes}>Да</button>
                <button
                  onClick={() => this.closeModal()}
                  className={styles.btnNo}
                >
                  Нет, я хочу остаться
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ModalLogout;
