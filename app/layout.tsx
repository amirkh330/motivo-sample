import Head from "next/head";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PWA with Next 14",
  description: "PWA application with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Alldo Faiz Ramadhani" },
    {
      name: "Alldo Faiz Ramadhani",
      url: "https://www.linkedin.com/in/alldofaiz/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <script src="/service-worker.js" defer></script>
    //   <link rel="manifest" href="/manifest.json" />
    //   <body>{children}</body>
    // </html>
    <html lang="en">
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      {/* Other head elements can go here */}
    </Head>
    <body>
      {children}

      {/* This will defer the loading of the service worker */}
      <Script src="/sw.js" strategy="afterInteractive" />
    </body>
  </html>
  );
}
