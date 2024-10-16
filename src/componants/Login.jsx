import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import GoogleIcon from './Google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginFinal() {
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLoginButton = async () => {
    try {
      const url = 'http://localhost:4000/api/v2/user/login';
      const response = await axios.post(url, {
        email,
        password,
      }, {
        withCredentials: true,
      });
      navigate('/');
      window.location.reload();
      console.log("Logged in successfully:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  const loginwithgoogle = () => {
    // Implement Google authentication logic here
    // For example:
    window.location.href = 'http://localhost:4000/auth/google';
  }

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: '40vw',
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" style={{ textAlign: 'center', my: 5 }}>
            <b>Welcome To BrandGradient</b>
          </Typography>
        </div>
        <FormControl key="email">
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl key="password">
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLoginButton} >Log in</Button>
        <Typography
          endDecorator={<Link href="/signin">Sign in</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
        <Button
          variant="soft"
          color="neutral"
          fullWidth
          onClick={loginwithgoogle}
          startDecorator={<GoogleIcon />}
        >
          Continue with Google
        </Button>
      </Sheet>
    </main>
  );
}