import * as React from 'react';

import { Grid, Typography, Menu, MenuItem, IconButton , Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SocialNavBar from '@components/socialNavBar';

import CardInfo, { CardDateInfo } from '..';

interface Props {
  children?: React.ReactNode;
  cards?: CardDateInfo[]
  hasSocialNavBar?: boolean;
  title?: string;
}

const CardInfoMobile: React.FC<Props> = ({ ...props }) => {

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
              background: (theme) => theme.palette.backgroundColor.secondary,
              borderRadius: "0px 24px 8px 24px",
              padding: "1rem",
              textTransform: "capitalize",
            }}
          >
            <Typography variant="subtitle2" 
              sx={{color: (theme) => theme.palette.textColor?.selected,}}
            >
              {props.title}
            </Typography>
          </Button>
        : 
          <IconButton onClick={handleClick} 
            sx={{
              background: (theme) => theme.palette.backgroundColor.secondary,
              height: 0,
              borderRadius: "0px 24px 8px 24px",
              padding: "0.8rem",
            }}
          >
            <KeyboardArrowDownIcon sx={{color: (theme) => theme.palette.textColor?.selected, fontSize: "1rem"}} />
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
            <CardInfo cards={[cardInfo]}></CardInfo>
          </MenuItem>
          )
        })}
        {props.hasSocialNavBar ? (<SocialNavBar/>) : (<></>)}
      </Menu>
  </Grid>
  );
}

export default CardInfoMobile;