import { useExpense } from '../context/ExpenseContext';
export default function TransactionTable() {
    const { transactions, remove, currency } = useExpense();
    if (!transactions.length) return <div className='empty'>No transactions yet</div>;
    return <table className='table'><thead><tr><th>Title</th><th>Amount</th><th>Type</th><th>Action</th></tr></thead><tbody>
        {transactions.map(t => <tr key={t.id}><td>{t.title}</td><td>{currency}{t.amount}</td><td>{t.type}</td><td><button onClick={() => remove(t.id)}>Delete</button></td></tr>)}
    </tbody></table>
}