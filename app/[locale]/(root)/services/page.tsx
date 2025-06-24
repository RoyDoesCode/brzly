import CallToAction from "@/components/sections/call-to-action";
import Service1 from "@/components/sections/service-1";
import Service2 from "@/components/sections/service-2";
import Service3 from "@/components/sections/service-3";
import Service4 from "@/components/sections/service-4";
import Services from "@/components/sections/services";

export default function ServicesPage() {
    return (
        <>
            <Services />
            <Service1 />
            <Service2 />
            <Service3 />
            <Service4 />
            <CallToAction />
        </>
    );
}
