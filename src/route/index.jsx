import { Navigate, Route, Routes } from 'react-router-dom';
// import Front from '../page/frontpage';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import Dashboard from '../page/Dashboard';
import LawyerProfile from '../page/LawyerProfile';
import CategoryLawyer from '../page/CategoryLawyer';
import Messages from '../page/Messages';
import Chats from '../page/Chats';
import UserProfile from '../page/UserProfile';
import Front from '../page/frontpage';
import ProfilePage from '../page/ProfilePage';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Front/>} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/message' element={<Messages />} />
          <Route path='/user/:userId/chat/:userName' element={<Chats />} />
          <Route path='/profile' element={<UserProfile />} />                   
          <Route path='/lawyer/category/:categoryId' element={<CategoryLawyer />} />
          <Route path='/lawyer/profile' element={<LawyerProfile />} />
          <Route path='/lawyer/profile/:lawyerId' element={<ProfilePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};