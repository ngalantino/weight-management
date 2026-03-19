import { lazy } from "react";
import { HeroContentWrapper } from "./styles";
import HeroContent from "../../content/HeroContent.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ContentBlock = lazy(() => import("../ContentBlock"));

export default function HeroContentBlock() {

    return (
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
                <HeroContentWrapper>
                    <ContentBlock
                        direction="right"
                        title={HeroContent.slide1.title}
                        content={HeroContent.slide1.text}
                        button={HeroContent.slide1.button}
                        icon="woman-in-water2.png"
                        id="intro"
                        translateY={85}
                    />
                </HeroContentWrapper>
            </SwiperSlide>

            <SwiperSlide>
                <HeroContentWrapper>
                    <ContentBlock
                        direction="right"
                        title={HeroContent.slide2.title}
                        content={HeroContent.slide2.text}
                        button={HeroContent.slide2.button}
                        icon="apple.png"
                        id="intro"
                        translateY={90}
                    />
                </HeroContentWrapper>
            </ SwiperSlide>

        </Swiper>

    );
}