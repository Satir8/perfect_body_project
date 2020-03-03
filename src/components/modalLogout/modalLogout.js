import React, { Component } from 'react'
import styles from './modalLogout.module.css';


class ModalLogout extends Component {
    state = {  }
    render() {
        return (
            <>
            <div className={styles.moduleCase}>
                    <p>
                        ты хочешь выйти?
                    </p>
                    <hr className={styles.line}></hr>
                    <div className={styles.btnCase}>
                    <button>
                        да
                    </button>
                    <button>
                        нет, я хочу остаться
                    </button>
                    </div>
            </div>
            </>
        );
    }
}

export default ModalLogout;