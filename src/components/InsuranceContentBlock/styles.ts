import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};

  scroll-margin-top: 125px;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    .ant-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center; /* Centers the text of MinTitle and MinPara */
    }
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 767px) {
    /* Mobile: Centered */
    justify-content: center;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ItemWrapper = styled("div")`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center;    /* Center children horizontally */
  text-align: center;     /* Ensure text inside MinTitle/MinPara is centered */

  /* 1. Add padding so the background doesn't touch the icons */
  padding: 20px; 
  
  /* 2. Setup the transition for a smooth "fade-in" effect */
  transition: all 0.3s ease-in-out;
  cursor: pointer; /* Makes it feel like a clickable feature */
  border-radius: 12px; /* Rounded corners */

  /* 3. The Hover State */
  &:hover {
    background-color: #f5f5f5; /* Light gray */
    transform: translateY(-5px); /* Optional: slight lift effect */
  }

`;
