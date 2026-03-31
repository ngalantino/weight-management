import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import AutoPlayVideo from "../../common/AutoPlayVideo"
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  ItemWrapper,
} from "./styles";

const InsuranceContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  translateY
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* <SvgIcon src={icon} width="100%" height="100%" translateY={translateY} /> */}
            <AutoPlayVideo src="/videos/provider-taking-notes.mp4"></AutoPlayVideo>
            <ServiceWrapper>
                  <Row justify="space-between" gutter={[0, 36]}>
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                            hyperlink: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11} xs={24} md={11}>
                              <ItemWrapper onClick={() => window.open(`${item.hyperlink}`, "_blank", "noopener,noreferrer")}>
                                <SvgIcon
                                  src={item.icon}
                                  width="auto"
                                  height="150px"
                                />
                                <MinTitle>{t(item.title)}</MinTitle>
                                <MinPara dangerouslySetInnerHTML={{__html: item.content}}></MinPara>
                              </ItemWrapper>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content><div dangerouslySetInnerHTML={{__html: content}}></div></Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          hyperlink?: string;
                          textColor?: string;
                          scrollTo?: string;
                        },
                        id: number
                      ) => {
                        if (item.hyperlink) {
                          return (
                            <Button
                              key={id}
                              color={item.color}
                              style={{ color: `${item.textColor}` }}
                              onClick={() => window.open(`${item.hyperlink}`, "_blank", "noopener, noreferrer")}
                            >
                              {t(item.title)}
                            </Button>
                          );
                        } else {
                          return (

                            <Button
                              key={id}
                              color={item.color}

                              onClick={() => scrollTo(`${item.scrollTo}`)}
                            >
                              {t(item.title)}
                            </Button>
                          );
                        }
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <></>
                // <ServiceWrapper>
                //   <Row justify="space-between" gutter={[0, 36]}>
                //     {typeof section === "object" &&
                //       section.map(
                //         (
                //           item: {
                //             title: string;
                //             content: string;
                //             icon: string;
                //             hyperlink: string;
                //           },
                //           id: number
                //         ) => {
                //           return (
                //             <Col key={id} span={11} xs={24} md={11}>
                //               <ItemWrapper onClick={() => window.open(`${item.hyperlink}`, "_blank", "noopener,noreferrer")}>
                //                 <SvgIcon
                //                   src={item.icon}
                //                   width="auto"
                //                   height="150px"
                //                 />
                //                 <MinTitle>{t(item.title)}</MinTitle>
                //                 <MinPara>{t(item.content)}</MinPara>
                //               </ItemWrapper>
                //             </Col>
                //           );
                //         }
                //       )}
                //   </Row>
                // </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(InsuranceContentBlock);
