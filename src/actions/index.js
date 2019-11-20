export const ADD_FEATURE = "ADD_FEATURE";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    };
};

export const removeFeature = remove => {
    return {
        type: REMOVE_FEATURE,
        payload: remove
    };
};