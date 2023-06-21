import React, {useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCurrentProfile} from "./profileSlice";

function EditProfile() {
    const profileData = useSelector(selectCurrentProfile);

    // meh on the optional chaining here, would be a refactor to rethink how to address profileData potentially being undefined
    // if it is undefined for any reason, there will be some weird-ness since the form will start uncontrolled and become controlled
    const [firstName, setFirstName] = useState(profileData?.first_name);
    const [lastName, setLastName] = useState(profileData?.last_name);
    const [email, setEmail] = useState(profileData?.email);
    const [phoneNumber, setPhoneNumber] = useState(profileData?.phone);
    const [address, setAddress] = useState(profileData?.address);
    const [city, setCity] = useState(profileData?.city);
    const [stateAddress, setStateAddress] = useState(profileData?.state);
    const [zipcode, setZipcode] = useState(profileData?.zip);

    const onSaveClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const updatedProfile = {
            ...profileData,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phoneNumber,
            address: address,
            city: city,
            state: stateAddress,
            zip: zipcode,
        }
        // TODO: dispatch API call in redux here
        // maybe? .unwrap the promise chain to route back to ProfilePage on success
        console.log("Clicky click I'm a profile", updatedProfile);
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="first-name"
                    label="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    required
                    id="last-name"
                    label="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="phone-number"
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <TextField
                    required
                    id="address"
                    label="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <TextField
                    required
                    id="city"
                    label="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <TextField
                    required
                    id="state"
                    label="State"
                    value={stateAddress}
                    onChange={e => setStateAddress(e.target.value)}
                />
                <TextField
                    required
                    id="zipcode"
                    label="Zip"
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                />
            </div>
            <Button variant="outlined" onClick={e => { onSaveClick(e) }}>SAVE</Button>
        </Box>
    )
}

export default EditProfile