import Head from "next/head";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PWA with Next 14",
  description: "PWA application with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
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
