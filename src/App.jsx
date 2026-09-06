import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SectionImg from '../src/assets/boy-1.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="feature-section">
        {/* SVG Top Cutout Border */}
        <svg
          className="feature-svg"
          viewBox="0 0 1440 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H212.937 C286.097 0 275.985 93 362.23 93 H1077.77 C1164.01 93 1153.9 0 1227.06 0 H1440 V94 H0 Z"
            fill="#121d12"
          />
        </svg>

        {/* Dark Background Body & Content */}
        <div className="feature-body">
          {/* Top Ticker Row */}
          <div className="ticker-bar">
            <span>Secure Banking</span>
            <span className="star">✵</span>
            <span>Instant Transfers</span>
            <span className="star">✵</span>
            <span>Smart Savings</span>
            <span className="star">✵</span>
            <span>Virtual Cards</span>
            <span className="star">✵</span>
            <span>AI Money Insights</span>
          </div>

          {/* Subtext Grid */}
          <div className="feature-content">
            <p className="text-left">
              BUILT FOR CLARITY, CONTROL,<br />
              AND EVERYDAY BANKING
            </p>
            <p className="text-right">
              CAN ONE SMART ACCOUNT<br />
              SIMPLIFY YOUR FINANCIAL LIFE?
            </p>
          </div>
          <div className='flex flex-col leading-28 pl-[26rem] pt-18 text-8xl '>
            {/* pt-[40px] border-b border-white/15 pb-[60px] */}
            <h1>Banking</h1>
            <h1>Payments</h1>
            <h1>Savings</h1>
            <h1>Investing</h1>
            <img className='flex justify-center items-center h-20 w-20' src={SectionImg} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App