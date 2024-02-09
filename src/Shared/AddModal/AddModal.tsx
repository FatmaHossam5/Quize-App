import React, { useEffect, useState } from 'react'

export default function AddModal({ isOpen, onClose, children, clickedBtn, buttonLabel = "Button",
    width = "auto",
    height = "auto" }) {
    const [modalOpen, setModalOpen] = useState(isOpen);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalOpen(false);
        onClose();
    };
    return (
      
        <>
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div
                        className="relative w-full h-full max-w-md  mx-auto my-6 bg-white rounded-md shadow-lg pb-3 "
                        style={{ width, height }}
                    >
                        {/* Modal content */}
                        <div className="flex flex-col   ">


                            <div className="flex justify-between items-center border-b-2   ">
                                <div className='px-3'>
                                {buttonLabel}

                                </div>
                                <div >

                                    <button
                                        className="border-l-2 p-3   "
                                        onClick={clickedBtn}
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                              
                                    <button
                                        className="  border-l-2 p-3  "
                                        onClick={handleClose}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            {children}

                        </div>
                    </div>
                </div>


            )
            }
        </>)
}