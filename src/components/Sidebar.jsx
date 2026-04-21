import { NavLink } from 'react-router-dom';
export default function Sidebar() {
    return <aside className='sidebar'>
        <h2>Smart Tracker</h2>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='/transactions'>Transactions</NavLink>
        <NavLink to='/reports'>Reports</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
    </aside>
}