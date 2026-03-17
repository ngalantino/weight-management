import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;


export const HeroSection = styled.section`
  min-height: 100%; /* Takes up 80% of the screen height */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  background-image: linear-gradient( 179.7deg,  rgba(197,214,227,1) 2.9%, rgba(144,175,202,1) 97.1% );
  color: #f8fafc;
`;