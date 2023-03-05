import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

export interface CardDateInfo {
    label?: string;
    value?: string;
    icon?: React.ReactNode;
}

interface Props {
    children?: React.ReactNode;
    cards?: CardDateInfo[]
}

const CardInfo: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            {props.cards?.map( (card) => {
                return (
                    <ListItem>
                        
                        <ListItemAvatar>
                            <Avatar sx={{background: (theme) => theme.palette.backgroundColor.secondary, borderRadius: 2}}>
                                {card.icon}
                            </Avatar>
                        </ListItemAvatar>
                        
                        <ListItemText  
                            primary = {
                                <Typography fontWeight={700} sx={{opacity: 0.6}}>
                                    {card.label}
                                </Typography>}
                            secondary = {
                                <Typography variant="subtitle2" fontWeight={400}>
                                    {card.value}
                                </Typography>}
                        />
                    </ListItem>
                );
            })}

        </>
    )
}

export default CardInfo;