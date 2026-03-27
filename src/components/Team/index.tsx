import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { 
  TeamContainer, 
  SectionHeader, 
  StaffCard, 
  MemberAvatar, 
  MemberName, 
  MemberBio 
} from "./styles";
import { TeamProps } from "./types";

const Team = ({ title, content, staff, id }: TeamProps) => {
  return (
    <TeamContainer id={id}>
      <Slide direction="up" triggerOnce>
        <SectionHeader>
          <h6>{title}</h6>
          <p>{content}</p>
        </SectionHeader>

        <Row gutter={[32, 32]} justify="center">
          {staff.map((member, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <StaffCard>
                <div className="avatar-wrapper">
                  <MemberAvatar src={`/weight-management/img/svg/${member.photo}`} alt={member.name} />
                </div>
                <MemberName>{member.name}</MemberName>
                <MemberBio>{member.bio}</MemberBio>
              </StaffCard>
            </Col>
          ))}
        </Row>
      </Slide>
    </TeamContainer>
  );
};

export default Team;
