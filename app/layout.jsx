import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "Job App",
  description: "Tempat Pencarian Lowongan Kerja",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en' data-theme='corporate'>
        <body>
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
