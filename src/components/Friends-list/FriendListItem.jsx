import PropTypes from 'prop-types';
import css from './Friends.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friends__item}>
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        className={css.friends__status}
      ></span>
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={css.friends__name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
