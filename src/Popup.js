import React from 'react';
import './Popup.css'
function Popup(props){
  return (
    <div className={props.language==='ar' ? "popup-overlay bidi-text" : "popup-overlay"}>
      <div className="popup-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;