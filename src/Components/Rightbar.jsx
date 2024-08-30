import { Avatar, Box, Stack, AvatarGroup, Typography, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import React from "react";

const Rightbar = () =>{
    return(
        <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>
                    Latest Images
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3"/>
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3"/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3"/>
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100}>
                    Latest Conversion
                </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Mohammad, Sara, Leila
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/4.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Naseri
                                </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
        
    );
}

export default Rightbar;