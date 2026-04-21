import { useExpense } from '../context/ExpenseContext';
export default function Settings() {
    const { currency, setCurrency, clear } = useExpense();
    return <div className='card'>
        <h2>Settings</h2>
        <select value={currency} onChange={e => setCurrency(e.target.value)}><option>₹</option><option>$</option><option>€</option></select>
        <button onClick={clear}>Clear All Data</button>
    </div>
}