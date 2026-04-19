import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://kidzsafari.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Kidz Safari Preschool Faridabad | Best Play School & Day Care in Greenfield Colony",
    template: "%s | Kidz Safari Preschool Faridabad",
  },
  description:
    "Kidz Safari is a Waldorf inspired preschool, play school, and day care in Greenfield Colony, Faridabad for children ages 2 to 6. Pre Nursery, Nursery, L.KG, U.KG, Day Care, Evening Tuition, Pickup and Drop. 15+ years of experience. Call +91 97113 33568.",
  keywords: [
    "preschool in faridabad",
    "play school in faridabad",
    "day care in faridabad",
    "best preschool faridabad",
    "best play school faridabad",
    "nursery school faridabad",
    "kindergarten faridabad",
    "pre nursery faridabad",
    "LKG UKG faridabad",
    "preschool greenfield colony",
    "play school greenfield colony faridabad",
    "day care greenfield colony",
    "daycare faridabad",
    "child care faridabad",
    "waldorf preschool faridabad",
    "tuition classes faridabad",
    "evening tuition faridabad",
    "preschool near me faridabad",
    "play school near me faridabad",
    "kidz safari",
    "kidz safari faridabad",
    "best day care faridabad",
    "preschool admission faridabad",
    "play school admission faridabad",
    "nursery admission faridabad",
    "preschool with transport faridabad",
    "preschool with food faridabad",
    "affordable preschool faridabad",
    "top preschool faridabad",
    "preschool sector 42 faridabad",
    "play school NIT faridabad",
  ],
  authors: [{ name: "Kidz Safari Preschool", url: SITE_URL }],
  creator: "Kidz Safari Preschool",
  publisher: "Kidz Safari Preschool",
  formatDetection: { telephone: true, email: true, address: true },
  icons: { icon: "/hand-print.png", apple: "/hand-print.png" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Kidz Safari Preschool",
    title:
      "Kidz Safari Preschool Faridabad | Best Play School & Day Care in Greenfield Colony",
    description:
      "Waldorf inspired preschool and day care for ages 2 to 6 in Greenfield Colony, Faridabad. Pre Nursery, Nursery, L.KG, U.KG, Day Care, Tuition. 15+ years. Fresh food, pickup and drop.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "Kidz Safari Preschool Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidz Safari Preschool Faridabad | Best Play School & Day Care",
    description:
      "Waldorf inspired preschool and day care for ages 2 to 6 in Greenfield Colony, Faridabad.",
    images: ["/logo.png"],
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
  alternates: { canonical: SITE_URL },
  verification: {
    // Add your Google Search Console verification code here once you have it
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.4089;77.3178" />
        <meta name="ICBM" content="28.4089, 77.3178" />
      </head>
      <body>
        <JsonLd />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
