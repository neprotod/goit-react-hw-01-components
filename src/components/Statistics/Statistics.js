import React from 'react';
import PropType from 'prop-types';

import Stat from '../Stat';

import style from './Statistics.module.css';

/**
 * Statictic compontent
 *
 * @component
 * @example
 * return (
 *   <Statistics title="Upload stat" stats={stats} />
 * )
 */
const Statistics = ({ title, stats }) => {
  // Data create
  const list = stats.map(elem => {
    const tmp = elem;
    tmp.value = elem.percentage;
    tmp.liClass = elem.label.replace('.', '');
    tmp.valueClass = 'percentage';
    return tmp;
  });

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <Stat ulClass="state-list" list={list} />
    </section>
  );
};

Statistics.defaultProps = {
  title: false,
};

Statistics.propTypes = {
  title: PropType.string,
  stats: PropType.arrayOf(
    PropType.shape({
      id: PropType.oneOfType([PropType.number, PropType.string]).isRequired,
      label: PropType.string.isRequired,
      /**
       * It's value in persent
       */
      percentage: PropType.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
