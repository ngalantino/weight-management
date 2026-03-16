import { lazy } from "react";
import { HeroSection, Title, Subtitle, PrimaryButton } from "./styles";
import IntroContent from "../../content/IntroContent.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// 4. Putting it together
export default function Hero() {

    return (
        <HeroSection>
            <Swiper 
                style={{ height: '100%', width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                loop={true}>
                <SwiperSlide>
                    <ContentBlock
                        direction="right"
                        title={IntroContent.title}
                        content={IntroContent.text}
                        button={IntroContent.button}
                        icon="woman-in-water.png"
                        id="intro"
                    />
                </ SwiperSlide>

                <SwiperSlide>
                    <ContentBlock
                        direction="right"
                        title="Do you know your BMI?"
                        content="Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women."
                        button={[{"title": "Calculate your BMI"}]}
                        icon="apple.png"
                        id="intro"
                    />
                </ SwiperSlide>
            </ Swiper>
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