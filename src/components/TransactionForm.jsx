import { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';
const init = { title: '', amount: '', type: 'Income', category: 'Salary', date: '', notes: '' };
export default function TransactionForm() {
    const [form, setForm] = useState(init); const { add } = useExpense();
    const submit = e => { e.preventDefault(); if (!form.title || form.amount <= 0) return alert('Fill valid data'); add(form); setForm(init) };
    return <form className='form' onSubmit={submit}>
        {Object.keys(init).map(k => k === 'type' ? <select key={k} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}><option>Income</option><option>Expense</option></select> :
            <input key={k} placeholder={k} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} />)}
        <button>Add Transaction</button></form>
}