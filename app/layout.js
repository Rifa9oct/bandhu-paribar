import "./globals.css";

export const metadata = {
  title: "Bandhu Paribar",
  description: "Bandhu Paribar Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
