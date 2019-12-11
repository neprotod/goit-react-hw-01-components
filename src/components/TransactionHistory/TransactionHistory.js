import React from 'react';
import PropType from 'prop-types';

import style from './TransactionHistory.module.css';

/**
 *  Get transaction component
 *
 *  @component
 *  @example
 *  return (
 *    <TransactionHistory items={transactions} />
 *  )
 */
const TransactionHistory = ({ items }) => {
  if (!items[0]) return null;
  // We take all property names for th element
  const thHead = Object.keys(items[0]).map((elem, index) => {
    const key = index;
    if (elem === 'id') return false;

    const name = elem[0].toUpperCase() + elem.slice(1);
    return <th key={key}>{name}</th>;
  });

  // Count items for calculation even
  let countItems = 0;
  const trs = items.map(elem => {
    // Calculation even
    const trClass = (countItems % 2 === 1 && 'even') || 'not-even';
    countItems += 1;

    const tds = Object.keys(elem).map((td, index) => {
      const key = index;
      if (td === 'id') return false;

      return <td key={key}>{elem[td]}</td>;
    });

    return (
      <tr className={style[trClass]} key={elem.id}>
        {tds}
      </tr>
    );
  });

  return (
    <table className={style['transaction-history']}>
      <thead>
        <tr>{thHead}</tr>
      </thead>

      <tbody>{trs}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.any.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
