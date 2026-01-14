import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajan Jasani | Backend Engineer & SaaS Developer | Python, Django, FastAPI Expert",
  description:
    "Rajan Jasani is a Backend Engineer specializing in Python, Django, FastAPI, AWS, and scalable SaaS systems. Expert in PostgreSQL, Vector Databases, and cloud infrastructure.",
  keywords: [
    "Rajan Jasani",
    "Backend Engineer",
    "Python Developer",
    "Django Developer",
    "Django REST Framework",
    "FastAPI Developer",
    "PostgreSQL Developer",
    "Vector Database Expert",
    "AWS Engineer",
    "SaaS Developer",
    "Backend Developer India",
    "Python Backend Engineer",
    "API Developer",
    "Cloud Infrastructure Engineer",
  ],
  authors: [{ name: "Rajan Jasani" }],
  creator: "Rajan Jasani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajanjasani.dev",
    siteName: "Rajan Jasani Portfolio",
    title: "Rajan Jasani | Backend Engineer & SaaS Developer",
    description:
      "Backend Engineer specializing in Python, Django, FastAPI, AWS, and scalable SaaS systems.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajan Jasani - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Jasani | Backend Engineer & SaaS Developer",
    description:
      "Backend Engineer specializing in Python, Django, FastAPI, AWS, and scalable SaaS systems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
