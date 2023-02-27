import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

import {  Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import ListItemCustom from '@components/listItemCustom';
import TooltipCustom from '@components/tooltipCustom';
import AvatarCustom from '@components/avatar';
import NavBar from '@components/navbar';
import ROUTES from '@config/routes';


interface Props {
    children?: React.ReactNode;
}
const data = {
    name: "Richard hanrick",
    profile: "Web Developer",
    email: {
        label: "Email",
        value: "jonathasborgesux@gmail.com",
    },
    telephone: {
        label: "Telefone",
        value: "(+55) 92 9 8203-542",
    },
    location: {
        label: "Localização",
        value: "Brasil - Manaus",
    },
    social: {
        linkedin: {
            link: "https://www.linkedin.com/in/jonathascavalcante/",
            description: "Linkedin",
        },
        github: {
            link: "https://github.com/jonathasborges1",
            description: "Github",
        },
        facebook: {
            link:  "https://facebook.com/jonathascavalcante",
            description: "Facebook",
        },
    }
}

const links = [
    {
        label: "Sobre",
        link: ROUTES.ABOUT,
    },
    {
        label: "Resumo",
        link: ROUTES.RESUME,
    },
    {
        label: "Portfolio",
        link: ROUTES.PORTFOLIO,
    },
    {
        label: "Servico",
        link: ROUTES.SERVICES,
    },
    {
        label: "Contato",
        link: ROUTES.CONTACT,
    }
]


const Home: React.FC<Props> = ({ children, ...props }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.gridroot} >
            <Grid container className={classes.gridcontainer} gap={2.5}>

                <Grid item xs={2.5}>

                    <Grid container flexDirection={"column"} alignItems={"center"} gap={1.5} 
                        sx={{
                                background: (theme) => theme.palette.backgroundColor.primary, 
                                border: (theme) => `2px solid ${theme.palette.backgroundColor.backgroundBorder}`,
                                borderRadius: 2, 
                            }}>

                        <Grid item display="flex" flexDirection="column" alignItems="center"  xs={12}>

                        <AvatarCustom/>

                            <Typography variant="h4" textAlign={"center"} fontWeight={700}> {data.name}  </Typography> 

                            <Box sx={{ background: (theme) => theme.palette.backgroundColor.secondary, width:"fit-content" ,padding: 0.6, margin: 1, borderRadius: 2,  }}>
                                <Typography variant="subtitle2" textAlign={"center"} fontWeight={400} sx={{p:0.4}} > {data.profile}  </Typography>
                            </Box>

                        </Grid>
  
                        <Divider sx={{background: (theme) => theme.palette.backgroundColor.secondary, width: "10rem", height: 2, marginLeft: "auto", marginRight: "auto",  }} />

                        <Grid item>
                            <ListItemCustom 
                                label={data.email.label}
                                value={data.email.value} 
                                icon={<MarkEmailReadOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>} 
                            />

                            <ListItemCustom 
                                label={data.telephone.label}
                                value={data.telephone.value} 
                                icon={<PhoneIphoneOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>} 
                            />

                            <ListItemCustom 
                                label={data.location.label}
                                value={data.location.value} 
                                icon={<LocationOnOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected, borderRadius: 2}}/>} 
                            />
     
                        </Grid>

                        <Grid item>
                            <TooltipCustom
                                link={data.social.linkedin.link}
                                description={data.social.linkedin.description}
                            >
                                <LinkedInIcon sx={{ color: '#1877f2' }}/>
                            </TooltipCustom>

                            <TooltipCustom
                                link={data.social.github.link}
                                description={data.social.github.description}
                            >
                                <GitHubIcon sx={{ color: '#BA55D3' }}/>
                            </TooltipCustom>

                            <TooltipCustom
                                link={data.social.facebook.link}
                                description={data.social.facebook.description}
                            >
                                <FacebookIcon sx={{ color: '#0077B5' }}/>
                            </TooltipCustom>
                        </Grid>

                    </Grid>
 
                </Grid>

                <Grid item xs={8}
                    sx={{ 
                            background: (theme) => theme.palette.backgroundColor.primary, 
                            border: (theme) => `2px solid ${theme.palette.backgroundColor.backgroundBorder}`,
                            borderRadius: "15px", 
                        }}
                >
                    <Grid container justifyContent={"flex-end"}  sx={{border: "0px solid red"}}>
                        <Grid item xs={6} sx={{border: "0px solid white", textAlign: "end"}} maxWidth={"fit-content !important"}> 
                            <NavBar links={links}/> 
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    gridroot: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
    },
    gridcontainer: {
        justifyContent: "center",
        padding: 8,
    },
}));

