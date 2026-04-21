export const getTotalIncome = a => a.filter(x => x.type === 'Income').reduce((s, x) => s + +x.amount, 0);
export const getTotalExpense = a => a.filter(x => x.type === 'Expense').reduce((s, x) => s + +x.amount, 0);
export const getBalance = a => getTotalIncome(a) - getTotalExpense(a);
export const getMonthlySavings = a => getBalance(a);
export const getCategoryTotals = a => {
    const obj = {};
    a.filter(x => x.type === 'Expense').forEach(x => obj[x.category] = (obj[x.category] || 0) + +x.amount);
    return Object.keys(obj).map(k => ({ name: k, value: obj[k] }));
}