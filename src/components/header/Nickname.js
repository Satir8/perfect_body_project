import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

const Nickname = ({nickname, onOpenExitModal}) => (
  <div className={styles.nickNameContainer}>
    <p
      className={[styles.hdrAuthListItem, styles.hdrAuthListItemBold].join(' ')}
    >
      {nickname}
    </p>
    <p
      onClick={onOpenExitModal}
      className={[styles.hdrAuthListItem, styles.hdrAuthListItemLink].join(' ')}
    >
      Выйти
    </p>
  </div>
);

const mapStateToProps = state => ({
  nickname: state.session.user
});

export default connect(mapStateToProps)(Nickname);
