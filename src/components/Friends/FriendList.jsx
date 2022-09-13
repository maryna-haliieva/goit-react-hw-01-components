import style from './FriendList.module.css'
import FriendItem from './FriendItem'


const FriendList = ( {friends} ) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendItem props={friend} key={friend.id} />
      ))}
    </ul>
  );
};



export default FriendList;