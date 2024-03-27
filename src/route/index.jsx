import { Navigate, Route, Routes } from 'react-router-dom';
import Front from '../page/frontpage';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import Dashboard from '../page/Dashboard';
import LawyerProfile from '../page/LawyerProfile';
import CategoryLawyer from '../page/CategoryLawyer';
import Messages from '../page/Messages';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Front />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/message' element={<Messages />} />          
          <Route path='/lawyer/category' element={<CategoryLawyer />} />
          <Route path='/lawyer/profile' element={<LawyerProfile />} />
          <Route path='/dashboard' element={<Dashboard />} /> 
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Front />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};