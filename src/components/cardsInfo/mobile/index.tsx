import * as React from 'react';

import { Grid, Typography, Menu, MenuItem, IconButton , useMediaQuery, useTheme, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CardInfoSingle from '@components/cardInfoSingle';
import SocialNavBar from '@components/socialNavBar';

import { CardDateInfo } from '..';

interface Props {
  children?: React.ReactNode;
  cards?: CardDateInfo[]
  hasSocialNavBar?: boolean;
  title?: string;
}

const CardInfoMobile: React.FC<Props> = ({ ...props }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};

  return (
    <Grid container justifyContent={"end"} height={"0px"}>

      { props.title ? 
          <Button onClick={handleClick}            
            sx={{
              height: 0,
              border:"1px solid #FFDB70",
              borderRadius: "0px 24px 8px 24px",
              padding: "0.8rem",
              textTransform: "capitalize",
            }}
          >
            <Typography variant="subtitle2" 
              sx={{color: (theme) => theme.typography.subtitle1,}}>
                {props.title}
              </Typography>
          </Button>
        : 
          <IconButton onClick={handleClick} >
              <MoreVertIcon sx={{color: (theme) => theme.typography.subtitle1, fontSize: "1rem"}} />
          </IconButton>
      }

      <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {props.cards?.map( (cardInfo, cardIndex) => {
          return(
          <MenuItem key={cardIndex} onClick={handleClose}>
            <CardInfoSingle card={cardInfo}></CardInfoSingle>
          </MenuItem>
          )
        })}
        {props.hasSocialNavBar ? (<SocialNavBar/>) : (<></>)}
      </Menu>
  </Grid>
  );
}

export default CardInfoMobile;