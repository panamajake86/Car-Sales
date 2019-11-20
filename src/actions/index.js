export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//pass a prop and then set that as the payload. This makes sure that what you are sending to the reducer is what is being pulled from the action in the UI
export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    };
};

export const removeItem = remove => {
    return {
        type: REMOVE_FEATURE,
        payload: remove
    };
};