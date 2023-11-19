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
  openGraph: {
    title: "Thales Cardoso",
    description:
      "Front-end developer in Canada specialized in react web applications.",
    url: "https://thalescardoso.dev",
    siteName: "Thales Cardoso Portfolio",
    images: [
      {
        url: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesbanner.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesbanner.jpg",
        width: 1800,
        height: 1600,
        alt: "Thales Cardoso banner.",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Front-end developer in Canada",
    description:
      "Front-end developer in Canada specialized in react web applications.",
    images: ["https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesbanner.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  appleWebApp: {
    title: "Thales' Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesbanner.jpg",
      {
        url: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesbanner.jpg",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  category: "development",
  creator: "Thales Cardoso",
  keywords: [
    "Front-end",
    "front end",
    "frontend",
    "developer",
    "next",
    "next.js",
    "react",
    "react.js",
    "software",
    "web",
    "web developer",
    "sass",
    "css",
    "html",
    "javascript",
    "redux",
    "node",
    "node.js",
    "backend",
    "back-end",
    "agile",
    "employee",
    "dev",
    "london",
    "ontario",
    "canada",
    "london ontario",

  ],
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
