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
// import { setUserData } from '../../Redux/userData/UserSlice';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export default function SignupFinal() {
  let [name, setName] = React.useState('');
  let [username, setUsername] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [confirmPassword, setConfirmPassword] = React.useState('');
  let [mobile, setMobile] = React.useState('');
//   const navigate = useNavigate()

  const handleSignupButton = async () => {
    // try {
    //   if (password !== confirmPassword) {
    //     alert("Passwords do not match");
    //     return;
    //   }
    //   const url = 'http://localhost:4000/api/v2/user/signin';
    //   const response = await axios.post(url, {
    //     name,
    //     username,
    //     email,
    //     password,
    //     mobile,
    //   },{
    //     withCredentials:true,
    //   });
    //   setUserData(response.data)
    //   navigate('/login')
    // } catch (error) {
    //   console.error("Error signing up:", error);
    // }
  }

  const loginwithgoogle = () => {
    // window.location.href = 'http://localhost:4000/auth/google';
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
          <Typography level="h4" component="h1" style={{textAlign:'center',my:5}}>
            <b>Welcome To BrandGradient</b>
          </Typography>
          {/* <Typography level="body-sm">Sign up to continue.</Typography> */}
        </div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            // html input attribute
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            // html input attribute
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            // html input attribute
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Mobile</FormLabel>
          <Input
            // html input attribute
            name="mobile"
            type="number"
            placeholder="1234567890"
            onChange={(e) => setMobile(e.target.value)}
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSignupButton} >Sign up</Button>
        <Typography
          endDecorator={<Link href="/login">Already have an account?</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Already have an account?
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