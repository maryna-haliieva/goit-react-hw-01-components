import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={style.transaction_history}>
            <thead>
                <tr>
                    <th className={style.transaction_name}>Type</th>
                    <th className={style.transaction_name}>Amount</th>
                    <th className={style.transaction_name}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(itemEl => (
                     <tr key={itemEl.id} className={style.transaction_row}>
                    <td className={style.transaction_type}>{itemEl.type}</td>
                    <td className={style.transaction_type}>{itemEl.amount}</td>
                    <td className={style.transaction_type}>{itemEl.currency}</td>
                </tr>
                ))}
               
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;