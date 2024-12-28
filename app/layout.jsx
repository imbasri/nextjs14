import "./globals.css";
export const metadata = {
  title: "Job App", 
  description: "Tempat Pencarian Lowongan Kerja",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='corporate'>
      <body>{children}</body>
    </html>
  );
}
