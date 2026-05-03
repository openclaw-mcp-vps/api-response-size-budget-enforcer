import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Size Budget Enforcer",
  description: "Prevent API responses from bloating your bandwidth. Monitor endpoint sizes, set budgets, and get alerted when limits are exceeded."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="718be98e-a061-4c52-8ac2-29741c34ab44"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
