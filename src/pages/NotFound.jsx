import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home/services');
    }, 1000);

    return () => clearTimeout(timer); // Cleanup  timer 
  }, [navigate]);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default NotFound;
