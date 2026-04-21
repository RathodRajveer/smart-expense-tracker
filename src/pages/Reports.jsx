import { useExpense } from '../context/ExpenseContext';
import { getTotalExpense, getTotalIncome } from '../utils/calculations';
export default function Reports() {
    const { transactions, currency } = useExpense();
    return <div className='card'>
        <h2>Reports</h2>
        <p>Total Income: {currency}{getTotalIncome(transactions)}</p>
        <p>Total Expense: {currency}{getTotalExpense(transactions)}</p>
        <button onClick={() => window.print()}>Export PDF</button>
    </div>
}