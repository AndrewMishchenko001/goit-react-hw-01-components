import PropTypes from 'prop-types'
import s from "./Transaction.module.css";

export default function TransactionHistory({ transactions }) {
    return (
        <table className={s.transactionHistory}>
            <thead className = {s.head}>
                <tr>
                    <th className={s.title}>Type</th>
                    <th className={s.title}>Amount</th>
                    <th className={s.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
   transactions : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
       amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

    })),
  }