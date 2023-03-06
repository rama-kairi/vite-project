import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent: React.FC<SVGProps<SVGSVGElement>> = ({
  children,
  ...rest
}) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </svg>
);

export default SVGComponent;
