import { Outlet } from 'react-router-dom';
import Menu from './components/Menu/index';

const App = () => {
  return (
    <div className='bg-slate-600  text-slate-100'>
    <Menu />
    <main className='p-4'>
      <Outlet />
    </main>
    </div>
  );
};
export default App;
