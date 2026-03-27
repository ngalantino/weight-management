import React from "react";
import { SvgIconProps } from "../types";
import { StyledSvgIcon } from './styles';


export const SvgIcon = ({ src, width, height, translateY }: SvgIconProps) => (

  <StyledSvgIcon 
    src={`/img/svg/${src}`} 
    alt={src} 
    width={width} 
    height={height}
    $translateY={translateY}
 />
);
