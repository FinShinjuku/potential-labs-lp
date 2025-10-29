import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Potential Labs - テクノロジーで、人の可能性をひらく。",
  description: "クラウド、AI、データ。それらは効率化のための道具ではなく、人が本来の力を発揮するためのきっかけだと、私たちは考えています。",
  keywords: ["AI", "AWS", "BytePlus", "クラウド", "受託開発", "音楽テクノロジー", "Potential Labs"],
  authors: [{ name: "Potential Labs" }],
  creator: "Potential Labs",
  publisher: "Potential Labs",
  metadataBase: new URL("https://potential-labs.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://potential-labs.com",
    title: "Potential Labs - テクノロジーで、人の可能性をひらく。",
    description: "クラウド、AI、データ。それらは効率化のための道具ではなく、人が本来の力を発揮するためのきっかけだと、私たちは考えています。",
    siteName: "Potential Labs",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Potential Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Potential Labs - テクノロジーで、人の可能性をひらく。",
    description: "クラウド、AI、データ。それらは効率化のための道具ではなく、人が本来の力を発揮するためのきっかけだと、私たちは考えています。",
    images: ["/images/og-image.jpg"],
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
    // Google Search Console verification (add your verification code)
    // google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
