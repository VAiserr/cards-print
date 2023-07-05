import React from 'react';
import "./style.scss";

export type TContainerProps = React.HTMLAttributes<HTMLDivElement>

function Container( {children, className, ...props} : TContainerProps) {
  return (
    <div className={'container' + (className ? ` ${className}` : '')} {...props}>
        {children}
    </div>
  )
}

export default Container