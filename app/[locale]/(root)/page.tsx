import Benefits from "@/components/sections/benefits";
import CallToAction from "@/components/sections/call-to-action";
import ChallengesSolutions from "@/components/sections/challenges-solutions";
import FAQs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Opportunity from "@/components/sections/opportunity";
import TargetAudience from "@/components/sections/target-audience";
import Testimonials from "@/components/sections/testimonials";
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
            <Testimonials />
            <FAQs />
            <CallToAction />
        </>
    );
}
