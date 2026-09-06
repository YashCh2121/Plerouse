import HeroImage from '../../assets/hero-image.webp'

function HeroCard({className}) {
  return (
    <div className={`flex flex-col w-full h-fit max-w-lg p-2 bg-black rounded-3xl gap-3 ${className}`}>
        <img className='h-80 w-full object-cover rounded-2xl' src={HeroImage} alt="HeroImage" />
        <div className='flex justify-between items-center px-4 py-2'>
            <p className='text-white max-w-32'>Your money, clearly organized.</p>
            <button className='rounded-full text-black bg-pink-300 p-3 pl-5 pr-5 font-semibold'>Open Account</button>
        </div>
    </div>
  )
}

export default HeroCard