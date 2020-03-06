import React, { Component } from 'react';
import styles from './Header.module.css';
import Burger from './Burger';
import NavPage from '../../pages/navPage/NavPage';
import { connect } from 'react-redux';
import ModalLogout from '../modalLogout/modalLogout';

const burgerIcon = styles.hrdBurger;
const closeIcon = styles.hrdBurgerClose;

class Header extends Component {
  state = {
    showExitModal: false
  };

  openExitModal = () => {
    this.setState({showExitModal: true})
  }

  closeModal = () => {
    this.setState({showExitModal: false});
  };


  render() {
    console.log(this.state);
    const { showExitModal } = this.state
    const { isMobile, isTablet, isDesktop, auth, nicname } = this.props;
    return (
      <>
      <div className={styles.hdrContainer}>
        <p className={styles.hdrLogo}>
          Slim<span>Mom</span>
        </p>
        {isMobile && <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />}
        {isTablet && (
          <>
            <div className={styles.hdrAuthList}>
              {true ? (
                <>
                  <p
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemBold
                    ].join(' ')}
                  >
                    nicname
                  </p>
                  <p
                    onClick={() => this.openExitModal()}
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemLink
                    ].join(' ')}
                  >
                    Выйти
                  </p>
                </>
              ) : (
                <>
                  <p
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemLink
                    ].join(' ')}
                  >
                    Вход
                  </p>
                  <p
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemLink
                    ].join(' ')}
                  >
                    Регистрация
                  </p>
                </>
              )}
            </div>
            <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />
          </>
        )}
        {isDesktop && <NavPage />}
      </div>
      {showExitModal && <ModalLogout closeModal={this.closeModal} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.session.authenticated,
  nicname: state.session.user
});

export default connect(mapStateToProps)(Header);