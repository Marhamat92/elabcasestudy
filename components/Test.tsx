import React from "react";

type Props = {};

function Test({}: Props) {
  return (
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
            <p className='mb-4 text-sm leading-6 text-secondaryText'>
              ART Teknik Isıtma ve Soğutma Sistemleri Türkiye’de Dilovası
              Kocaeli fabrikasında üretim yapmakta olan birçok patente konu olan
              malzemelerin tek yerli üreticisidir.
            </p>
            <a
              href='/kvkk.pdf'
              target='_blank'
              title='Kişisel Verileri Koruma Politikası'
            >
              <p className='text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                Kişisel Verileri Koruma Politikası
              </p>
            </a>
            <a href='/gizlilik.pdf' target='_blank' title='Gizlilik Politikası'>
              <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                Gizlilik Politikası
              </p>
            </a>
            <a href='/cerez.pdf' target='_blank' title='Çerez Politikası'>
              <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                Çerez Politikası
              </p>
            </a>
          </div>
        </div>
        <div className='col-span-4 lg:col-span-1'>
          <div className='flex flex-col py-5'>
            <h1 className='-mb-3 text-lg font-semibold text-titlecolor'>
              Ürün Gruplarımız
            </h1>
          </div>
          <div>
            <div>
              <div>
                <a title='Konsol Grubu' href='/urunler/konsol-grubu'>
                  <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                    Konsol Grubu
                  </p>
                </a>
              </div>
              <div>
                <a
                  title='Pürjör Kör Tapa Grubu'
                  href='/urunler/purjor-kor-tapa-grubu'
                >
                  <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                    Pürjör Kör Tapa Grubu
                  </p>
                </a>
              </div>
              <div>
                <a
                  title='Panel Radyatör Yedek Parçaları'
                  href='/urunler/panel-radyator-yedek-parcalari'
                >
                  <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                    Panel Radyatör Yedek Parçaları
                  </p>
                </a>
              </div>
              <div>
                <a
                  title='Bakır Alaşımlar Grubu'
                  href='/urunler/bakir-alasimlar-grubu'
                >
                  <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                    Bakır Alaşımlar Grubu
                  </p>
                </a>
              </div>
              <div>
                <a
                  title='Radyatör Plastik Ürünler'
                  href='/urunler/radyator-plastik-urunler'
                >
                  <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                    Radyatör Plastik Ürünler
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4 lg:col-span-1'>
          <div className='flex flex-col py-5'>
            <h1 className='-mb-3 text-lg font-semibold text-titlecolor'>
              Kalite ve Sertifikalar
            </h1>
          </div>
          <div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/ART_TEKNIK_KALITE_POLITIKASI__compressed__1219.pdf'
                title='/static/files/ART_TEKNIK_KALITE_POLITIKASI__compressed__1219.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  Art Teknik Kalite Politikası
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/76-15922-1-E_ART_TEKNİK_SURV2_ADDRESS_CHANGE_2019_TR__2622.pdf'
                title='/static/files/76-15922-1-E_ART_TEKNİK_SURV2_ADDRESS_CHANGE_2019_TR__2622.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  ISO 14001
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/ISO9001__4793.pdf'
                title='/static/files/ISO9001__4793.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  ISO 9001
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/Art-Teknik_Sertifika2_compressed__2132.pdf'
                title='/static/files/Art-Teknik_Sertifika2_compressed__2132.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  Art Teknik Sertifika No.17-265
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/Art-Teknik_Sertifika_compressed__1315.pdf'
                title='/static/files/Art-Teknik_Sertifika_compressed__1315.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  Art Teknik Sertifika No.17-266
                </p>
              </a>
            </div>
            <div>
              <a
                target='_blank'
                href='https://art-teknik.com:8000/static/files/VDI_6036_compressed__3978.pdf'
                title='/static/files/VDI_6036_compressed__3978.pdf'
              >
                <p className='mt-1 text-sm leading-normal cursor-pointer text-secondaryText hover:text-main'>
                  VDI 6036
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-4 lg:col-span-1 '>
          <div className='flex flex-col py-5'>
            <h1 className='-mb-3 text-lg font-semibold text-titlecolor'>
              Bize Ulaşın
            </h1>
          </div>
          <a
            href=''
            title='KOBI OSB Köseler Mah. 19. Sk. No:4 , 41455 Dilovası/Kocaeli'
          >
            <div className='flex items-center mt-1 space-x-2 cursor-pointer group'>
              <div>
                <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full ri-map-pin-2-line text-secondaryText group-hover:text-main'></i>
              </div>
              <p className='text-sm text-secondaryText group-hover:text-main'>
                KOBI OSB Köseler Mah. 19. Sk. No:4 , 41455 Dilovası/Kocaeli
              </p>
            </div>
          </a>
          <a href='Tel: +90 216 591 03 65' target='_blank'>
            <div className='flex items-center space-x-2 cursor-pointer group'>
              <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full ri-phone-line text-secondaryText group-hover:text-main'></i>
              <p className='text-sm text-secondaryText group-hover:text-main'>
                +90 216 591 03 65
              </p>
            </div>
          </a>
          <a href='mailto:info@art-teknik.com' target='_blank'>
            <div className='flex items-center space-x-2 cursor-pointer group'>
              <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full ri-mail-unread-line text-secondaryText group-hover:text-main'></i>
              <p className='text-sm text-secondaryText group-hover:text-main'>
                info@art-teknik.com
              </p>
            </div>
          </a>
          <a
            href=''
            title='Hafta içi: 08:00 - 18:00
  Cumartesi: 08:00 - 17:00
  Pazar: Kapalı'
          >
            <div className='flex items-center space-x-2 cursor-pointer group'>
              <div>
                <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full ri-time-line text-secondaryText group-hover:text-main'></i>
              </div>
              <p className='text-sm text-secondaryText group-hover:text-main'>
                Hafta içi: 08:00 - 18:00 Cumartesi: 08:00 - 17:00 Pazar: Kapalı
              </p>
            </div>
          </a>
          <div className='flex items-center py-2 space-x-3'>
            <a href='https://www.facebook.com/ArtTeknik' target='_blank'>
              <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full cursor-pointer ri-facebook-circle-fill text-secondaryText hover:text-main'></i>
            </a>
            <a
              href='https://www.instagram.com/artteknikcom/?hl=en'
              target='_blank'
            >
              <i className='flex items-center justify-center w-12 h-12 text-xl bg-white rounded-full cursor-pointer ri-instagram-fill text-secondaryText hover:text-main'></i>
            </a>
          </div>
        </div>
      </div>
      <hr className='text-[#515151]' />
      <div>
        <div className='flex flex-col items-center justify-between py-12 lg:flex-row '>
          <p className='text-sm text-secondaryText'>
            © 2023 Tüm hakkı Saklıdır.
          </p>
          <p className='text-sm text-secondaryText'>
            Yazılım ve Tasarım
            <a
              href='https://www.linkedin.com/in/marhamat-baghirov/'
              target='_blank'
            >
              <span> Marhamat Baghirov</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
