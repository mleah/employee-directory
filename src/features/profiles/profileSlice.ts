import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Profile} from "./profileModels";
import {apiKey, apiProfilesUrl} from "../../constants";

type EmployeesState = {
    all_profiles: Profile[];
    status: "fulfilled" | "failed" | "loading" | "";
}

const initialState: EmployeesState = {
    all_profiles: [],
    status: "",
};

export const fetchAllProfiles = createAsyncThunk<any[]>(
    'profiles/fetchAll', async () => {
        const response = await fetch(apiProfilesUrl, {
            headers: {
                "token": apiKey
            },
        })
        console.log("am I alive?");
        return (await response.json());
    }
);

//works for now, maybe split apart profiles and single profile? we'll see
export const profileSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProfiles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProfiles.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.all_profiles = action.payload;
                console.log("Here's some profiles!!", action.payload);
            })
            .addCase(fetchAllProfiles.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default profileSlice.reducer;