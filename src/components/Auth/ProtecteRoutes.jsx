import { Navigate, Outlet } from 'react-router-dom';

 const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');

  return token==='mockToken12345'; 
  // return true;
};
const ProtecteRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtecteRoutes;