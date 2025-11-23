import "@/styles/globals.css";
import React from "react";

import type { Metadata, Viewport } from "next";

import Script from "next/script";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import Providers from "@/components/provider";
import * as fonts from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.fontSans.className}>
        <Providers>{children}</Providers>
        <TailwindIndicator />

        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem("theme");
              if (!theme) document.documentElement.classList.add("dark");
            } catch (e) {}
          `}
        </Script>
      </body>
    </html>
  );
}
