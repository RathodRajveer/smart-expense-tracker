import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import './App.css';

export default function App(){
 return (
 <div className='layout'>
  <Sidebar />
  <div className='main'>
   <Navbar />
   <div className='content'>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/transactions' element={<Transactions/>} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
   </div>
   <Footer />
  </div>
 </div>)
}