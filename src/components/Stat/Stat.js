import React from 'react';
import PropType from 'prop-types';

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
    const newClass = elem.class ? elem.class : 'quantity';

    return (
      <li key={elem.id}>
        <span className="label">{elem.label}</span>
        <span className={newClass}>{elem.value}</span>
      </li>
    );
  });

  return <ul className={ulClass}>{lis}</ul>;
};

Stat.propTypes = {
  ulClass: PropType.string.isRequired,
  list: PropType.arrayOf(
    PropType.shape({
      id: PropType.any.isRequired,
      label: PropType.string.isRequired,
      /**
       * It's value such as folowers, view ets.
       */
      value: PropType.number.isRequired,
      /**
       * If need new class for wrap value
       */
      class: PropType.string,
    }),
  ).isRequired,
};

export default Stat;
