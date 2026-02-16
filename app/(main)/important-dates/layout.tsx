import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Important Dates",
    description: "Key deadlines for abstract submission, registration, and conference dates.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
