import Benefits from "@/components/sections/benefits";
import ChallengesSolutions from "@/components/sections/challenges-solutions";
import Hero from "@/components/sections/hero";
import Opportunity from "@/components/sections/opportunity";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Opportunity />
            <ChallengesSolutions />
            <Benefits />
        </>
    );
}
