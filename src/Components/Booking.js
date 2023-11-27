import { Container, Paper, TextField } from "@mui/material";
import React from "react";

export default function Booking() {
    return (
        <div>
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
                            Book Now
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="person1"
                                            required
                                            fullWidth
                                            id="person1"
                                            label="Person 1"
                                            variant='standard'
                                            value={Person1}
                                            //onChange={(event) => { setFirstname(event.target.value) }}

                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="person2"
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
        </div>
    )
}