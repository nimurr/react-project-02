import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";

 
export default function Blogs({hanldeSelectBtn}) {

    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]) 

  return (
    <div className="md:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-6">
      {
        courses.map(course => <Blog key={course.id} course={course} hanldeSelectBtn={hanldeSelectBtn}></Blog>)
      }
    </div>
  )
}
