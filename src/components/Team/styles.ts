import styled from "styled-components";

export const TeamContainer = styled("section")`
  padding: 5rem 1rem;
  background: #ffffff;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 75px;
`;

export const SectionHeader = styled("div")`
  text-align: center;
  margin-bottom: 4rem;

//   h6 {
//     font-size: 2.5rem;
//     font-weight: 800;
//     color: #18216d; /* Deep blue for professional contrast */
//     margin-bottom: 1rem;
//   }

  p {
    font-size: 1.125rem;
    color: #5e6c84;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const StaffCard = styled("div")`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f4f7;
  height: 100%;

  /* Subtle glow effect inspired by your portal image */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); 
    // border-color: #52c4c4;
  }

  .avatar-wrapper {
    margin-bottom: 1.5rem;
    display: inline-block;
  }
`;

export const MemberAvatar = styled("img")`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

export const MemberName = styled("h4")`
  font-size: 1.35rem;
  color: #18216d;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const MemberBio = styled("p")`
  font-size: 0.95rem;
  color: #7a869a;
  line-height: 1.5;
  margin: 0;
`;
