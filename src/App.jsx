import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  
  return (
    <>
      <Nav></Nav>
      <h1 className="text-2xl font-bold text-center my-4"></h1>
      <div className='flex justify-center gap-4'>
        <NavLink to={'/'} className='w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 '>Contact Us</NavLink>
        <NavLink to={'/userDetails'} className='w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 '>View User Details</NavLink>
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default App;
