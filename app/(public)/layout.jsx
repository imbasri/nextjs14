import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Job App",
  description: "Tempat Pencarian Lowongan Kerja",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className='min-h-[80vh] mt-32 mx-auto max-w-6xl px-8 '>{children}</main>
      <Footer />
    </>
  );
}
