import React, { Component } from 'react';
import styles from './Header.module.css';
import Burger from './Burger';
import NavPage from '../../pages/navPage/NavPage';
import { connect } from 'react-redux';
import ModalLogout from '../modalLogout/modalLogout';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/auth/authActions';

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
    const { showExitModal } = this.state
    const { isMobile, isTablet, isDesktop, auth, nickname, logOut } = this.props;
    return (
      <>
      <div className={styles.hdrContainer}>
        <Link to='/' className={styles.hdrLogo}>
          Slim<span>Mom</span>
        </Link>
        {isMobile && <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />}
        {isTablet && (
          <>
            <div className={styles.hdrAuthList}>
              {auth ? (
                <>
                  <p
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemBold
                    ].join(' ')}
                  >
                    {nickname}
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
                  <Link to="/authorization"
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemLink
                    ].join(' ')}
                  >
                    Вход
                  </Link>
                  <Link to="/authorization"
                    className={[
                      styles.hdrAuthListItem,
                      styles.hdrAuthListItemLink
                    ].join(' ')}
                  >
                    Регистрация
                  </Link>
                </>
              )}
            </div>
            <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />
          </>
        )}
        {isDesktop && <NavPage />}
      </div>
      {showExitModal && <ModalLogout closeModal={this.closeModal} logOut={logOut} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.session.authenticated,
  nickname: state.session.user
});

export default connect(mapStateToProps, {logOut})(Header);