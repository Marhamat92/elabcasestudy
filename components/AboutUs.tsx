import React from "react";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className='font-inter mt-24 container  mx-auto px-4 lg:px-0 '>
      <div className='grid grid-cols-2 gap-5 '>
        <div className='col-span-2 lg:col-span-1'>
          <div className='flex flex-col justify-start lg:justify-center space-y-5'>
            <h1 className='tracking-widest text-mainRed text-md'>HAKKIMIZDA</h1>
            <h1 className='mt-3 text-4xl font-bold leading-snug text-black lg:text-5xl'>
              Biz Kimiz?
            </h1>
            <p className='text-grey'>
              Kurulduğu ilk günden bu yana hızla büyüyen EAE şirketler grubu,
              E-LAB Kalibrasyon Laboratuvarı ile hizmetlerine bir yenisini daha
              eklemiştir. Kalibrasyon Laboratuvarımız 2020 yılında
              faaliyetlerine başlamış olup Elektriksel Kalibrasyon, Sıcaklık
              Kalibrasyonu, Mekanik Kalibrasyon, Boyut Kalibrasyonu, Tork El
              Aletleri Kalibrasyonu ve Terazi Kalibrasyonu laboratuvarları ile
              siz değerli müşterilerimize doğru ve güvenilir ölçümler ile hizmet
              vermeye başlamıştır. Genç, dinamik ve müşteri memnuniyetinin
              sağlanmasında profesyonel kadromuz ile birlikte TS EN 17025
              standardının tüm gerekliliklerini yerine getirerek SI birimlerine
              göre izlenebilirlik zincirinin sürekliliği sağlanmaktadır.
            </p>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1 '>
          <div className='flex  lg:justify-end justify-center '>
            <img src='aboutus.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
