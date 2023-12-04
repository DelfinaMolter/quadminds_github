import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {

  return (
    <button className="flex items-center gap-2" onClick={onClick}>
      {children}
    </button>

  );
}

export default Button;