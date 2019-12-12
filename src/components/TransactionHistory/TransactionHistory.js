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
  const transactionHeader = (
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  );

  // Count items for calculation even
  const transactionBody = items.map((item, index) => {
    // Calculation even
    const trClass = (index % 2 === 1 && 'even') || 'not-even';

    return (
      <tr className={style[trClass]} key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={style['transaction-history']}>
      <thead>{transactionHeader}</thead>

      <tbody>{transactionBody}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.any.isRequired,
      type: PropType.string.isRequired,
      amount: PropType.any.isRequired,
      currency: PropType.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
