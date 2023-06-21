import React from "react";
import {Box, Button, Typography} from "@mui/material";

function ProfilePage() {

    return (
        <Box>
            <Button variant="outlined" onClick={()=>{console.log("Clicked back button!")}}>Go back</Button>

            <Typography gutterBottom variant="h4">
                Hi
            </Typography>

            <Button variant="outlined" onClick={()=>{console.log("Clicked edit!")}}>Edit</Button>
        </Box>
    )

}

export default ProfilePage;