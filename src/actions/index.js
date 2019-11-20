export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    };
    // console.log("I am add feature")
};

export const removeItem = remove => {
    return {
        type: REMOVE_FEATURE,
        payload: remove
    };
};