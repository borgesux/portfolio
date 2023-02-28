import React from 'react';

import Layout from '@components/layout';
import { Grid, Typography } from '@mui/material';

interface Props {
    children?: React.ReactNode;
}

const Contact: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Layout>
            <Grid container>
                <Grid item marginLeft={8}> <Typography variant="h3">Contato</Typography> </Grid>
            </Grid>
        </Layout>
    )
}

export default Contact;