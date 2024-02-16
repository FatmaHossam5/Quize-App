import { useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../ApiUtls/ApiUtls";

interface StudentCard {
    img: string,
    firstName: string,
    lastName: string,
    role: string,
    handleOpenModal: (action:string,id:string) => void,
    status: string,
    id: string,
    student: object,
    sendStudentInfo: (studentInfo: any) => void

}
export default function StudentCard({ img, firstName, lastName, role, id, status, handleOpenModal, student, sendStudentInfo }: StudentCard) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { headers } = useSelector((state: any) => state.userData);
    const [studentInfo, setStudentInfo] = useState();



    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleEdit = () => {
        handleOpenModal("edit", student?._id);
        setDropdownOpen(false)
    };

    const handleDelete = () => {
        handleOpenModal("delete", student?._id);
        // setDropdownOpen(false)

    };
    const getUserInfo = () => {
        getData({ path: `student/${student?._id}`, headers, setState: setStudentInfo })
        handleOpenModal("view", student?._id, studentInfo);
        sendStudentInfo(studentInfo)
    }
  

    const handleView = () => {
        getUserInfo(student?._id)
    };

    return (
        <>

            <div className="flex flex-col ml-1 mt-4">

                <div key={id} className="border rounded-2xl flex justify-between align-items-center relative">
                    <div className='flex'>
                        <img src={img} alt='userImage' className="w-16 h-16 mr-4" />
                        <div className="mt-2">
                            <p className="font-semibold mx-2">{firstName} {lastName}</p>
                            <div className="flex">
                                <p className='border-r mx-1 px-1'>Role: {role}</p>
                                <p>Status: {status}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="bg-white px-2 py-1 text-sm font-bold text-gray-900"
                            id="menu-button"

                        >
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute z-30 right-0 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1" aria-orientation="vertical" aria-labelledby="menu-button">
                                    <button onClick={handleView} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <i className="fa-solid fa-eye"></i> View
                                    </button>
                                    <button onClick={handleEdit} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <i className="fa-solid fa-edit"></i> Update
                                    </button>
                                    <button onClick={handleDelete} className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900" role="menuitem">
                                        <i className="fa-solid fa-trash-alt"></i> Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}