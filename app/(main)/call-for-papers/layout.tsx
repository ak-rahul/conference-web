import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Call for Papers",
    description: "Submission guidelines, themes, and templates for ICAM 2026 research papers.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
