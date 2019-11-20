import React from 'react';
import { connect } from "react-redux";
import { addFeature, updateTotal } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{
        props.addFeature();
        props.updateTotal();
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {})(AdditionalFeature);
