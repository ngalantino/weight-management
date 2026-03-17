import { lazy, ReactNode } from "react";
import { HeroSection } from "./styles";


interface HeroProps {
    children: ReactNode;
}

export default function Hero({ children }: HeroProps) {

    return (
        <HeroSection>
            { children }
        </HeroSection>
    );
}