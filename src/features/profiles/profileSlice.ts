import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile} from "./profileModels";
import {apiKey, apiProfileBaseUrl, apiProfilesUrl} from "../../constants";
import {RootState} from "../../app/store";

type EmployeesState = {
    all_profiles: Profile[];
    status: "fulfilled" | "failed" | "loading" | "";
    selected_profile: number;
}

const initialState: EmployeesState = {
    all_profiles: [],
    status: "",
    //using 0 as placeholder as it's generally a safe assumption that a userid isn't zero
    selected_profile: 0,
};

export const fetchAllProfiles = createAsyncThunk<any[]>(
    'profiles/fetchAll', async () => {
        const response = await fetch(apiProfilesUrl, {
            headers: {
                "token": apiKey
            },
        })
        return (await response.json());
    }
);

//TODO: Use this in the EditProfileForm component
export const updateEmployeeProfile = createAsyncThunk<Profile, Profile>(
    'profiles/updateEmployee', async (profileData, thunkApi) => {
        const response = await fetch(`${apiProfileBaseUrl}${profileData.id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "token": apiKey
            },
            body: JSON.stringify(profileData)
        })
        return (await response.json());
    }
);

//works for now, maybe split apart profiles and single profile? we'll see
export const profileSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setSelectedProfile: (state, action: PayloadAction<number>) => {
            state.selected_profile = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProfiles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProfiles.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.all_profiles = action.payload;
            })
            .addCase(fetchAllProfiles.rejected, (state) => {
                state.status = 'failed';
            })
            // Currently the status of both profile api calls is shared, future direction would be to separate this/ maybe have an api Slice specifically
            .addCase(updateEmployeeProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateEmployeeProfile.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const profileIndex = state.all_profiles.findIndex(x => x.id === action.payload.id);
                state.all_profiles[profileIndex] = action.payload;
            })
            .addCase(updateEmployeeProfile.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

// Selectors
export const selectAllProfiles = (state: RootState) => state.profiles.all_profiles;
export const selectCurrentProfile = (state: RootState) => state.profiles.all_profiles.find(x => x.id === state.profiles.selected_profile);

export default profileSlice.reducer;