import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid transparent', height: '1000px'}}>
      {props.children}

    </div>
  );
};
export default Scroll;