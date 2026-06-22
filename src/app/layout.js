import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://portfolio-e54ec.web.app'),
  title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
  description: "Portfolio of Shanuka Gunathilaka, an Assistant Lecturer and Full-Stack Developer specialising in React, Next.js, Firebase, Node.js, databases and software-engineering education.",
  openGraph: {
    title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
    description: "Portfolio of Shanuka Gunathilaka, an Assistant Lecturer and Full-Stack Developer specialising in React, Next.js, Firebase, Node.js, databases and software-engineering education.",
    url: "https://portfolio-e54ec.web.app",
    siteName: "Shanuka Gunathilaka Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shanuka Gunathilaka - Assistant Lecturer & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
    description: "Portfolio of Shanuka Gunathilaka, an Assistant Lecturer and Full-Stack Developer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-primary text-text-main transition-colors duration-300 antialiased selection:bg-accent-primary selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
