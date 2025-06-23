import TargetAudience from "@/components/sections/target-audience";
import Benefits from "@/components/sections/benefits";
import ChallengesSolutions from "@/components/sections/challenges-solutions";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Opportunity from "@/components/sections/opportunity";
import GpuArchitecture from "@/components/ui/gpu-architecture";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Opportunity />
            <ChallengesSolutions />
            <Benefits />
            <HowItWorks />
            <GpuArchitecture />
            <TargetAudience />
        </>
    );
}
