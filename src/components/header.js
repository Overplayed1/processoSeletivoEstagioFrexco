import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DrawerComp from './drawer';
import {Link} from 'react-router-dom';

const pages = ["Home","Products", "AboutUs"];
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#000000' }}>
                <Toolbar>
                    <IconButton href="/Home">
                        <HomeIcon sx={{ color: 'white' }} />
                    </IconButton>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: '1.5rem', paddingLeft: '10%' }}>
                                    Hortifruti
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    textColor='inherit'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="primary">
                                    {pages.map((page) => (
                                        <Tab key={page} label={page} component={Link} to={`/${page}`}/>
                                                                             
                                    ))}
                                </Tabs>
                                <IconButton component={Link} to={`/ShoppingCart`} sx={{ color: 'white', marginLeft: 'auto' }} aria-label="ir para carrinho de compras">
                                    <ShoppingCartIcon />
                                </IconButton>
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header