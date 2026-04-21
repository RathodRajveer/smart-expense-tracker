import { createContext, useContext, useEffect, useState } from 'react';
const ExpenseContext = createContext();
const key = 'transactions';
export const ExpenseProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem(key)) || []);
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || '₹');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => localStorage.setItem(key, JSON.stringify(transactions)), [transactions]);
    useEffect(() => localStorage.setItem('currency', currency), [currency]);
    useEffect(() => { localStorage.setItem('theme', theme); document.body.className = theme; }, [theme]);
    const add = (item) => setTransactions([...transactions, { ...item, id: Date.now() }]);
    const remove = (id) => setTransactions(transactions.filter(t => t.id !== id));
    const update = (item) => setTransactions(transactions.map(t => t.id === item.id ? item : t));
    const clear = () => setTransactions([]);
    return <ExpenseContext.Provider value={{ transactions, add, remove, update, clear, currency, setCurrency, theme, setTheme }}>{children}</ExpenseContext.Provider>
}
export const useExpense = () => useContext(ExpenseContext);