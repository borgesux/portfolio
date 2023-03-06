import React from 'react';

import { Grid, Typography } from '@mui/material';

import DividerHigh from '@components/dividerHigh';
import Layout from '@components/layout';

interface Props {
    children?: React.ReactNode;
}

const Contact: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Layout>
            <Grid container>
                <Grid item marginLeft={4} marginBottom={4}> 
                    <Typography variant="h3">Contato</Typography> 
                    <DividerHigh/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Contact;