import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "ICAM 2026 - International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare",
    template: "%s | ICAM 2026",
  },
  description: "Join leading researchers at ICAM 2026. March 05-06, 2026, Mini Seminar Hall, Seminar Complex, CUSAT.",
  keywords: ["conference", "research", "materials science", "clean energy", "healthcare", "environment", "ICAM", "CUSAT"],
  authors: [{ name: "ICAM Organization" }],
  creator: "ICAM Organization",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icam2026.org",
    title: "ICAM 2026 - Advanced Functional Materials for Clean Energy, Environment, and Healthcare",
    description: "International Conference on Advanced Functional Materials for Clean Energy, Environment, and Healthcare. March 05-06, 2026. Mini Seminar Hall, Seminar Complex, CUSAT.",
    siteName: "ICAM 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICAM 2026",
    description: "International Conference on Advanced Materials. March 05-06, 2026.",
    creator: "@icam2026",
  },
  metadataBase: new URL("https://icam2026.org"),
};

// ... existing imports

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
