import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ children }) => {
  return <ul className={css.friends__list}>{children}</ul>;
};

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
