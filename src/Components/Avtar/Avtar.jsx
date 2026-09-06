import Boy from '../../assets/boy-1.jpg' 

function Avtar({image, className}) {
  return (
    <div className={`flex justify-center items-center h-12 w-12 ${className}`}>
      <img src={image} alt="img" className='rounded-4xl w-full h-full object-cover'/>
    </div>
  )
}

export default Avtar