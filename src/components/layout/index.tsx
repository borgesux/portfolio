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
        label: "Home",
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
        <Grid container justifyContent={"center"} sx={{ width: "auto" ,overflow: "hidden", margin: 0.8}}  gap={2}>

            <Grid item xs={12} sm={10} md={10} lg={2.5} className={classes.griditem}>
                <LeftSideContent/>
            </Grid>

            <Grid item xs={12} sm={10} md={10} lg={8} className={classes.griditem}>
                <Grid container justifyContent={"flex-end"} height={"3rem"} > 
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
        background: theme.palette.backgroundColor.primary, 
        border:`2px solid ${theme.palette.backgroundColor.backgroundBorder}`,
        borderRadius: 16, 
    },
}));

