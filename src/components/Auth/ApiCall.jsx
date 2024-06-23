import axios from 'axios';

const ApiCall = async (values, { setSubmitting, setErrors, navigate, setLoading }) => {
  setLoading(true); 
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: values.email,
      password: values.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data && response.data.token) {
      if (values.rememberMe) {
        localStorage.setItem('authToken', response.data.token);
      } else {
        sessionStorage.setItem('authToken', response.data.token);
      }
      
      navigate('/home/services'); 
    } else {
      throw new Error('Unexpected response from server');
    }
  } catch (error) {
    setSubmitting(false);
    if (error.response && error.response.data) {
      setErrors({ apiError: error.response.data.message });
    } else {
      setErrors({ apiError: 'An unknown error occurred. Please try again later.' });
    }
  } finally {
    setLoading(false); 
  }
};

export default ApiCall;
