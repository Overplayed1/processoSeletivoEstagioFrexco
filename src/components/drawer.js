import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

const pages = ["Products", "AboutUs"];

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>

            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index} component={Link} to={`/${page}`}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;