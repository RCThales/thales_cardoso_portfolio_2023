import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import  Providers  from "./providers";
import Theme from "@/components/theme/Theme";
import { ToastContainer } from 'react-toastify';


const poppins = Poppins({
  weight: ["100", "200", "500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thales Cardoso",
  description: "Thales Cardoso's Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Providers>
            {children}
            <Theme />
          </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
