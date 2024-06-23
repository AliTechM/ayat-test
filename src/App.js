import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import AddServicePage from './pages/AddServicePage';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import ProtecteRoutes from './components/Auth/ProtecteRoutes';



const routers = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    element: <ProtecteRoutes />,
    children: [
      {
        path: '/home', element: <Layout />,
        children: [
          { path: "services", element: <ServicesPage /> },
          { path: "services/add", element: <AddServicePage /> }
        ]
      }
    ]
  },
  { path: "*", element: <NotFound /> }
], {
  
});

const App = () => {
  return (
    <RouterProvider router={routers} />
  );
};

export default App;
