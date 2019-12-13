import React from 'react';
import PropType from 'prop-types';

import style from './Stat.module.css';

/**
 * It's ul element
 *
 * @component
 * @example
 * return (
 *   <Stat ulClass={class} list={list} />;
 * )
 */
const Stat = ({ ulClass, list }) => {
  // Create li elements
  const lis = list.map(elem => {
    const valueClass = elem.valueClass
      ? style[elem.valueClass]
      : style.quantity;

    // Add , to thousand
    const value = String(elem.value).replace(
      /(?<=\d)(?=(\d{3})+(?!\d))/g,
      '$&,',
    );

    return (
      <li key={elem.id} className={style[elem.liClass]}>
        <span className={style.label}>{elem.label}</span>
        <span className={valueClass}>{value}</span>
      </li>
    );
  });

  return <ul className={style[ulClass]}>{lis}</ul>;
};

Stat.propTypes = {
  ulClass: PropType.string.isRequired,
  list: PropType.arrayOf(
    PropType.shape({
      id: PropType.oneOfType([PropType.number, PropType.string]).isRequired,
      label: PropType.string.isRequired,
      /**
       * It's value such as folowers, view ets.
       */
      value: PropType.number.isRequired,
      /**
       * If need new class for wrap value
       */
      valueClass: PropType.string,
      /**
       * If need new class for wrap value
       */
      liClass: PropType.string,
    }),
  ).isRequired,
};

export default Stat;
