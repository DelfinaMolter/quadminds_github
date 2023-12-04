import React from 'react';
interface ArrowProps {
  active: boolean;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({active, className}) => {

  return (
    <>

      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"
      className={className}
      >
        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
        <path opacity="1" fill={ active ?"white":"#484F58"} d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>

    </>
  );
}

export default Arrow;