import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SeismoTeck — Advanced Earthquake Forecast & Seismic Research",
    template: "%s | SeismoTeck",
  },
  description:
    "SASVC SeismoTech Software India Pvt. Ltd. — Pioneering earthquake forecast through advanced multi-parametric monitoring, IoT sensors, and satellite-based seismic analysis.",
  keywords: [
    "earthquake forecast",
    "seismic monitoring",
    "IoT sensors",
    "seismology",
    "tectonic plates",
    "SAHAS Alert",
    "SeismoTeck",
    "India",
  ],
  openGraph: {
    title: "SeismoTeck — Advanced Earthquake Forecast",
    description:
      "Pioneering earthquake forecast through advanced seismic research and IoT monitoring.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('seismoteck-theme');
                  if (savedTheme) {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                  } else {
                    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                    document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
