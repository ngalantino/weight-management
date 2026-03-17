import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import FoodDiaryContent from "../../content/FoodDiaryContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Hero from "../../components/Hero";
import HeroContentBlock from "../../components/HeroContentBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
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
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="britney-karon.jpg"
          id="about"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />

        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
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
      <Container>
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </>
  );
};

export default Home;
