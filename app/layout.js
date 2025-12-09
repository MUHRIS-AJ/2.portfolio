import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import BlackHoleBackground from "@/components/BlackHoleBackground";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import { ViewProvider } from "@/components/Providers/ViewProvider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Abool Jaya Muhris - Portfolio",
  icons: {
    icon: "/logo.png"
  },
  description: "Data Science & Python Developer specializing in machine learning, data analysis, and web development. View my projects, skills, education, and certifications.",
  keywords: "data science, python developer, machine learning, data analysis, web development, portfolio, Python, NumPy, Pandas, MySQL, ICT, Sri Lanka",
  author: "Abool Jaya Muhris",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader />
          <ViewProvider>
            <BlackHoleBackground />
            <Header />

            {children}
          </ViewProvider>

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md text-black rounded-3xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)]",
              "opacity-10", // Reduce opacity as we have the 3D background now
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
