import React from 'react';

import { Badge, Box, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Theme, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface Props {
    children?: React.ReactNode;
}

const AvatarCustom: React.FC<Props> = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box sx={{ background: (theme) => theme.palette.backgroundColor.secondary, borderRadius: 3, padding: 2, margin: 2 }}> 
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{ border: "0px solid white", width:"fit-content", }}
              >
                <Avatar alt="Remy Sharp" src="/src/assets/avatar/profile.jpg" id="avatar" className={classes.avatar}  />
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

const useStyles = makeStyles((theme: Theme) => ({
    stackroot: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        border: "2px solid white",
    },
    avatar: {
        "&#avatar" : {
          width: "6rem",
          height: "6rem",
        }
    },
}));
