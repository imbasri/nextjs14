"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
const DashboardPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const { imageUrl, fullName } = user;
  console.log("🚀 ~ DashboardPage ~ user:", user);
  return (
    <>
      <div className='flex items-center gap-10'>
        <Image className='rounded-full' src={imageUrl} alt='Profile User' width={100} height={100} />
        <h1 className='text-3xl font-bold'>
          Hello, <span className='text-primary'>{fullName?.toLocaleUpperCase()}</span>
        </h1>
      </div>

      <div className='grid grid-cols-3 gap-10 mt-5'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <divo className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </divo>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
