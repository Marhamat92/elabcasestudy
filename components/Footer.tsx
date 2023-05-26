import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineFax } from "react-icons/md";

type Props = {};

function Footer({}: Props) {
  return (
    <div className='bg-black mt-20'>
      <div className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-16 py-12'>
          <div className='col-span-4 lg:col-span-1 '>
            <div className='py-3'>
              <a href='/'>
                <img
                  src='/logo.png'
                  alt='E-lab logo'
                  title='logo'
                  width='278'
                  height='70'
                />
              </a>
            </div>
            <div>
              <p className='mb-4 text-sm leading-6 text-white'>
                Kurulduğu ilk günden bu yana hızla büyüyen EAE şirketler grubu,
                E-LAB Kalibrasyon Laboratuvarı ile hizmetlerine bir yenisini
                daha eklemiştir
              </p>
              <a
                href='#'
                target='_blank'
                title='Kişisel Verileri Koruma Politikası'
              >
                <p className='text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Kişisel Verileri Koruma Politikası
                </p>
              </a>
              <a href='#' target='_blank' title='Gizlilik Politikası'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Gizlilik Politikası
                </p>
              </a>
              <a href='/cerez.pdf' target='_blank' title='Çerez Politikası'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Çerez Politikası
                </p>
              </a>
            </div>
          </div>
          <div className='col-span-4 lg:col-span-1'>
            <div className='flex flex-col py-5'>
              <h1 className='-mb-3 text-lg font-semibold text-white'>
                Hizmet Gruplarımız
              </h1>
            </div>
            <div>
              <div>
                <div>
                  <a title='Elektriksel Kalibrasyon' href='#'>
                    <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                      Elektriksel Kalibrasyon
                    </p>
                  </a>
                </div>
                <div>
                  <a title='Boyutsal kalibrasyon' href='#'>
                    <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                      Boyutsal kalibrasyon
                    </p>
                  </a>
                </div>
                <div>
                  <a title='Tork El Aleti Kalibrasyonu' href='#'>
                    <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                      Tork El Aleti Kalibrasyonu
                    </p>
                  </a>
                </div>
                <div>
                  <a title='Terazi Kalibrasyonu' href='#'>
                    <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                      Terazi Kalibrasyonu
                    </p>
                  </a>
                </div>
                <div>
                  <a title='Sıcaklık Kalibrasyonu' href='#'>
                    <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                      Sıcaklık Kalibrasyonu
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4 lg:col-span-1'>
            <div className='flex flex-col py-5'>
              <h1 className='-mb-3 text-lg font-semibold text-white'>
                Dökümanlar
              </h1>
            </div>

            <div>
              <a target='_blank' href='#' title='Akreditasyon Sertifikası.pdf'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Akreditasyon Sertifikası
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='Akreditasyon Kapsamı.pdf'
                title='Akreditasyon Kapsamı.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Akreditasyon Kapsamı
                </p>
              </a>
            </div>
            <div>
              <a target='_blank' href='#' title='#'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Dosyalar
                </p>
              </a>
            </div>
            <div>
              <a target='_blank' href='#' title='#'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Formlar
                </p>
              </a>
            </div>
            <div>
              <a target='_blank' href='#' title='#'>
                <p className='mt-1 text-sm leading-normal cursor-pointer text-white hover:text-mainRed'>
                  Anketler
                </p>
              </a>
            </div>
          </div>
          <div className='col-span-4 lg:col-span-1 '>
            <div className='flex flex-col py-5  '>
              <h1 className='-mb-3 text-lg font-semibold text-white'>
                Bize Ulaşın
              </h1>
            </div>
            <div className='flex flex-col space-y-3'>
              <a
                href='#'
                title='Gebze IV İstanbul Makine ve Sanayicileri Organize Bölgesi, 6. Cadde, No: 6 41455, Demirciler Köyü, Dilovası/Kocaeli'
              >
                <div className='flex items-center mt-1 space-x-2 cursor-pointer group'>
                  <div className='flex items-center space-x-2 cursor-pointer group'>
                    <IoLocationOutline className='flex items-center justify-center  text-xl     text-white group-hover:text-mainRed' />
                  </div>
                  <p className='text-sm text-white group-hover:text-mainRed'>
                    Gebze IV İstanbul Makine ve Sanayicileri Organize Bölgesi,
                    6. Cadde, No: 6 41455, Demirciler Köyü, Dilovası/Kocaeli
                  </p>
                </div>
              </a>
              <a href='Tel: +90 212 866 20 00' target='_blank'>
                <div className='flex items-center space-x-2 cursor-pointer group'>
                  <BsTelephone className='flex items-center justify-center  text-xl    text-white group-hover:text-mainRed' />
                  <p className='text-sm text-white group-hover:text-mainRed'>
                    (90) 212 866 20 00/6137
                  </p>
                </div>
              </a>
              <a href='mailto:elabkal@eaegroup.com' target='_blank'>
                <div className='flex items-center space-x-2 cursor-pointer group'>
                  <AiOutlineMail className='flex items-center justify-center  text-xl      text-white group-hover:text-mainRed' />
                  <p className='text-sm text-white group-hover:text-mainRed'>
                    elabkal@eaegroup.com
                  </p>
                </div>
              </a>
              <a href='' title='(90) 212 886 24 20'>
                <div className='flex items-center space-x-2 cursor-pointer group'>
                  <div>
                    <MdOutlineFax className='flex items-center justify-center   text-xl      text-white group-hover:text-mainRed' />
                  </div>
                  <p className='text-sm text-white group-hover:text-mainRed'>
                    (90) 212 886 24 20
                  </p>
                </div>
              </a>
            </div>
            <div className='flex items-center py-2 mt-2 space-x-3'>
              <a href='#' target='_blank'>
                <BsFacebook className='flex items-center justify-center w-6 h-6 text-xl bg-black  rounded-full cursor-pointer  text-white hover:text-mainRed' />
              </a>
              <a href='#' target='_blank'>
                <SiYoutubemusic className='flex items-center justify-center w-6 h-6 text-xl bg-black rounded-full cursor-pointer   text-white hover:text-mainRed' />
              </a>
              <a href='#' target='_blank'>
                <AiFillLinkedin className='flex items-center justify-center w-6 h-6 text-xl bg-black rounded-full cursor-pointer   text-white hover:text-mainRed' />
              </a>
              <a href='#' target='_blank'>
                <AiFillInstagram className='flex items-center justify-center w-6 h-6 text-xl bg-black rounded-full cursor-pointer ri-instagram-fill text-white hover:text-mainRed' />
              </a>
            </div>
          </div>
        </div>
        <hr className='text-[#515151]' />
        <div>
          <div className='flex flex-col items-center justify-between py-12 lg:flex-row '>
            <p className='text-sm text-white'>© 2023 Tüm hakkı Saklıdır.</p>
            <p className='text-sm text-white'>
              Yazılım ve Tasarım
              <a
                href='https://www.linkedin.com/in/marhamat-baghirov/'
                target='_blank'
              >
                <span className='text-white hover:text-mainRed'>
                  {" "}
                  Marhamat Baghirov
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
