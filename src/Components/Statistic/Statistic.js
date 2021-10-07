import PropTypes from "prop-types";
import s from "../Statistic/Statistic.module.css";

export default function Statistics({ stats, title }) {
  const colors = ["#FFD700", "#4CAF50", "#2196F3", "#E91E63", "#607D8B"];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((statItem, index) => (
          <li
            key={statItem.id}
            className={s.item}
            style={{ backgroundColor: colors[index] }}
          >
            <span className={s.label}>{statItem.label}</span>
            <span className={s.percentage}>{statItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
