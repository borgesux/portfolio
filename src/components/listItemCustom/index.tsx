import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    label?: string;
    value?: string;
}

const ListItemCustom: React.FC<Props> = ({ children, ...props }) => {
    return (
        <ListItem >
            <ListItemAvatar>
                <Avatar sx={{background: (theme) => theme.palette.backgroundColor.secondary, borderRadius: 2}}>
                    {/* <MarkEmailReadOutlinedIcon sx={{color: (theme) => theme.palette.textColor?.selected}} /> */}
                    {props.icon}
                </Avatar>
            </ListItemAvatar>
            <ListItemText  
                primary={
                    <Typography fontWeight={700} sx={{opacity: 0.6}}>
                        {props.label}
                    </Typography>}
                secondary={
                    <Typography variant="subtitle2" fontWeight={400}>
                        {props.value}
                    </Typography>}
                />
        </ListItem>
    )
}

export default ListItemCustom;