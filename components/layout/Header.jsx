import Link from "next/link";
import Image from "next/image";
import Logo from '@/app/assets/logo.png'
function Header() {
  const navList = [
    { name: "About", url: "/about" },
    { name: "Category", url: "/category" },
    { name: "Create Category", url: "/category/reate" },
  ];
  return (
    <div className='navbar bg-base-200 fixed top-0'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            {navList.map((item) => (
              <li key={item.name}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"} className='btn btn-link text-xl decoration-transparent '>
          <Image alt="Logo" src={Logo} width={50} height={50}/> <span className="font-bold text-primary">ImBa</span>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {navList.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Button</a>
      </div>
    </div>
  );
}

export default Header;
