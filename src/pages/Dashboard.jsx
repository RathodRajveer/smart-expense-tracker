import { useExpense } from '../context/ExpenseContext';
import { getBalance, getTotalExpense, getTotalIncome, getMonthlySavings, getCategoryTotals } from '../utils/calculations';
import SummaryCards from '../components/SummaryCards';
import TransactionTable from '../components/TransactionTable';
import Charts from '../components/Charts';
export default function Dashboard() {
    const { transactions, currency } = useExpense();
    const bar = [{ name: 'Income', value: getTotalIncome(transactions) }, { name: 'Expense', value: getTotalExpense(transactions) }];
    return <>
        <div className='grid'>
            <SummaryCards title='Balance' value={currency + getBalance(transactions)} />
            <SummaryCards title='Income' value={currency + getTotalIncome(transactions)} />
            <SummaryCards title='Expense' value={currency + getTotalExpense(transactions)} />
            <SummaryCards title='Savings' value={currency + getMonthlySavings(transactions)} />
        </div>
        <Charts pieData={getCategoryTotals(transactions)} barData={bar} />
        <TransactionTable />
    </>
}