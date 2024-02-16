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
import StudentCard from "../StudentCard/StudentCard";
import Label from "../../Shared/Label/Label";

export default function Students() {
  const { headers } = useSelector((state: any) => state.userData);
  const [modalAction, setModalAction] = useState("close");
  const [studentId, setStudentId] = useState("");
  const [userId, setUserId] = useState("");
  const [groups, setGroup] = useState(new Array());
  const [students, setStudents] = useState(new Array());
  const [groupId, setGroupId] = useState<string>();
  const [gId, setGId] = useState('');
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?._id)
  const [studentData, setStudentData] = useState();



  //handle Show Modal
  const handleOpenModal = (action: string, studentId: string) => {
    setModalAction(action)
    setStudentId(studentId)



  };
  //get Data for View
  const getAll = (studentInfo) => {
    setStudentData(studentInfo)
  }
  console.log(studentData);


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
        getGroups();

      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
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
    setActiveGroupId(id)
    axios
      .get(`https://upskilling-egypt.com:3005/api/group/${id}`, headers)
      .then((res) => {


        setStudents(res.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUserToGroup = () => {
    getData({ path: `student/${userId}/${groupId}`, headers });


  }

  const handleUpdate = () => {
    console.log(studentId);

    console.log(gId);

    axios.put(`https://upskilling-egypt.com:3005/api/student/${studentId}/${gId}`, headers).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);

    })
  }


  useEffect(() => {
    getGroups();



  }, [groupId, studentData]);

  return (
    <>
      <div>
        <div className=" flex justify-end ">
          <div className="rounded-3xl border border-black text-center  w-60 mt-2 mr-4 hover:bg-black hover:text-white ">
            <i className="fa-solid fa-circle-plus mr-1"></i>
            <button onClick={() => handleOpenModal("add")}>Add Student to current group</button>
          </div>
        </div>
        <div className="p-3">
          <div className="border rounded-2xl py-3">
            <h3 className="ml-12 pt-2 font-semibold">Students List</h3>
            <div className="ml-12  ">
              {groups.map((group, index) => (
                <>
                  <button

                    onClick={() => getGroupById(group._id)}
                    className={` w-36 px-1 mr-3 rounded-3xl border ${group._id === activeGroupId ? 'bg-black text-white' : ''
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
                  <>{
                    modalAction == "add" ? <AddStudentToGroup selectedStudentId={setUserId} /> : ""}
                  </>
                }
              />
            </div>
            <div>

            </div>

            {students.length > 0 ? (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4  mx-5  pr-4 ">
                {students.map((student, index) => (
                  <div key={index} className="flex flex-col ml-4 mt-4">
                    <StudentCard
                      firstName={student.first_name}
                      lastName={student.last_name}
                      role='Student'
                      status='Active'
                      handleOpenModal={handleOpenModal}
                      sendStudentInfo={getAll}
                      student={student}
                      img={userImg} />

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
              onSave={handleDelete}
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

            <SharedModal
              show={modalAction === "edit"}
              title="update Student"
              onSave={handleUpdate}
              onClose={closeModal}
              body={
                <div className="text-center">
                  <select className="w-[90%] bg-authImage" onClick={(eventInfo) => { return setGId(((eventInfo.target as HTMLInputElement).value)) }}>
                    <option>Select Group</option>
                    {groups.map((group, idx) => <option key={idx} value={group._id}>{group.name} </option>)}
                  </select>
                </div>
              }
            />

            <SharedModal
              show={modalAction === "view"}
              title="Student Info"
              onClose={closeModal}
              onSave={() => console.log(studentData)}
              body={
                <>
                  <Label word='FirstName'
                    class_Name="w-[80%] m-auto"
                    value={studentData && studentData.first_name}



                  />
                  <Label word='lastName'
                    class_Name="w-[80%] m-auto"
                    value={studentData && studentData.last_name}



                  />
                  <Label word='Email'
                    class_Name="w-[80%] m-auto"
                    value={studentData && studentData.email}



                  />
                  <Label word='Group-Name'
                    class_Name="w-[80%] m-auto"
                    value={studentData && studentData.group.name}



                  />
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
