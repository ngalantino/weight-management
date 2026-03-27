import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import HealthyLivingPrograms from "../../content/HealthyLivingProgramsContent.json";
import FoodDiaryContent from "../../content/FoodDiaryContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import OnlineSupport from "../../content/OnlineSupport.json";
import TeamContent from "../../content/TeamContent.json";
import Hero from "../../components/Hero";
import HeroContentBlock from "../../components/HeroContentBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const Team = lazy(() => import ("../../components/Team"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <Hero>
        <HeroContentBlock />
      </Hero>
      <Container>
        <ScrollToTop />

        <ContentBlock
          direction="left"
          title={HealthyLivingPrograms.title}
          content={HealthyLivingPrograms.text}
          section={HealthyLivingPrograms.section}
          icon="britney-karon.jpg"
          id="programs"
        />
        {/* <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        /> */}

        <ContentBlock
          direction="right"
          title={OnlineSupport.title}
          content={OnlineSupport.text}
          button={OnlineSupport.button}
          icon="laptop.png"
          id="online-support"
        />
      </Container>
      <Hero>
        <Container>
        <ContentBlock
          direction="right"
          title={FoodDiaryContent.title}
          content={FoodDiaryContent.text}
          icon="food-diary.png"
          id="food-diary"
          button={FoodDiaryContent.button}
        />
        </Container>
      </Hero>
      {/* <Container>
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container> */}

      <Team
        title = {TeamContent.title} 
        content = {TeamContent.content}
        staff = {TeamContent.staff}
        id = "team"
      />
    </>
  );
};

export default Home;
