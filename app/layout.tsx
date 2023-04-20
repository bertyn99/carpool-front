import "./globals.css";
import localFont from "@next/font/local";
import { getSession } from "@/lib/hook/useGetCurrentUser";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/provider/provider";
/* import AuthContext from "../lib/context/AuthContext";
 */
const MontserratAlt1 = localFont({
  src: [
    {
      path: "./webfonts/MontserratAlt1-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./webfonts/MontserratAlt1-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./webfonts/MontserratAlt1-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./webfonts/MontserratAlt1-Regular.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-MontserratAlt1",
});

const Helvetica = localFont({
  src: [
    {
      path: "./webfonts/Helvetica-medium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

interface IProps {
  children: React.ReactNode;
  
}
export default async function RootLayout({ children }: IProps) {
  return (
    <html
      lang="en"
      className={`${MontserratAlt1.variable} font-sans scroll-smooth`}
    >
      <head />
      <body className="text-dark-green bg-cream">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
