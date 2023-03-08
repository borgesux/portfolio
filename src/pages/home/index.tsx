import React from 'react';

import { Grid, Theme, Typography,  } from '@mui/material';
import { makeStyles } from "@mui/styles";
import DividerHigh from '@components/dividerHigh';
import Layout from '@components/layout';
interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <>
            <Layout>
                <Grid container marginLeft={3} marginRight={3} width={"auto"} sx={{border: "0px solid red"}}>

                    <Grid item  marginBottom={3}> 
                        <Typography variant="h3" fontWeight={700}>Home</Typography> 
                        <DividerHigh/>
                    </Grid>

                    <Grid item sx={{letterSpacing: "0.08em", lineHeight: "2rem"}}>
                        <Typography variant={"h5"} className={classes.typography}>
                            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. 
                            I enjoy turning complex problems into simple, beautiful and intuitive designs.
                        </Typography><br />
                        <Typography variant={"h5"}  classes={{root: classes.typography}}>
                            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, 
                            I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. 
                            I created web design for many famous brand companies.
                        </Typography>
                    </Grid>

                </Grid>
            </Layout>
        </>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        root: {
            lineHeight: "1.5rem",
        },
        //letterSpacing: "0.05em",
        fontWeight: 300,
        // lineHeight: "1.5rem !important",
        
        //border: "1px solid red"
    },
}));