import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl, getData } from "../../ApiUtls/ApiUtls";
import SharedModal from "../../Shared/AddModal/AddModal";
import Loading from "../../Shared/Loading/Loading";
import trash from "../../assets/Email (1).png";
import userImg from "../../assets/user img.png";
import AddStudentToGroup from "../AddStudentToGroup/AddStudentToGroup";

export default function Students() {
  const { headers } = useSelector((state: any) => state.userData);
  const [modalAction, setModalAction] = useState("close");
  const [studentId, setStudentId] = useState("");
  const [userId, setUserId] = useState("");
  const [groups, setGroup] = useState(new Array());
  const [students, setStudents] = useState(new Array());
  const [groupId, setGroupId] = useState<string>();
  //handle Show Modal
  const handleOpenModal = (action, studentId) => {
    setModalAction(action);
    setStudentId(studentId);
  };
  //handle Close Modal
  const closeModal = () => setModalAction("close");
  //handle Delete Function
  const handleDelete = () => {
    if (!studentId) return;
    axios
      .delete(`${baseUrl}/student/${studentId}`, headers)
      .then((response) => {
        toast.success(response?.data?.message);
        closeModal();

      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };
  // handle Onclick Function of Add/Delete
  const saveChanges = () => {
    if (modalAction === "add") {
      //handle Add Logic
    } else if (modalAction === "delete") {
      handleDelete();
    }
    closeModal();
  };
  // handle Group

  const getGroups = () => {
    axios
      .get(`${baseUrl}/group`, headers)
      .then((response) => {
        setGroup(response.data);
        setGroupId(response.data[0]?._id);
        getGroupById(response.data[0]?._id);
      })
      .catch((error) => {
        toast.error(error.response.data.message || "Invalid Data");
      });
  };
  //invoke functions to get data

  const getGroupById = (id) => {
    axios
      .get(`https://upskilling-egypt.com:3005/api/group/${id}`, headers)
      .then((res) => {
        setStudents(res.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUserToGroup=()=>{
    getData({path:`student/${userId}/${groupId}`,headers});
  }


  useEffect(() => {
    getGroups();
    
  }, [groupId]);

  return (
    <>
      <div>
        <div className=" flex justify-end ">
          <div className="rounded-3xl border border-black text-center  w-40 mt-2 mr-4  ">
            <i className="fa-solid fa-circle-plus"></i>
            <button onClick={() => handleOpenModal("add")}>Add Student to current group</button>
          </div>
        </div>
        <div className="p-3">
          <div className="border rounded-2xl ">
            <h3 className="ml-12 pt-2 font-semibold">Students List</h3>
            <div className="ml-12  ">
              {groups.map((group, index) => (
                <>
                  <button
                    onClick={() => {
                      getGroupById(group?._id);
                    }}
                    key={index}
                    className={` text-center px-2 mr-3 rounded-3xl border ${
                      index === 0 ? "bg-black text-white" : ""
                    } border-black w-32 mt-4`}
                  >
                    {group.name}
                  </button>
                </>
              ))}
            </div>
            <div>

              <SharedModal
                show={modalAction === "add"}
                title="Add New Student"
                onSave={addUserToGroup}
                onClose={closeModal}
                body={
                  modalAction =="add"?<AddStudentToGroup selectedStudentId={setUserId}/>:""
                }
              />
            </div>

            {students.length > 0 ? (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4  mx-5  pr-4 ">
                {students.map((student, index) => (
                  <div key={index} className="flex flex-col ml-4 mt-4">
                    <div className="border rounded-2xl flex justify-between align-items-center">
                      <div className="flex">
                        <img
                          src={userImg}
                          alt="userImage"
                          className="w-16 h-16 mr-4"
                        />
                        <div className="mt-2">
                          <p className="font-semibold mx-2">
                            {student?.first_name} {student?.last_name}
                          </p>
                          <p className="border-r mx-1 px-1">Role: Student</p>
                        </div>
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2  "></i>
                        </button>
                        <button
                          onClick={() =>
                            handleOpenModal("delete", student?._id)
                          }
                        >
                          <i className="fa-solid fa-trash mr-2 text-red-400"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className=" text-6xl h-[50%] w-full  flex items-center justify-center py-5">
                <Loading />
              </div>
            )}

            <SharedModal
              show={modalAction === "delete"}
              title="Delete Student"
              onSave={saveChanges}
              onClose={closeModal}
              body={
                <div className="text-center">
                  <img src={trash} alt="trash" className="w-1/6 m-auto" />
                  <p className="text-lg">
                    Are you sure you want to{" "}
                    <span className="text-red-500">delete</span> this student?
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
