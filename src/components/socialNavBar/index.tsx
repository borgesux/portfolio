import React from 'react';
import { Grid } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import TooltipCustom from '@components/tooltipCustom';


interface Props {
    children?: React.ReactNode;
}

const SocialNavBar: React.FC<Props> = ({ children, ...props }) => {

    const data = {
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

    return (
        <Grid container justifyContent={"center"}>
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
    )
}

export default SocialNavBar;