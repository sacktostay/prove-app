import "./globals.css";

export const metadata = {
  title: "PROVE — Prove What You're Capable Of",
  description:
    "Turn ambitious goals into daily missions, document the journey, and create your story.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
