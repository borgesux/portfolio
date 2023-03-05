import { AppBar, Button, Grid, Menu, MenuItem, MenuList, Typography } from '@mui/material';

import React from 'react';
import { Link as RouterLink } from "react-router-dom";

interface ItemList {
    label: string;
    link: string;
}

interface Props {
    children?: React.ReactNode;
    links?: ItemList[];
}

const NavBar: React.FC<Props> = ({ children, ...props }) => {
    return (
        <MenuList 
            sx={{
                display: "flex",
                border: (theme) => `1px solid ${theme.palette.backgroundColor.backgroundBorder}`,
                background: (theme) => theme.palette.backgroundColor.secondary,
                borderRadius: "0 15px",
            }}     >  
        {props.links?.map( (item ,itemIndex) => {
            return(
                <MenuItem key={itemIndex}>
                    <Button component={RouterLink} to={item.link}>
                        <Typography variant="subtitle1"
                            sx={{ 
                                    color: (theme) => theme.palette.textColor?.default,
                                    textTransform: "capitalize",
                                }}> 
                            {item.label} 
                        </Typography> 
                    </Button>  
                </MenuItem>
            )
        })}
    </MenuList>
    )
}

export default NavBar;


