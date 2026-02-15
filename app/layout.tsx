import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "ICAR 2025 - International Conference on Advanced Research",
    template: "%s | ICAR 2025",
  },
  description: "Join leading researchers and innovators at ICAR 2025. March 16-17, New York City. Submit your papers and register now.",
  keywords: ["conference", "research", "AI", "technology", "science", "symposium", "New York"],
  authors: [{ name: "ICAR Organization" }],
  creator: "ICAR Organization",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icar2025.org",
    title: "ICAR 2025 - International Conference on Advanced Research",
    description: "Join leading researchers and innovators at ICAR 2025. March 16-17, New York City.",
    siteName: "ICAR 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICAR 2025",
    description: "International Conference on Advanced Research. March 16-17, 2025.",
    creator: "@icar2025",
  },
  metadataBase: new URL("https://icar2025.org"),
};

import { createClient } from "@/lib/supabase/server";

// ... existing imports

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader user={user} />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
