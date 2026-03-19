import styled from 'styled-components';

export const StyledSvgIcon = styled.img<{ $translateY?: number }>`
  display: block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  
  /* 1. Desktop Styles (Default) */
  transform: translateY(${props => props.$translateY || 0}px);
  position: relative;
  z-index: 10;

  /* 2. Mobile Override */
  @media (max-width: 768px) {
    /* Hardcode a smaller "hangover" for mobile */
    transform: translateY(20px); 
    
    /* OR: Scale it by 50% if you prefer math: */
    /* transform: translateY(${props => (props.$translateY || 0) * 0.5}px); */
  }
`;