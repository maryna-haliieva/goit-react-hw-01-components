import PropTypes from 'prop-types';
import style from './FriendList.module.css'
import FriendItem from './FriendItem'


const FriendList = ( {friends} ) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendItem avatar={avatar} name ={name} isOnline = {isOnline} key={id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};



export default FriendList;

