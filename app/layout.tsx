import { Metadata } from "next/types";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Prueba Ravenloop",
  description: "Como mola esta empresa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#1a237e" }}>{children}</body>
    </html>
  );
}
