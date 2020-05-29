import React from 'react';

import './Avatar.css';

const Avatar = props => {
  const { className, style, width} = props;
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: width, height:width }}
      />
    </div>
  );
};

export default Avatar;
