import React from 'react';
import { connect } from "react-redux";
import { removeFeature, updateTotal } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{
        props.removeFeature();
        props.updateTotal();
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {})(AddedFeature);
