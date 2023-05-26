import React from "react";

type Props = {};

function Services({}: Props) {
  return (
    <div className='grid grid-cols-3 gap-7 font-inter mt-20'>
      <div className='relative flex flex-col justify-center col-span-3 px-4 py-24 lg:col-span-1 lg:px-0 lg:py-52 bg-mainRed lg:items-end'>
        <div className=' lg:mr-2 xxl:mr-14'>
          <h3 className='leading-normal tracking-widest text-white text-md'>
            HİZMETLERİMİZ
          </h3>
          <h1 className='mt-3 text-3xl font-bold leading-normal text-white lg:text-5xl'>
            Hizmet Gruplarımız
          </h1>
          <div className='group'>
            <button className='px-3 py-2 mt-5 font-semibold text-white duration-300 bg-transparent border-2 border-white lg:py-4 lg:px-5 group-hover:border-black group-hover:text-black'>
              TÜM HİZMETLERİMİZİ İNCELEYİN
            </button>
          </div>
        </div>
      </div>
      <div className='relative col-span-3 px-2 -mt-20 lg:col-span-2 lg:pr-52 lg:px-0 lg:mt-0'>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
          <div className='flex flex-col col-span-1 transition-all duration-300 cursor-pointer group lg:col-span-1 hover:bg-mainRed'>
            <div className='p-2 hover:mix-blend-multiply '>
              <img
                className='w-full h-full transition-all duration-300 scale-90 hover:scale-100'
                src='elektriksel-kalibrasyon.jpg'
                alt='elektriksel-kalibrasyon'
              />
            </div>
            <h3 className='text-xl font-semibold text-center group-hover:text-white '>
              ELEKTRİKSEL KALİBRASYON
            </h3>
          </div>
          <div className='flex flex-col col-span-1 transition-all duration-300 cursor-pointer group lg:col-span-1 hover:bg-mainRed'>
            <div className='p-2 hover:mix-blend-multiply '>
              <img
                className='w-full h-full transition-all duration-300 scale-90 hover:scale-100'
                src='tork-el-aleti-kalibrasyonu.jpg'
                alt='tork-el-aleti-kalibrasyon'
              />
            </div>
            <h3 className='text-xl font-semibold text-center group-hover:text-white '>
              TORK EL ALETİ KALİBRASYONU
            </h3>
          </div>
          <div className='flex flex-col col-span-1 transition-all duration-300 cursor-pointer group lg:col-span-1 hover:bg-mainRed'>
            <div className='p-2 hover:mix-blend-multiply '>
              <img
                className='w-full h-full transition-all duration-300 scale-90 hover:scale-100'
                src='boyutsal-kalibrasyon.jpg'
                alt='boyutsal-kalibrasyon'
              />
            </div>
            <h3 className='text-xl font-semibold text-center group-hover:text-white '>
              BOYUTSAL KALİBRASYON
            </h3>
          </div>
          <div className='flex flex-col col-span-1 transition-all duration-300 cursor-pointer group lg:col-span-1 hover:bg-mainRed'>
            <div className='p-2 hover:mix-blend-multiply '>
              <img
                className='w-full h-full transition-all duration-300 scale-90 hover:scale-100'
                src='sicaklik-kalibrasyonu.jpg'
                alt='sıcaklık-kalibrasyon'
              />
            </div>
            <h3 className='text-xl font-semibold text-center group-hover:text-white '>
              SICAKLIK KALİBRASYONU
            </h3>
          </div>
          <div className='flex flex-col col-span-1 transition-all duration-300 cursor-pointer group lg:col-span-1 hover:bg-mainRed'>
            <div className='p-2 hover:mix-blend-multiply '>
              <img
                className='w-full h-full transition-all duration-300 scale-90 hover:scale-100'
                src='terazi-kalibrasyonu.jpg'
                alt='terazi-kalibrasyonu'
              />
            </div>
            <h3 className='text-xl font-semibold text-center group-hover:text-white '>
              TERAZİ KALİBRASYONU
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
