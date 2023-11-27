import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignIn.css';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="/">
                BookMyStay
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {



    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [Email, setEmail] = React.useState('');
    const [Password, setPasssword] = React.useState('');


    const navigate = useNavigate();
    const hsubmit = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:3000/users?Email=${Email}&Password=${Password}`)
            .then(res => {
                if (res.data.length > 0) {
                    alert("log in Succesful")
                    navigate('/')
                }
                else {
                    alert('Invalid username or password')
                }
            }
            )
    };


    return (
        <div className='whole'>


            <div className="outer">
                <ThemeProvider theme={defaultTheme}>

                    <Container component="main" maxWidth="xs" className='siemail'>
                        <CssBaseline />

                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in
                            </Typography>
                            <form onSubmit={hsubmit}>
                                <Box sx={{ mt: 1 }} >
                                    <TextField

                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        variant='standard'
                                        value={Email}
                                        onChange={(event) => { setEmail(event.target.value) }}
                                        autoFocus

                                    />

                                    <TextField
                                        fullWidth
                                        id="standard-adornment-password"
                                        label="Password*"
                                        variant='standard'
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={Password}
                                        onChange={(event) => { setPasssword(event.target.value) }}
                                        InputProps={{
                                            endAdornment: (

                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}

                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>

                                            ),
                                        }}

                                    />


                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}






                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link to="/signup" variant="body2">
                                                "Don't have an account? Sign Up"
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </form>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />

                    </Container>

                </ThemeProvider>
            </div>

        </div>
    );
}