import React from "react";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

function ProfileCard() {

    return (
        <Card className="profile" sx={{ width: 345, backgroundColor: "#f0e7ce" }}>
            <CardActionArea onClick={() => console.log("HI")}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bob Boblahbalh
                    </Typography>
                    <Typography variant="body1" component="div">
                        imanemail@hello.com
                    </Typography>
                    <Typography variant="body1" component="div">
                        999-999-9999
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProfileCard;