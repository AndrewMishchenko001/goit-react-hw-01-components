import PropTypes from 'prop-types';
import s from "./Friends.module.css"

export default function FriendList({ friends }) {
    return (<ul className={s.friendsList}>
        {friends.map((friend) => (
            
            <li key={friend.id} className={s.item}>
                <span className={friend.isOnline?s.online:s.offline}>{friend.isOnline}</span>
                <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={s.name}>{friend.name}</p>
            </li>))}

    </ul>);
}
FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
    })),
  }