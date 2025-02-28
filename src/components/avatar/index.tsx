import React from 'react';

import { Avatar, Badge, Box, Stack, useTheme, styled } from '@mui/material';

import { useResponsiveAvatarHeight, useResponsiveAvatarWidth } from '@utils/responsive';
import avatarIcon from "@assets/avatar.png";
interface Props {
    children?: React.ReactNode;
}

const AvatarCustom: React.FC<Props> = ({ children, ...props }) => {

    const theme = useTheme();
    const responsiveAvatarWidth = useResponsiveAvatarWidth(theme);
    const responsiveAvatarHeight = useResponsiveAvatarHeight(theme);
    
    return (
        <Stack flexDirection={"column"} alignItems={"center"} style={{border: "0px solid red", padding: "0rem"}}>
          <Box sx={{ 
                background: (theme) => theme.palette.backgroundColor.secondary, 
                borderRadius: "1rem", 
                padding: "0.2rem", 
                margin: 0 
              }}
            > 
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{ border: "0px solid white", width:"fit-content", }}
              >
                <Avatar 
                  id="avatar"
                  alt="Remy Sharp" 
                  src={avatarIcon}
                  style={{
                    width: responsiveAvatarWidth,
                    height: responsiveAvatarHeight
                  }}   
                  //className={classes.avatar}  
                  /> 
                
              </StyledBadge>
              
          </Box>
      </Stack>
    )
}

export default AvatarCustom;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}));

