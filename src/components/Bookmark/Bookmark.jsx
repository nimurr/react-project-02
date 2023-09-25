 
export default function Bookmark({courseName,price , cradit, remaining}) {
    console.log(courseName)
  return (
    <div className="md:w-1/4 w-full bg-white p-4 h-auto">
        <h2 className="font-bold text-blue-600 border-2 p-2 rounded border-blue-500">Credit Hour Remaining {remaining} hr</h2>
        <hr className="my-2" />
        <h2 className="font-semibold">Course Name</h2>
        <ul className="list-decimal ml-4 my-2">
            {
                courseName.map(course => <li key={course.id}>{course.title}</li>)
            }
        </ul>
        
        
        <hr  className="my-2" />
        <h2 className="font-semibold">Total Credit Hour : {cradit} hr</h2>
        <hr  className="my-2" />
        <p className="font-semibold">Total Price : {price} USD</p>
    </div>
  )
}
