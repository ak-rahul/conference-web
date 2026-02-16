import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Organizing Committee",
    description: "The dedicated team of patrons, chairs, and conveners behind ICAM 2026.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
