import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

//This is the state that I factored out of the App.js
export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                additionalPrice: (state.additionalPrice += action.payload.price),
                //I had to put the parenthesis around it to make sure that the two acted as an equation and not two stand alone statements
                car: {...state.car, features: [...state.car.features, action.payload]},
                //This is to add to the left side of the screen the features we're putting on the car.
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
                //This removes the features from the right side of the screen
            };
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: (state.additionalPrice -= action.payload.price),
                //I had to put the parenthesis around it to make sure that the two acted as an equation and not two stand alone statements
                car: {...state. car, features: state.car.features.filter(feature => feature.id !== action.payload.id)},
                //This is to remove the features from the left side of the screen
                additionalFeatures: [...state.additionalFeatures, action.payload]
                //This puts the features back on the right side of the screen
            };
        default:
            return state;
    }
};