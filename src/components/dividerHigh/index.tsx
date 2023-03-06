import { Divider } from '@mui/material';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const DividerHigh: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Divider sx={{
         background: (theme) => theme.palette.backgroundColor.highlighted,
         width: "2rem",
         height: 4,
         marginTop: 1.5,
         borderRadius: 10,
     }}/>
   )
}

export default DividerHigh;