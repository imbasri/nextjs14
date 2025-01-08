import NavDashboard from "@/components/dashboard/NavDashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const DashboardLayout = ({ children }) => {
  return (
    <main className='grid lg:grid-cols-5'>
      {/* sidebar only pc */}
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>
      {/* Navigasi */}
      <div className='lg:col-span-4'>
        <NavDashboard />
        <div className='py-16 px-4 sm:px-8 lg:px-16'>
          <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
