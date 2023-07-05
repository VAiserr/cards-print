import React from 'react';
import './style.scss';

export interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
    sectionName: string;
}

export default function Section({children, className, sectionName, ...props}: ISectionProps) {
  return (
    <section className={`section section__${sectionName} ` + (className || "")} {...props}>
        {children}
    </section>
  )
}
