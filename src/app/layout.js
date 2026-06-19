import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
  description: "Portfolio of Shanuka Radeeshan Gunathilaka, an Assistant Lecturer and Full-Stack Developer specialising in React, Node.js, Firebase and software-development education.",
  openGraph: {
    title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
    description: "Portfolio of Shanuka Radeeshan Gunathilaka, an Assistant Lecturer and Full-Stack Developer specialising in React, Node.js, Firebase and software-development education.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanuka Gunathilaka | Assistant Lecturer & Full-Stack Developer",
    description: "Portfolio of Shanuka Radeeshan Gunathilaka, an Assistant Lecturer and Full-Stack Developer",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
