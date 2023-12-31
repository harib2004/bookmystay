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
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';


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

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        axios.post('http://localhost:3000/users', {
            FirstName, LastName, Email, Password
        })
            .then(res => { alert('sign up successful') })
            .catch(err => { console.log(err) })
        navigate('/signin')

    };
    //password
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //navigate
    const navigate = useNavigate();

    const [FirstName, setFirstname] = React.useState('');
    const [LastName, setLastname] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Password, setPasssword] = React.useState('');


    return (

        <div>

            <div className="Menu">
                <div className="item1">
                    BOOK MY STAY
                </div>
            </div>
            <ThemeProvider theme={defaultTheme}>

                <Container component="main" maxWidth="xs" className='ct'>

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
                            Sign up
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            variant='standard'
                                            value={FirstName}
                                            onChange={(event) => { setFirstname(event.target.value) }}

                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            variant='standard'
                                            autoComplete="family-name"
                                            value={LastName}
                                            onChange={(event) => { setLastname(event.target.value) }}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            variant='standard'
                                            autoComplete="email"
                                            value={Email}
                                            onChange={(event) => { setEmail(event.target.value) }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            id="standard-adornment-password"
                                            label="Password*"
                                            variant='standard'
                                            value={Password}
                                            onChange={(event) => { setPasssword(event.target.value) }}
                                            type={showPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (

                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>

                                                ),
                                            }}

                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}

                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to='/signin' variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Box>

                    <Copyright sx={{ mt: 5 }} />

                </Container>
            </ThemeProvider >
            <div className="main-footer">
                <p className="col-sm">
                    BookMyStay &copy;{new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </div>
    );
}