import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
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
        <List>
            {props.cards?.map( (card, cardIndex) => {
                return (
                    <ListItem key={cardIndex}>
                        
                        <ListItemAvatar>
                            <Avatar 
                                sx={{
                                    background: (theme) => theme.palette.backgroundColor.primary, 
                                    backgroundImage: 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
                                    borderRadius: 2,
                                    border: (theme) =>`1px solid ${theme.palette.backgroundColor.secondary} `,
                                    
                                }}>
                                {card.icon}
                            </Avatar>
                        </ListItemAvatar>
                        
                        <ListItemText  
                            primary = {
                                <Typography fontWeight={700} sx={{opacity: 0.6, textTransform: "uppercase"}}>
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

        </List>
    )
}

export default CardInfo;