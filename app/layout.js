import Navbar from "@/components/Home/navbar/Navbar";
import "./globals.css";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/footer/Footer";
import { SessionProvider } from "next-auth/react";
import AOSProvider from "@/utils/AOSProvider";

export const metadata = {
  title: "Bandhu Paribar",
  description: "Bandhu Paribar Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0">
        <SessionProvider>
          <AOSProvider>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </AOSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
