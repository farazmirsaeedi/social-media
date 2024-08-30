import { Avatar, Box, AvatarGroup, Typography, ImageList, ImageListItem } from "@mui/material";
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

         


            </Box>
        </Box>
        
    );
}

export default Rightbar;