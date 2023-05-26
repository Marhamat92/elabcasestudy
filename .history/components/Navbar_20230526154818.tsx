import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import Modal from "./Modal";
import { TiThMenuOutline } from "react-icons/ti";

type Props = {};

function Navbar({}: Props) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [windowScroll, setWindowScroll] = React.useState(false);

  //set navbar bg black when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`flex w-full justify-between items-center   
      font-inter fixed top-0 left-0 right-0 
      text-white px-4 lg:px-10 py-5  z-50 ${
        windowScroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className='flex'>
        <img src='logo.png' alt='e-lab image' />
      </div>
      {isMobile ? (
        <div>
          <TiThMenuOutline className='text-white text-2xl cursor-pointer' />
        </div>
      ) : (
        <>
          <div className='flex space-x-8 items-center'>
            <div>
              <a href='#' className='text-white text-lg font-bold'>
                ANASAYFA
              </a>
            </div>
            <div
              className='flex items-center space-x-1 relative'
              onClick={() => {
                setIsAboutUsOpen(!isAboutUsOpen);
                setIsCalibrationOpen(false);
                setIsLanguageOpen(false);
              }}
            >
              <a href='#' className='text-white text-lg font-bold'>
                HAKKIMIZDA
              </a>
              <IoIosArrowDown className='text-white' />
              {isAboutUsOpen && (
                <div
                  className='absolute top-10 left-0 bg-white   py-5 shadow-md'
                  onMouseLeave={() => setIsAboutUsOpen(false)}
                >
                  {aboutUs.map((about) => (
                    <p
                      key={about.id}
                      className='text-black text-md font-regular cursor-pointer mx-4 hover:text-mainRed transition-all duration-300 ease-in-out py-2'
                    >
                      {about.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div
              className='flex items-center space-x-1 relative'
              onClick={() => {
                setIsCalibrationOpen(!isCalibrationOpen);
                setIsAboutUsOpen(false);
                setIsLanguageOpen(false);
              }}
            >
              <a href='#' className='text-white text-lg font-bold'>
                KALİBRASYONLAR
              </a>
              <IoIosArrowDown className='text-white' />
              {isCalibrationOpen && (
                <div
                  className='absolute top-10 left-0 bg-white  py-5 shadow-md'
                  onMouseLeave={() => setIsCalibrationOpen(false)}
                >
                  {calibrations.map((calibration) => (
                    <p
                      key={calibration.id}
                      className='text-black text-md font-regular cursor-pointer hover:text-mainRed transition-all duration-300 ease-in-out mx-2 py-2'
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
            <div
              className='flex items-center space-x-1 relative'
              onClick={() => {
                setIsLanguageOpen(!isLanguageOpen);
                setIsAboutUsOpen(false);
                setIsCalibrationOpen(false);
              }}
            >
              <p className='text-white text-lg font-bold cursor-pointer'>
                {selectedLanguage}
              </p>
              <IoIosArrowDown className='cursor-pointer' />
              {isLanguageOpen && (
                <div
                  className='absolute top-10 left-0 bg-white px-2 py-2 shadow-md'
                  onMouseLeave={() => setIsLanguageOpen(false)}
                >
                  {languages.map((language) => (
                    <p
                      key={language.id}
                      className='text-black text-lg font-bold cursor-pointer hover:text-mainRed transition-all duration-300 ease-in-out border-b-2 border-gray-200'
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
              <div>
                <Modal
                  setIsOpen={setModalOpen}
                  isOpen={modalOpen}
                  buttonText='TEKLİF ALIN'
                />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
