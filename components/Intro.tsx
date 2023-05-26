import React from "react";
import Slider from "react-slick";

type Props = {};

function Intro({}: Props) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute top-1/2 right-0 z-10 cursor-pointer'
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute top-1/2 left-0 z-10 cursor-pointer'
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[url('/bg-image.png')]     bg-no-repeat w-full  bg-cover  py-96 overflow-hidden  relative     flex justify-center items-center font-inter">
      <div className='container'>
        <Slider {...settings}>
          <div className=''>
            <div className='flex flex-col justify-center items-center space-y-10 '>
              <div className='flex items-center'>
                <h1 className='text-2xl text-white font-medium text-center'>
                  TÜRKAK onaylı Akredite Kalibrasyon Laboratuvarı
                </h1>
              </div>
              <div>
                <button className='bg-white px-4 py-2 font-medium cursor-pointer hover:bg-mainRed hover:text-white transition-all duration-300'>
                  DAHA FAZLASINI GÖR
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center items-center space-y-10  '>
              <div className='flex items-center px-64  '>
                <h1 className='text-2xl text-white font-medium text-center'>
                  Laboratuvarımız, TS EN ISO/IEC 17025 standardının
                  gerekliliklerini yerine getirerek TÜRKAK tarafından AB-0248-K
                  tescil no ile akredite edilmiştir. Akreditasyon Sertifikası
                  almaya layık bulunduğunu duyurmaktan büyük sevinç duyarız.
                </h1>
              </div>
              <div>
                <button className='bg-white px-4 py-2 font-medium cursor-pointer hover:bg-mainRed hover:text-white transition-all duration-300'>
                  DAHA FAZLASINI GÖR
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center items-center space-y-10  '>
              <div className='flex items-center px-12 lg:px-64'>
                <h1 className='text-2xl text-white font-medium text-center'>
                  Türkak tarafından yapılan denetim sonucunda TS EN ISO/IEC
                  17025:2017 Standardına göre Detayda yer alan kapsamlarda
                  akredite edilmiştir.
                </h1>
              </div>
              <div>
                <button className='bg-white px-4 py-2 font-medium cursor-pointer hover:bg-mainRed hover:text-white transition-all duration-300'>
                  DAHA FAZLASINI GÖR
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Intro;
