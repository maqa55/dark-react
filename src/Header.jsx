import * as React from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from './context/ThemeContext';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { theme, setTheme } = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const appBarStyle = {
        backgroundColor: theme === "dark" ? '#333' : '#fff',
        color: theme === "dark" ? 'white' : 'black',
    };

    const drawerStyle = {
        backgroundColor: theme === "dark" ? '#333' : '#fff',
        color: theme === "dark" ? 'white' : 'black',
    };

    const buttonStyle = {
        color: theme === "dark" ? '#fff' : '#000', 
    };

    const switchButtonStyle = {
        color: theme === "dark" ? '#fff' : '#000', 
    };

    return (
        <div className={`app ${theme === "dark" ? theme : "light"}`}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={appBarStyle}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={buttonStyle}>
                                    {item}
                                </Button>
                            ))}

                            <label className="switch" style={switchButtonStyle}>
                                <input
                                    id="input"
                                    type="checkbox"
                                    checked={theme === "dark"}
                                    onChange={handleThemeToggle}
                                />
                                <div className="slider round">
                                    <div className="sun-moon">
                                        <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                    </div>
                                    <div className="stars">
                                        <svg id="star-1" className="star" viewBox="0 0 20 20">
                                            <path
                                              d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, 
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { 
                                ...drawerStyle, 
                                boxSizing: 'border-box', 
                                width: drawerWidth 
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Box component="main" sx={{ p: 4 }} />
            </Box>
        </div>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
