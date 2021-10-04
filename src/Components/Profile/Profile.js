import PropTypes from 'prop-types'
import s from '../Profile/Profile.module.css'
import defaultImage from '../../Components/default.jpg'

export default function Profile({ name, tag, location, avatar = defaultImage, stats }) {
    return (
        <div className={s.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt={name}
                    className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>);
}

Profile.propTypes = {
     name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}