import React from 'react';
import "../App.css";

const  Button = (props) => {

    var buttonStyle = {
        margin: '10px 10px 10px 0'
      };

      return (
        <button
        className="btn Sub-btn"
        style={buttonStyle}
        id={props.id}
        type="button"
        onClick={props.handleClick}>{props.label}</button>
      );
    };

    export default Button;