import React, { ReactNode } from 'react'
interface SharedModalProps {
  show?: boolean;
  title: string;
  body: ReactNode;
  onClose: () => void;
  onSave: () => void;
}

const SharedModal: React.FC<SharedModalProps> = ({
  show,
  title,
  body,
  onClose,
  onSave,

}) => {
  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50  ${show ? 'flex justify-center items-center' : 'hidden'}`}>
      <div className='bg-white md:w-[58%] w-[90%]  h-auto  rounded-lg'  >
        <div className='header flex justify-between border-b-2 '>
          <div className='headerName mt-3 ml-2 text-xl font-semibold'>{title}</div>
          <div className='Icons-close-save'>
            <button
              className="border-l-2 p-3"
              onClick={onSave}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="border-l-2 p-3 text-red-500"
              aria-label="Close"
              onClick={onClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

        </div>
        <div className='py-4'>
          {body}
        </div>
      </div>
    </div>
  );
};

export default SharedModal;

