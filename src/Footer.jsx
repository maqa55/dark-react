import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { useTheme } from './context/ThemeContext';
const Footer = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className={`app ${theme === "dark" ? theme : "light"}`}>
            <footer style={{
                backgroundColor: theme === "dark" ? '#333' : '#fff',
                color: theme === "dark" ? 'white' : 'black',
                padding: '20px 0',
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} justifyContent="space-between">
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" align="left">
                                My Website
                            </Typography>
                            <Typography variant="body2" align="left">
                                © {new Date().getFullYear()} My Website. All rights reserved.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} container justifyContent="flex-end">
                            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                                Privacy Policy
                            </Link>
                            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                                Terms of Service
                            </Link>
                            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
                                Contact Us
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
