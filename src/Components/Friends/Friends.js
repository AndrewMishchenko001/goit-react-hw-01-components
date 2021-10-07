import PropTypes from "prop-types";
import FriendsListItem from "./FriendListItem";
import s from "./Friends.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <FriendsListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
