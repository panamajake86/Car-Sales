import React from 'react';
import { connect } from "react-redux";

import { addFeature, removeItem } from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({car, additionalFeatures, additionalPrice, addFeature, removeItem}) => {
  //I factored out the props so I wouldn't have to use so much dot notation
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
        {/* had to add the removeFeature={removeFeature} portion so that the props down the line could have access to the removeFeature() function. */}
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={additionalFeatures} />
        {/* had to add the buyItem={buyItem} portion so that the props down the line could have access to the buyItem() function. */}
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps= state => {
  //still unsure of what this and the connect()() is doing.
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { addFeature, removeItem })(App);
