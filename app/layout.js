import "./globals.css";
import CustomCursor from "../components/CustomCursor.jsx";

export const metadata = {
  title: "Aby Pious | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0e0e] text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
