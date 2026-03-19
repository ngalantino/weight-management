import styled from "styled-components";

export const HeroContentWrapper = styled.div`
    h6 {
    color: white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 600; 
    letter-spacing: 0.5px;
    }


    @media (max-width: 767px) {
    /* These styles only apply on mobile */
    h6 {
    align-items: center;
    text-align: center;
    }

    p {
    font-size: 1rem;
    text-align: justify;
    }    

  }
`;