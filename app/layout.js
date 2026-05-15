import "./globals.css";

export const metadata = {
  title: "JIWON — Video Director Portfolio",
  description:
    "Beyond the Frame, Winning the Scene. 영상 디렉터 JIWON의 포트폴리오 사이트.",
  openGraph: {
    title: "JIWON — Video Director Portfolio",
    description: "Beyond the Frame, Winning the Scene.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
