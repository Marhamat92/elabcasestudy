import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

type Props = {};

function Navbar({}: Props) {
  const [isMobile, setIsMobile] = React.useState(false);

  //languages
  const languages = [
    { id: 1, name: "TR" },
    { id: 2, name: "EN" },
  ];
  const [selectedLanguage, setSelectedLanguage] = React.useState("TR");
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  //languages

  //about us dropdown
  const [isAboutUsOpen, setIsAboutUsOpen] = React.useState(false);
  const aboutUs = [
    { id: 1, name: "Biz Kimiz" },
    { id: 2, name: "Misyon" },
    { id: 3, name: "Vizyon" },
    { id: 4, name: "Sertifikalar" },
  ];

  const [isCalibrationOpen, setIsCalibrationOpen] = React.useState(false);
  const calibrations = [
    { id: 1, name: "Elektriksel Kalibrasyon" },
    { id: 2, name: "Boyutsal Kalibrasyon" },
    { id: 3, name: "Sıcaklık Kalibrasyonu" },
    { id: 4, name: "Tork Kalibrasyonu" },
    { id: 5, name: "Terazi Kalibrasyonu" },
  ];

  //close dropdowns when clicked outside of dropdown area or mouse leave

  //set isMobile to true if window width is less than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, setIsMobile]);

  return (
    <nav
      className='flex w-full justify-between items-center fixed bg-black 
      font-inter 
      text-white px-10 py-5 z-50
    '
    >
      <div>
        <img src='logo.png' alt='e-lab image' />
      </div>
      <div className='flex space-x-8 items-center'>
        <div>
          <a href='#' className='text-white text-lg font-bold'>
            ANASAYFA
          </a>
        </div>
        <div
          className='flex items-center space-x-1 relative'
          onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
        >
          <a href='#' className='text-white text-lg font-bold'>
            HAKKIMIZDA
          </a>
          <IoIosArrowDown className='text-white' />
          {isAboutUsOpen && (
            <div className='absolute top-10 left-0 bg-white   py-5 shadow-md'>
              {aboutUs.map((about) => (
                <p
                  key={about.id}
                  className='text-black text-md font-regular cursor-pointer mx-4 hover:text-mainRed transition-all duration-300 ease-in-out'
                >
                  {about.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <div
          className='flex items-center space-x-1 relative'
          onClick={() => setIsCalibrationOpen(!isCalibrationOpen)}
        >
          <a href='#' className='text-white text-lg font-bold'>
            KALİBRASYONLAR
          </a>
          <IoIosArrowDown className='text-white' />
          {isCalibrationOpen && (
            <div className='absolute top-10 left-0 bg-white  py-5 shadow-md'>
              {calibrations.map((calibration) => (
                <p
                  key={calibration.id}
                  className='text-black text-md font-regular cursor-pointer hover:text-mainRed transition-all duration-300 ease-in-out mx-2'
                >
                  {calibration.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <a href='#' className='text-white text-lg font-bold'>
            İLETİŞİM
          </a>
        </div>
      </div>

      <div className='flex items-center space-x-5'>
        <div className='flex items-center space-x-1 relative'>
          <p className='text-white text-lg font-bold cursor-pointer'>
            {selectedLanguage}
          </p>
          <IoIosArrowDown
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className='cursor-pointer'
          />
          {isLanguageOpen && (
            <div className='absolute top-10 left-0 bg-white px-2 py-2 shadow-md'>
              {languages.map((language) => (
                <p
                  key={language.id}
                  className='text-black text-lg font-bold cursor-pointer hover:text-mainRed transition-all duration-300 ease-in-out'
                  onClick={() => {
                    setSelectedLanguage(language.name);
                    setIsLanguageOpen(false);
                  }}
                >
                  {language.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <FaUserAlt />
        </div>
        <div>
          <button
            className='text-white bg-mainRed px-3 py-2 font-bold 
           hover:bg-white hover:text-mainRed transition-all duration-300 ease-in-out 
          '
          >
            TEKLİF ALIN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
