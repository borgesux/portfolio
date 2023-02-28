import React from 'react';


import { Divider, Grid, Typography } from '@mui/material';

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import AvatarCustom from '@components/avatar';
import ListItemCustom from '@components/listItemCustom';
import SocialNavBar from '@components/socialNavBar';


interface Props {
    children?: React.ReactNode;
}


const LeftSideContent: React.FC<Props> = ({ children, ...props }) => {

    const data = {
        title: "Jonathas Borges",
        career: "Web Developer",
        email: {
            label: "Email",
            value: "jonathasborgesux@gmail.com",
            icon: <MarkEmailReadOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>
        },
        telephone: {
            label: "Telefone",
            value: "(+55) 92 9 8203-542",
            icon: <PhoneIphoneOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>
        },
        location: {
            label: "Localização",
            value: "Brasil - Manaus",
            icon: <LocationOnOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>
        },
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <AvatarCustom/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" textAlign={"center"} >{data.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent={"center"}>
                    <Grid item 
                        sx={{ 
                            background: (theme) => theme.palette.backgroundColor.secondary,
                            padding: "4px 12px 4px 12px",
                            margin: 1, 
                            borderRadius: 2,  
                        }}                    
                    >
                        <Typography variant="subtitle1">{data.career}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Divider 
                sx={{
                    background: (theme) => theme.palette.backgroundColor.secondary, 
                    width: "10rem", 
                    height: 2, 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    marginTop: 2, 
                    marginBottom: 2 
                }} 
            />

            <Grid container>
                <Grid container justifyContent={"center"}  gap={1}>
                    <Grid item xs={12}>
                        <ListItemCustom 
                            label={data.email.label}
                            value={data.email.value} 
                            icon={data.email.icon} 
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ListItemCustom 
                            label={data.telephone.label}
                            value={data.telephone.value} 
                            icon={data.telephone.icon} 
                        />

                    </Grid>
                    
                    <Grid item xs={12}>
                        
                        <ListItemCustom 
                            label={data.location.label}
                            value={data.location.value} 
                            icon={data.location.icon} 
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent={"center"}>
                <Grid item> <SocialNavBar/> </Grid>
            </Grid>

        </Grid>
    )
}

export default LeftSideContent;