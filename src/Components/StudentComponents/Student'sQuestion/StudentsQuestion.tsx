import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../ApiUtls/ApiUtls';
import Loading from '../../../Shared/Loading/Loading';
import SharedModal from '../../../Shared/Modal/Modal';
import { useNavigate } from 'react-router-dom';
interface Question {
  _id: string;
  title: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}
interface Submission {
  question: string;
  answer: string;
}
export default function StudentsQuestion() {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizName, setQuizName] = useState<string>("");
  const { headers } = useSelector((state: any) => state.userData);
  const { register } = useForm();
  const navigate =useNavigate()
  const [answers, setAnswers] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState("close");

  const getQuestions = () => {
    setIsLoading(true)
    axios.get(`${baseUrl}/quiz/without-answers/${quizId}`, headers).then((response) => {
      setQuestions(response.data.data.questions)
      setQuizName(response.data.data.title);
      
    }).catch((error) => {
      toast.error(error.response.data.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  const submitAnswers = () => {
    axios.post(`${baseUrl}/quiz/submit/${quizId}`, { answers }, headers).then((response) => {
      toast.success(response.data.data.message)
      showResultModal()
      setTimeout(() => {
        navigate(`/student`);
      }, 2000);
    }).catch((error) => {
      toast.error(error.response.data.message)
      setTimeout(() => {
        navigate(`/student`);
      }, 2000);
    });

  }

  const handleSubmit = (questionId: string, selectedAnswer: string) => {
    const newSubmission: Submission = {
      question: questionId,
      answer: selectedAnswer,
    };
    const existingSubmissionIndex = answers.findIndex(submission => submission.question === questionId);

    if (existingSubmissionIndex !== -1) {
      setAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingSubmissionIndex] = newSubmission;
        return updatedAnswers;
      });
    } else {
      setAnswers(prevAnswers => [...prevAnswers, newSubmission]);
    }
  };
  const showResultModal = () => {
    setModalState("score");
  };
  const handleClose = () => {
    setModalState("close");
  };

  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <>
      <div className='questions pt-3 mt-5 border rounded-xl'>
        <div className='m-3 font-bold'>
          QUIZ Name: {quizName ||""}
        </div>

        {!isLoading?questions.map((question, index) =>
          <div key={index} className='questionCard m-3   p-2  shadow-md rounded-lg  '>

            <div className='questionHeader w-auto bg-authImage  rounded-md mt-1 py-1 px-2 ' {...register('question')} >

              {question.title}
            </div>

            <div className='answers mx-3  '>

              <div className='subAnswer bg-white  rounded-md shadow-md my-2'>

                <input type="radio" className='mr-3'
                  {...register('answer')}
                  name={`question_${question._id}`}
                  onChange={() => handleSubmit(question._id, question.options.A)} />
                <span>{question.options.A}</span>
              </div>
              <div className='subAnswer bg-white  rounded-md shadow-md my-2'>

                <input type="radio" className='mr-3'
                  {...register('answer')}
                  name={`question_${question._id}`}
                  onChange={() => handleSubmit(question._id, question.options.B)} />
                <span>{question.options.B}</span>
              </div>
              <div className='subAnswer bg-white  rounded-md shadow-md my-2'>

                <input type="radio" className='mr-3'
                  {...register('answer')}
                  name={`question_${question._id}`}
                  onChange={() => handleSubmit(question._id, question.options.C)} />
                <span>{question.options.C}</span>
              </div>
              <div className='subAnswer bg-white  rounded-md shadow-md my-2'>

                <input type="radio" className='mr-3'
                  {...register('answer')}
                  name={`question_${question._id}`}
                  onChange={() => handleSubmit(question._id, question.options.D)} />
                <span>{question.options.D}</span>
              </div>

            </div>

          </div>
        ):<div className='flex items-center justify-center h-[70vh] text-5xl'>
          <Loading/>
          </div>}

        <div className="text-center">
        <button className='bg-authImage font-semibold hover:bg-red-200 rounded-3xl duration-500 mb-5 px-12 py-1 mr-8' onClick={submitAnswers}>Submit</button>
        </div>
      </div>
      <SharedModal
       show={modalState === "score"}
       title="Join Quiz"
       onSave={
  ()=>{}
       }
       
       omitHeader={true}
       onClose={handleClose}
       body={
<>
<div className='text-center mb-3'>
<i className="fa-solid fa-circle-check fa-3x"></i>
</div>
<div className='text-center '>
  <h3 className='pb-2 font-semibold'>Quiz submitted successfully</h3>

</div>
<div className='text-center'>
  <button onClick={handleClose}  className="bg-secondry px-8 rounded-2xl mt-8 font-semibold">close</button>
</div>
 </>
       }
      />
    </>
  )
}
