import React from 'react';

const Band = (props) => {
  console.log(props.band);
  return (
      <li>{props.band.text.name}
         <button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
  );
};
export default Band;
