import Layout from '@components/layout';
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <Layout>
                <Grid container>
                    <Grid item marginLeft={8}> <Typography variant="h3">Home</Typography> </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export default Home;