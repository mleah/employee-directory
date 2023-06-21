import React from "react";
import {useHistory} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Profile} from "./profileModels";
import {profileSlice} from "./profileSlice";
import {useAppDispatch} from "../../app/hooks";

function ProfileCard(props: {profile: Profile}) {
    const {profile} = props;
    const setSelectedProfile = profileSlice.actions.setSelectedProfile;
    const dispatch = useAppDispatch();
    const history = useHistory();

    const onCardActionClick = () => {
        dispatch(setSelectedProfile(profile.id));
        history.push(`/employeeDirectory/profile/${profile.id}`);
    }

    return (
        <Card className="profile" sx={{ width: 345, backgroundColor: "#f0e7ce" }}>
            <CardActionArea onClick={onCardActionClick}>
                <CardMedia
                    component="img"
                    height="100px"
                    image={profile.photo}
                    sx={{ objectFit: "contain", paddingTop: "1rem" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.first_name} {profile.last_name}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {profile.email}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {profile.phone}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProfileCard;