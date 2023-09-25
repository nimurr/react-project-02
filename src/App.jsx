import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() { 

  const [courseName , setCourseName] = useState([]); 
  const [price , setPrice] = useState(0);
  const [cradit , setCradit] = useState(0);
  const [remaining , setRemaining] = useState(20);


  const hanldeSelectBtn = (course)=>{
    const isExet = courseName.map(data => data.id);

    if(isExet.includes(course.id)){
     return swal({
        title: `Already added this card`,
        text: "I will close in 4 seconds.",
        timer: 4000
      });
    }

      const totalCredit = course.credit;
      const result = cradit + totalCredit;

      if(result > 20 ){
        return sweetAlert("Oops...", "Your Credit AlReady 20 ", "error");

      }

      setCradit(result)

      setCourseName([...courseName,course])
      setPrice(price + course.price);

      setRemaining(20 - result)


      // setCradit(cradit + course.credit)
      // if(cradit > 20){
      //   return sweetAlert("Oops...", "Your Credit allReady 20 ", "error");
      // }
      // setRemaining(remaining - course.credit)
      

      
  }


  return (
    <>
    <Toaster />
      <h2 className='text-4xl my-10 text-center font-semibold'>Course Registration</h2>
      <div className='flex md:flex-row flex-col-reverse justify-between w-11/12 mx-auto gap-10'>
        <Blogs hanldeSelectBtn={hanldeSelectBtn}></Blogs>
        <Bookmark courseName={courseName} price={price} cradit={cradit} remaining={remaining}></Bookmark>
      </div>
    </>
  )
}

export default App
