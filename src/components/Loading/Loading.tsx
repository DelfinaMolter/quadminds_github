import React from 'react';
import spinner from '/img/spinner.png';


const Loading: React.FC = () => {

  return (
    <img src={spinner}  alt="logo" className="loading"/>
  );
}

export default Loading;