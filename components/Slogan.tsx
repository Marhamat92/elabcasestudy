import React from "react";

type Props = {};

function Slogan({}: Props) {
  return (
    <div className='bg-transparent container mx-auto font-inter'>
      <div
        className='grid grid-cols-3 mx-40 px-20  drop-shadow-2xl
      py-20 z-50 relative  bg-white  -mt-40
      '
      >
        <div className='col-span-3 lg:col-span-1 '>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <div>
              <img src='safe.svg' className='' alt='' />
            </div>
            <div>
              <p className=' text-mainRed font-bold text-2xl'>GÜVENİLİR</p>
            </div>
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1 '>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <div>
              <img src='quality.svg' className='' alt='' />
            </div>
            <div>
              <p className='  text-mainRed font-bold text-2xl'>KALİTELİ</p>
            </div>
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <div>
              <img src='correct.svg' className='' alt='' />
            </div>
            <div>
              <p className='  text-mainRed font-bold text-2xl'>DOĞRU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
