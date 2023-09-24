import React from 'react'
import Navbar from '../newComponents/Navbar'
import Footer from '../newComponents/Footer'
import Points from '../newComponents/Points'
function RewardScreen() {
  return (
    <div>
      <Navbar/> 
      <Points/>
      <div className="bg-green-100 p-8 py-36 rounded-lg shadow-lg text-center">
      <div className="text-4xl font-bold mb-4">
        🌟🌍 Welcome to our Eco-Friendly Initiative! 🌱🌟
      </div>
      <p className="text-lg text-gray-800 mb-8">
        🌐 Join the movement and make a positive impact on the environment by participating in our Waste-to-Reward program! It's as simple as 1-2-3:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-left">
          <div className="text-3xl text-green-500 mb-4">1</div>
          <div className="font-semibold mb-2">Step 1: Dispose of Your Waste Responsibly</div>
          <p className="text-gray-600">
            Bring your recyclables and other waste materials to our designated collection centers. Help us reduce waste in our beautiful world. 🌍
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
          <div className="text-3xl text-green-500 mb-4">2</div>
          <div className="font-semibold mb-2">Step 2: Earn Reward Points Effortlessly</div>
          <p className="text-gray-600">
          Contribute to a greener planet and earn rewards credited directly to your account. ♻️🤑
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-right">
          <div className="text-3xl text-green-500 mb-4">3</div>
          <div className="font-semibold mb-2">Step 3: Redeem Points Across Multiple Platforms</div>
          <p className="text-gray-600">
          Redeem points on various platforms, from eco-friendly products to experiences and donations. Your choices, your impact! 💎🌈
          </p>
        </div>
      </div>
      <p className="text-lg text-gray-800 mt-8">
        Join us today in shaping a sustainable future and enjoy the benefits of a cleaner planet and a rewarding lifestyle. Together, we can make a difference! 🌏✨
      </p>
      <p className="text-lg text-gray-800 mt-4">
        Start earning, start redeeming, and start making a change. Let's do this! 🌿💪
      </p>
    </div>
      <Footer/>
    </div>
  )
}

export default RewardScreen