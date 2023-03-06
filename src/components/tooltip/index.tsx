import { IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    link?: string;
    description: string;
}

const TooltipCustom: React.FC<Props> = ({ children, ...props }) => {
    
    const [showDescription, setShowDescription] = React.useState(false);

    const handleOnClick = () => {
        if (props.link) {
          window.open(props.link, '_blank');
        }
      };

    return (
        <Tooltip
            title={
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                {props.description}
            </Typography>
            }
            arrow
            open={showDescription}
      >
        <IconButton 
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            onClick={handleOnClick}
        >
            {children}
        </IconButton>
        
        </Tooltip>
    )
}

export default TooltipCustom;