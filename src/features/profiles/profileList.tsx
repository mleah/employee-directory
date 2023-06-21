import React, {useEffect} from "react";
import ProfileCard from "./profileCard";
import {fetchAllProfiles} from "./profileSlice";
import {useAppDispatch} from "../../app/hooks";

function ProfileList() {
    const dispatch = useAppDispatch();

    // Populate the employee/profile data on initial render
    useEffect(() => {
        dispatch(fetchAllProfiles());
    }, [dispatch]);

    return (
        <div>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
        </div>
    );
}

export default ProfileList;