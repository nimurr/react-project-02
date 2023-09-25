 

export default function Blog({course,hanldeSelectBtn}) {
    const {cover_img,title,description,price,credit} = course;
  return (
    <div className="bg-white p-4 rounded">
      <img className="w-full" src={cover_img} alt="" />
      <h2 className="text-md font-semibold my-2">{title}</h2>
      <p className="text-sm text-justify my-2">{description}</p>
      <div className="flex justify-between items-center">
          <i className='bx bx-dollar text-xl'></i>
          <p>Price: {price}</p>
          <i className='bx bxs-book-open text-xl'></i>
          <p>Credit : {credit}hr</p>
      </div>
      <button onClick={()=>hanldeSelectBtn(course)} className="w-full bg-blue-600 mt-3 text-white p-2 rounded">Select</button>
    </div>
  )
}
