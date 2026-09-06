import Boy from '../../assets/boy-1.jpg'
import BoyImg from '../../assets/boy-2.jpg'
import Girl from '../../assets/girl-1.jpg'
import GirlImg from '../../assets/girl-2.jpg'
import Avtar from '../Avtar/Avtar'
import HeroCard from '../HeroCard/HeroCard'

function Hero() {
    return (
        <div className='flex justify-center items-center flex-col gap-6 h-screen w-full'>
            <h1 className='flex items-center justify-center flex-col text-6xl '>
                <span className='flex justify-center items-center gap-3'>
                    Can one smarter bank
                    <span className='flex justify-center items-center gap-2 bg-[#dbfb00] h-full w-fit px-7 py-5 rounded-full'>
                        <span className='flex justify-center items-center bg-black h-2.5 w-2.5 rounded-full'></span>
                        <span className='flex justify-center items-center bg-black/40 h-2.5 w-2.5 rounded-full'></span>
                        <span className='flex justify-center items-center bg-black/20 h-2.5 w-2.5 rounded-full'></span>
                    </span>
                    change
                </span>
                <span className='flex justify-center items-center '>
                    how you
                    <Avtar image={Boy} />
                    <Avtar className="-ml-2" image={GirlImg} />
                    <Avtar className="-ml-2" image={Girl} />
                    manage money?
                </span>
            </h1>
            <p className='max-w-lg text-center font-normal text-lg'>Spend, save, tranfer and track your money with clarity - all from one secure digital account</p>
            <div className='relative'>
                <HeroCard className="absolute rotate-4 opacity-50" />
                <HeroCard className="relative z-10" />
            </div>
            {/* <div className="relative h-[115px] w-full overflow-hidden bg-[#121d12]">
                <div className="absolute left-0 top-0 h-[90px] w-full bg-white">
                    <div className="absolute -bottom-[1px] left-0 h-[43px] w-[105px] rounded-tr-[55px] bg-[#121d12]" />
                    <div className="absolute -bottom-[1px] right-0 h-[43px] w-[105px] rounded-tl-[55px] bg-[#121d12]" />
                    <div className="relative z-10 flex h-full items-center justify-evenly text-xl list-none mt-4">
                        <li>Secure Banking</li>
                        <li>Instant Transfer</li>
                        <li>Smart Savings</li>
                        <li>Virtual Cards</li>
                        <li>AI Money Insights</li>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Hero