import { useExpense } from '../context/ExpenseContext';
export default function Navbar() {
    const { theme, setTheme } = useExpense();
    return <header className='navbar'>
        <h3>Expense Dashboard</h3>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
    </header>
}