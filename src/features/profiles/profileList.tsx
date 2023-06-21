import React, {useEffect} from "react";
import ProfileCard from "./profileCard";
import {fetchAllProfiles, selectAllProfiles} from "./profileSlice";
import {useAppDispatch} from "../../app/hooks";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

function ProfileList() {
    const dispatch = useAppDispatch();
    const profileList = useSelector(selectAllProfiles);

    // Populate the employee/profile data
    useEffect(() => {
        dispatch(fetchAllProfiles());
    }, [dispatch]);

    return (
        <>
            <Typography gutterBottom variant="h2">
                Employee Directory
            </Typography>
            <Grid container className="profile_list" spacing={{ xs: 2, md: 3 }} justifyContent="center">
                {profileList.map((current, _i) => {
                    return <Grid item key={`${current.id}`}><ProfileCard profile={current}/></Grid>
                })}
            </Grid>
        </>
    );
}

export default ProfileList;