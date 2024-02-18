import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../ApiUtls/ApiUtls';
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
  const [questions, setQuestions] = useState<Question[]>([])
  const { headers } = useSelector((state: any) => state.userData);
  const { register } = useForm();
  const [answers, setAnswers] = useState<Submission[]>([]);


  const getQuestions = () => {
    axios.get(`${baseUrl}/quiz/without-answers/${quizId}`, headers).then((response) => {
      setQuestions(response.data.data.questions)
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  const submitAnswers = () => {
    axios.post(`${baseUrl}/quiz/submit/${quizId}`, { answers }, headers).then((response) => {
      toast.success(response.data.data.message)
    }).catch((error) => {
      toast.error(error.response.data.message)
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


  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <>
      <div className='questions pt-3 mt-5 border rounded-xl'>
        <div className='m-3 font-bold'>
          QUIZ Name
        </div>

        {questions.map((question, index) =>
          <div key={index} className='questionCard m-3 w-50  p-2  shadow-md rounded-lg  '>

            <div className='questionHeader w-auto bg-authImage  rounded-md mt-1 py-1 text-center ' {...register('question')} >

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
        )}

        <button onClick={submitAnswers}>Submit</button>
      </div>
    </>
  )
}
