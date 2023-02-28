import React from 'react';

import Layout from '@components/layout';
import { Grid, Typography } from '@mui/material';

interface Props {
    children?: React.ReactNode;
}

const About: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Layout>
            <Grid container>
                <Grid item marginLeft={8}> <Typography variant="h3">Sobre</Typography> </Grid>
            </Grid>
        </Layout>
    )
}

export default About