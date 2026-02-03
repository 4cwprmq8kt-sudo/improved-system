import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfolio Intelligence",
  description: "Connect your broker. See your real portfolio. Get intelligent analysis."
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
