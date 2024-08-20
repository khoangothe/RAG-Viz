import "@/styles/globals.css";
import "@uploadthing/react/styles.css";
import '@xyflow/react/dist/style.css';

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { pdfRouter } from "@/app/api/uploadthing/core";

import StickyNav from "@/components/navigation-bar/stickynav";

export const metadata: Metadata = {
  title: "RagViz - Visual Representation of RAG application",
  description: "A Step by Step Visualization of a RAG application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="overflow">
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(pdfRouter)}
        />
        <StickyNav/>
        {children}
      </body>
    </html>
  );
}
