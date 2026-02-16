import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Speakers",
    description: "Meet the renowned experts and keynote speakers at ICAM 2026.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
