import React from 'react';

import { Grid, createStyles } from '@mui/material';

import {  Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import LeftSideContent from '@components/leftSideContent';
import NavBar from '@components/navbar';

import ROUTES from '@config/routes';

interface Props {
    children?: React.ReactNode;
}

const links = [
    {
        label: "Sobre",
        link: ROUTES.HOME,
    },
    {
        label: "Sobre",
        link: ROUTES.ABOUT,
    },
    // {
    //     label: "Portfolio",
    //     link: ROUTES.PORTFOLIO,
    // },
    {
        label: "Servico",
        link: ROUTES.SERVICES,
    },
    {
        label: "Contato",
        link: ROUTES.CONTACT,
    }
]


const Layout: React.FC<Props> = ({ children, ...props }) => {
    const classes = useStyles();

    return (
        <Grid container justifyContent={"center"} gap={2} margin={4} sx={{ width: "auto" ,overflowX: "hidden"}}>

            <Grid item xs={12} md={2.5} className={classes.griditem}>
                <LeftSideContent/>
            </Grid>

            <Grid item xs={12} md={8} className={classes.griditem}>
                <Grid container xs={12} justifyContent={"flex-end"} > 
                    <Grid item>
                        <NavBar links={links}/>
                    </Grid>     
                </Grid>
                {children}
            </Grid>
        </Grid>
    )
}

export default Layout;

const useStyles = makeStyles((theme: Theme) => ({
    griditem: {
        background:  theme.palette.backgroundColor.primary, 
        border:`2px solid ${theme.palette.backgroundColor.backgroundBorder}`,
        borderRadius: 16, 
    },
}));

