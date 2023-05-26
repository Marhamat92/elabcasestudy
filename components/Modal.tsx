import React, { useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  buttonText?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ buttonText, isOpen, setIsOpen }: Props) {
  return (
    <div>
      <button
        className='text-white bg-mainRed px-3 py-2 font-bold 
           hover:bg-white hover:text-mainRed transition-all duration-300 ease-in-out 
          '
        onClick={() => setIsOpen(true)}
      >
        {buttonText && buttonText}
      </button>
      {isOpen && (
        <div className='fixed z- inset-0 overflow-y-auto' id='modal'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-grey opacity-75'></div>
            </div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <div
              className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full py-2'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='text-black flex justify-end'>
                  <AiOutlineClose
                    className='cursor-pointer'
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <div className='sm:flex sm:items-start justify-center'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <div className='mt-2 flex flex-col items-center space-y-5 justify-center'>
                      <div>
                        <FiAlertCircle className='text-5xl text-mainRed' />
                      </div>
                      <div>
                        <p className='text-lg font-bold text-grey'>
                          Teklif almak için{" "}
                          <a className='text-mainRed' href='#'>
                            Giriş
                          </a>{" "}
                          yapmanız gerekiyor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
