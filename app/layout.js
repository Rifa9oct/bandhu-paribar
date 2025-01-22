import Navbar from "@/components/Home/navbar/Navbar";
import "./globals.css";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/footer/Footer";

export const metadata = {
  title: "Bandhu Paribar",
  description: "Bandhu Paribar Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
