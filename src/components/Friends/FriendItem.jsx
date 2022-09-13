import style from './FriendItem.module.css'
import defaultImage from '../Profile/defaultImage.png'

const FriendItem = ({ props }) => {
    const { avatar = defaultImage, name, isOnline } = props;
    return (
        <li className={style.item}>
            <span className={isOnline ? style.online : style.offline}>
                {isOnline}
  </span>
  <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
</li>
    )
  
};
export default FriendItem;