import { Logo } from "@/components/logo";
import About from "@/components/sections/about";
import CallToAction from "@/components/sections/call-to-action";
import Founder from "@/components/sections/founder";
import Vision from "@/components/sections/vision";

export default function AboutPage() {
    return (
        <>
            <About />
            <Logo className="mx-auto h-16" />
            <Vision />
            <Founder />
            <CallToAction />
        </>
    );
}
