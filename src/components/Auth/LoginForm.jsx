import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/Logo.png';
import doctor from '../../assets/login.png';
import Logo from '../Common/logo';
import ApiCall from './ApiCall';
import CustomTextField from '../Common/CustomTextField';
import {
  Container,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Link,
  InputAdornment,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff, Person, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        width: '90%',
        maxWidth: '90%',
        mr: 2,
        ml: 2,
        pr: 2,
        pl: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={7}>
          <Logo src={doctor} alt="logo" width="82%" />
        </Grid>
        <Grid item xs={12} md={5} sx={{ position: 'relative', minHeight: '90vh', height: '100%', paddingTop: '10%' }}>
          <Logo src={logo} alt="logo" width="45%" margin="0 auto" />
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
            Welcome back! Please login to your account.
          </Typography>
          <Formik
            initialValues={{ email: '', password: '', rememberMe: true }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => ApiCall(values, { ...actions, navigate, setLoading })}
          >
            {({ errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
              <Box sx={{ width: '80%', mx: 'auto' }}>
                <Form>
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Person
                      sx={{
                        color: 'primary.main',
                        zIndex: 1,
                        position: 'absolute',
                        top: '15px',
                        left: '10px',
                        fontSize: '18px',
                        mr: 1,
                      }}
                    />
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      name="email"
                      type="text"
                      label="User Name or Number Phone"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      InputProps={{
                        sx: {
                          fontSize: '12px',
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          paddingLeft: '30px',
                          fontSize: '12px',
                          color: '#c2b8b8',
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Lock
                      sx={{
                        color: 'primary.main',
                        zIndex: 1,
                        position: 'absolute',
                        top: '15px',
                        left: '10px',
                        fontSize: '18px',
                        mr: 1,
                      }}
                    />
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      name="password"
                      type={passwordVisible ? 'text' : 'password'}
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        sx: {
                          fontSize: '12px',
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {passwordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        sx: {
                          paddingLeft: '30px',
                          fontSize: '12px',
                          color: '#c2b8b8',
                        },
                      }}
                    />
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <FormControlLabel
                      control={<Checkbox name="rememberMe" color="primary" />}
                      label="Remember me"
                    />
                    <Link href="/forgot-password" underline="none">
                      Forgot Password
                    </Link>
                  </Box>
                  {errors.apiError && (
                    <Typography color="error" sx={{ mb: 2 }}>
                      {errors.apiError}
                    </Typography>
                  )}
                  <Box display="flex" justifyContent="space-between">
                    <Button
                      variant="outlined"
                      color="primary"
                      type="button"
                      sx={{
                        borderRadius: 3,
                        height: 45,
                        flexGrow: 1,
                        marginRight: 2.5,
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                      }}
                    >
                      Register
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      sx={{
                        borderRadius: 3,
                        flexGrow: 1,
                        marginLeft: 2.5,
                        '&:hover': { backgroundColor: '#1976d2' },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </Form>
              </Box>
            )}
          </Formik>
          <Box sx={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
            <Typography variant="body2">
              By signing up you agree to our Privacy Policy and Terms.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default LoginForm;
