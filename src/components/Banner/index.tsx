import { lazy } from "react";
import { HeroSection, Title, Subtitle, PrimaryButton } from "./styles";
import IntroContent from "../../content/IntroContent.json";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// 4. Putting it together
export default function Hero() {

    return (
        <HeroSection>
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="intro"
            />
            {/* <Title>Build Faster with <span>Vite & React</span></Title>
            <Subtitle>
                The next generation of frontend tooling. Start your project with
                blazing fast HMR and optimized production builds.
            </Subtitle>
            <PrimaryButton onClick={() => console.log('Get Started!')}>
                Get Started
            </PrimaryButton> */}
        </HeroSection>
    );
}