import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about ICAM 2026, the Department of Applied Chemistry at CUSAT, and our partners.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
