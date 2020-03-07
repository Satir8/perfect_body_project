import React, { Component } from 'react';
import styles from './Header.module.css';
import Burger from './Burger';
import NavPage from '../../pages/navPage/NavPage';
import { connect } from 'react-redux';
import ModalLogout from '../modalLogout/modalLogout';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/auth/authActions';
import Nickname from './Nickname';

const burgerIcon = styles.hrdBurger;
const closeIcon = styles.hrdBurgerClose;

class Header extends Component {
  state = {
    showExitModal: false
  };

  openExitModal = () => {
    console.log('aaaaaaaaaaaaaaa')
    this.setState({showExitModal: true})
  }

  closeModal = () => {
    this.setState({showExitModal: false});
  };


  render() {
    const { showExitModal } = this.state
    const { isMobile, isTablet, isDesktop, auth, logOut } = this.props;
    return (
      <>
      <div className={styles.hdrContainer}>
        <Link to='/' className={styles.hdrLogo}>
          Perfect<span>Body</span>
        </Link>
        {isMobile && <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />}
        {isTablet && (
          <>
            <div className={styles.hdrAuthList}>
              {auth ? <Nickname onOpenExitModal={this.openExitModal} /> : (
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
            {auth && <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />}
          </>
        )}
        {isDesktop && <NavPage openExitModal={this.openExitModal} />}
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