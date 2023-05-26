import React from "react";

type Props = {};

function Blogs({}: Props) {
  return (
    <div className='mt-14 bg-softGrey py-12 px-4 lg:px-0'>
      <div className='mt-14 mb-14 container mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-mainRed text-md tracking-widest'>FİRMAMIZDAN</h3>
          <h1 className=' text-titleColor font-bold text-4xl lg:text-5xl mt-3 leading-snug'>
            Bizden Haberler
          </h1>
        </div>
        <div className='flex relative overflow-y-auto lg:overflow-hidden lg:grid lg:grid-cols-4 gap-5 mt-10 '>
          <div className='lg:col-span-1 flex flex-col cursor-pointer group '>
            <img
              className='scale-95 hover:scale-100 duration-300 transition-all w-[296px] h-[200px]'
              src='news1.jpg'
            />
            <div className='group'>
              <p className='text-titleColor font-medium group-hover:text-main mt-3 duration-300 w-[296px]'>
                Kalibrasyon
              </p>
              <div className='bg-mainRed w-0 group-hover:w-full duration-500 h-0.5'></div>
            </div>
          </div>
          <div className='lg:col-span-1 flex flex-col cursor-pointer group '>
            <img
              className='scale-95 hover:scale-100 duration-300 transition-all w-[296px] h-[200px]'
              src='news2.jpg'
            />
            <div className='group'>
              <p className='text-titleColor font-medium group-hover:text-main mt-3 duration-300 w-[296px]'>
                Gizlilik ve Tarafsızlık beyanı
              </p>
              <div className='bg-mainRed w-0 group-hover:w-full duration-500 h-0.5'></div>
            </div>
          </div>
          <div className='lg:col-span-1 flex flex-col cursor-pointer group '>
            <img
              className='scale-95 hover:scale-100 duration-300 transition-all w-[296px] h-[200px]'
              src='news3.jpg'
            />
            <div className='group'>
              <p className='text-titleColor font-medium group-hover:text-main mt-3 duration-300 w-[296px]'>
                Kalite Politikamız
              </p>
              <div className='bg-mainRed w-0 group-hover:w-full duration-500 h-0.5'></div>
            </div>
          </div>
          <div className='lg:col-span-1 flex flex-col cursor-pointer group '>
            <img
              className='scale-95 hover:scale-100 duration-300 transition-all w-[296px] h-[200px]'
              src='news4.jpg'
            />
            <div className='group'>
              <p className='text-titleColor font-medium group-hover:text-main mt-3 duration-300 w-[296px]'>
                EAE Elektrik büyüyor
              </p>
              <div className='bg-mainRed w-0 group-hover:w-full duration-500 h-0.5'></div>
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center mt-12'>
          <button className='border border-mainRed text-mainRed font-semibold px-4 py-2 hover:bg-mainRed hover:text-white duration-300'>
            TÜM HABERLER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
