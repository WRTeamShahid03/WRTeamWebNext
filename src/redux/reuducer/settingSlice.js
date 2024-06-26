import { createSelector, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { apiCallBegan } from "../actions/apiActions";
import { GetSettingsApi } from "../actions/campaign";

const initialState = {
    data: null,
    lastFetch: null,
    loading: false,
};

export const settingsSlice = createSlice({
    name: "Settings",
    initialState,
    reducers: {
        settingsRequested: (settings, action) => {
            settings.loading = true;
        },
        settingsSucess: (settings, action) => {
            settings.data = action.payload.data;
            settings.loading = false;
            settings.lastFetch = Date.now();
        },
        settingsFailure: (settings, action) => {
            settings.loading = false;
        },
    },
});

export const { settingsRequested, settingsSucess, settingsFailure } = settingsSlice.actions;
export default settingsSlice.reducer;

// API CALLS

export const settingsLoaded = (type, onSuccess, onError, onStart) => {
    const { lastFetch } = store.getState().Settings;
    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    // If API data is fetched within last 10 minutes then don't call the API again
    // if (diffInMinutes < 10) return false;
    store.dispatch(
        apiCallBegan({
            ...GetSettingsApi(type),
            displayToast: false,
            onStartDispatch: settingsRequested.type,
            onSuccessDispatch: settingsSucess.type,
            onErrorDispatch: settingsFailure.type,
            onStart,
            onSuccess,
            onError,
        })
    );
};

export const settingsLoadedLogin = (type, onSuccess, onError, onStart) => {
    store.dispatch(
        apiCallBegan({
            ...getSettingApi(type),
            displayToast: false,
            onStartDispatch: settingsRequested.type,
            onSuccessDispatch: settingsSucess.type,
            onErrorDispatch: settingsFailure.type,
            onStart,
            onSuccess,
            onError,
        })
    );
};

// Slecttors
// Selectors
export const settingsData = createSelector(
    (state) => state.Settings,
    (settings) => settings.data
);
