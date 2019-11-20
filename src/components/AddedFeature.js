import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{
        props.removeFeature(props.feature);
        //the props here are being pulled from App.js. This removeFeature function is fount in App.js.
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
