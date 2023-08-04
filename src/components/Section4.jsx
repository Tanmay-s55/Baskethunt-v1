import React from 'react'

const Section4 = () => {
  return (
    <div className='flex justify-between py-[120px] px-[100px]'>
        {/* Left Section */}
        <div className='w-[40%]'>
          <img className='h-[500px] w-[500px]' src='/Business_Img.png' alt="image" />
        </div>
        {/* Right Section */}
        <div className='w-[60%]'>
            <h1 className='font-bold text-[40px]'>Increase your client for better business </h1>
            <hr className='mt-[20px] border-b  border-b-[#ff7a3d] w-[90%]'/>
            <p className='w-[85%] font-semibold text-[16px] leading-[150%] mt-[20px] text-[#1D1D1F]'>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content here&apos;
            </p>
            {/* Progress Bars */}
            <div className="progress-container">

                <h2>Quarterly Average Traffic</h2>
                <div className="progress-bar-parent" >
                  <div className="quarterly progress"></div>
                </div>

                <h2>Monthly Average Traffic</h2>
                <div className="progress-bar-parent" >
                  <div className="monthly progress"></div>
                </div>

                <h2>Daily Average Traffic</h2>
                <div className="progress-bar-parent" >
                    <div className="daily progress"></div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Section4;