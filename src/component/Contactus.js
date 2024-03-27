import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Contactus = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('An email was submitted:', email);
    };

    return (
        <Box>
            <Container maxWidth="xs">
                <Typography variant="h4" align="center" gutterBottom>
                    Log In
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmit}
                        >
                            Log In
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" align="center">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contactus;