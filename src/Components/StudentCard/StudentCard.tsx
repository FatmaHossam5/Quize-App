interface StudentCard {
    img: string,
    firstName: string,
    lastName: string,
    role: string,
    openModal: () => void,

    id: string
}
export default function StudentCard({ img, firstName, lastName, role, id, openModal }: StudentCard) {
    return (
        <>

            <div className="flex flex-col ml-4 mt-4 ">
                <div key={id} className="border rounded-2xl flex justify-between align-items-center">
                    <div className='flex'>
                        <img src={img} alt='userImage' className="w-16 h-16 mr-4" />
                        <div className="mt-2">
                            <p className="font-semibold mx-2">{firstName} {lastName}</p>
                            <p className='border-r mx-1 px-1'>{role}: Student</p>
                        </div>
                    </div>
                    <div>
                        <button>
                            <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2  "></i>
                        </button>
                        <button onClick={openModal}>
                            <i className="fa-solid fa-trash mr-2 text-red-400"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
