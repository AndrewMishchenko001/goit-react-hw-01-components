import s from "./Friends.module.css";

export default function FriendsListItem({ name, avatar, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
