import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>

              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="https://locicerohealth.com/about/contact-us/" target="_blank" rel="noopener">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <a href="https://locicerohealth.com/about/office-policies/" target="_blank" rel="noopener">Office Policies</a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large> */}
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>LoCicero Health</Para>
              <Para>110 S. Macdill Ave. Suite 300</Para>
              <Para>Tampa, FL 33609</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <a href="https://locicerohealth.com/about/welcome/" target="_blank" rel="noopener">About</a><br></br>
              <a href="https://locicerohealth.com/about/careers/" target="_blank" rel="noopener">Careers</a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label> */}
              {/* <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="locicero_logo_transparent-300x220.png"
                  aria-label="homepage"
                  width="auto"
                  height="40px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>


              <SocialLink
                href="https://www.linkedin.com/company/locicero-medical-group/"
                src="linkedin.svg"
              />


            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
