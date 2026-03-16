import styled, { keyframes } from 'styled-components';
// import hero from "../../img/20250401_LoCicero_059.jpg";

// 1. Optional: Add a subtle fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 2. The Main Section
export const HeroSection = styled.section`
  min-height: 100%; /* Takes up 80% of the screen height */
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // text-align: center;
  padding: 0 2rem;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(); // Replace with your PNG
  
  /* Modern Gradient Background */
//   background: linear-gradient(
//     135deg, 
//     #0f172a 0%, 
//     #1e293b 100%
//   );
    background-image: linear-gradient( 179.7deg,  rgba(197,214,227,1) 2.9%, rgba(144,175,202,1) 97.1% );
  color: #f8fafc;
`;

// 3. Typography & Elements
export const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem); /* Responsive font size */
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  animation: ${fadeIn} 0.8s ease-out;

  span {
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #94a3b8;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1s ease-out;
`;

export const PrimaryButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
`;