import PropTypes from 'prop-types';
import style from './Statistics.module.css'


const Statistics = ({ stats, title }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style.statList}>
                {stats.map(statEl => 
                    <li className={style.item} key={statEl.id}>
                        <span className={style.label}>{statEl.label}</span>
                        <span className={style.percentage}>{statEl.percentage}</span>
                    </li>
                )}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;