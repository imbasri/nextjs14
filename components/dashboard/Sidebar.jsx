"use client";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import DashboardNavList from "@/utils/DashboardNavList";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='py-2 px-4 bg-base-200 h-full'>
      <Image src={Logo} alt='Logo' className='mx-auto mt-5' width={100} height={100} />
      <div className='flex flex-col mt-10 gap-y-2'>
        {DashboardNavList.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`btn btn-lg ${pathname === item.href ? "bg-primary" : "bg-base-100"}`}
          >
            <span className='capitalize'> {item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
