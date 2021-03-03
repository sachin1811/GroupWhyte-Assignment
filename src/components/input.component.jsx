import React from 'react';

const  Input = (props) => {

      return (
        <input value={props.value} type="text" placeholder={props.placeholder} onChange={props.handleChange} />
      );
    };

    export default Input;