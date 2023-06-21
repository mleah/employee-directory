import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Avatar, Box, Button, Typography} from "@mui/material";
import {selectCurrentProfile} from "./profileSlice";


function ProfilePage() {
    const profileData = useSelector(selectCurrentProfile);
    const history = useHistory();

    const handleEditClick = () => history.push(`/employeeDirectory/profile/${profileData?.id}/edit`);

    return (
        <>
        { profileData ? (
                <Box>
                    <Button variant="outlined" onClick={()=>{console.log("Clicked back button!")}}>Go back</Button>
                    <Avatar
                        src={profileData.photo}
                        sx={{ width: 100, height: 100 }}
                    />

                    <Typography gutterBottom variant="h4">
                        {`${profileData.first_name} ${profileData.last_name}`}
                    </Typography>
                    <div>
                        <Typography gutterBottom variant="subtitle1">
                            Phone
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {profileData.phone}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Email
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {profileData.email}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Address
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {profileData.address} {profileData.city}, {profileData.state} {profileData.zip}
                        </Typography>
                        <Button variant="outlined" onClick={handleEditClick}>Edit</Button>
                    </div>
                </Box>
            ) : (
                <div>ERROR!!</div>
            )}
    </>
    )
}

export default ProfilePage;