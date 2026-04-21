import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
export default function Charts({ pieData, barData }) {
    return <div className='charts'>
        <ResponsiveContainer width='48%' height={260}><PieChart><Pie data={pieData} dataKey='value' nameKey='name' outerRadius={90} /><Tooltip /></PieChart></ResponsiveContainer>
        <ResponsiveContainer width='48%' height={260}><BarChart data={barData}><XAxis dataKey='name' /><YAxis /><Bar dataKey='value' /><Tooltip /></BarChart></ResponsiveContainer>
    </div>
}