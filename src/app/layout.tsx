import "./globals.css";
import Header from "./component/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Usama Bhatti | Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer Portfolio - Usama Bhatti"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* Fixed Header */}
        <Header />
        {/* Main content */}
        <main className="min-h-screen">{children}</main>
        {/* Optional Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          © 2024 Your Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
