import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Profile} from "./profileModels";
;
function ProfileCard(props: {profile: Profile}) {
    const {profile} = props;

    return (
        <Card className="profile" sx={{ width: 345, backgroundColor: "#f0e7ce" }}>
            <CardActionArea onClick={() => console.log("Clicked on profile ", profile.id)}>
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
                    <Typography variant="body2" component="div">
                        {profile.address} {profile.city}, {profile.state} {profile.zip}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProfileCard;