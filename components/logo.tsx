import Image from "next/image";
import { cn } from "../lib/utils";

export const Logo = ({ className, ...props }: Partial<React.ComponentProps<typeof Image>>) => {
    return (
        <Image
            {...props}
            priority
            alt="BRZLY Logo"
            src="/logo.png"
            width={530}
            height={175}
            className={cn("h-6 w-auto", className)}
        />
    );
};

export const LogoIcon = ({ className, ...props }: Partial<React.ComponentProps<typeof Image>>) => {
    return (
        <Image
            {...props}
            alt="BRZLY Icon"
            src="/icon.png"
            width={530}
            height={175}
            className={cn("size-6", className)}
        />
    );
};
