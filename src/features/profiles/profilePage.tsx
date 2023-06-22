import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Avatar, Box, Button, Typography} from "@mui/material";
import {selectCurrentProfile} from "./profileSlice";


function ProfilePage() {
    const profileData = useSelector(selectCurrentProfile);
    const history = useHistory();

    const handleEditClick = () => history.push(`/employeeDirectory/profile/${profileData?.id}/edit`);
    const handleBackClick = () => history.push(`/employeeDirectory`);


    return (
        <>
        { profileData ? (
            <div>
                <Box display={"flex"} sx={{flexStart: "left", paddingTop: "10px", paddingLeft: "10px"}}>
                    <Button variant="contained"
                            onClick={handleBackClick}
                            sx={{textAlign: "left"}}>Go back</Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"} sx={{backgroundColor: "#f0e7ce", width: "400px", margin: "auto", borderRadius: "1rem"}}>
                    <Avatar
                        src={profileData.photo}
                        sx={{ width: 100, height: 100, margin: "10px auto 10px auto"}}
                    />

                    <Typography gutterBottom variant="h4">
                        {`${profileData.first_name} ${profileData.last_name}`}
                    </Typography>
                        <Box component="div">
                            <p>Phone</p>
                            <p>{profileData.phone}</p>
                        </Box>
                        <Box component="div">
                            <p>Email</p>
                            <p>{profileData.email}</p>
                        </Box>
                        <Box component="div">
                            <p>Address</p>
                            <p>{profileData.address} {profileData.city}, {profileData.state} {profileData.zip}</p>
                        </Box>
                    <Button variant="contained" onClick={handleEditClick}>Edit</Button>
                </Box>
            </div>
            ) : (
                <div>ERROR!!</div>
            )}
    </>
    )
}

export default ProfilePage;