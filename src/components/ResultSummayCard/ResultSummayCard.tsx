import React from 'react'

const ResultSummayCard = () => {
  return (
    <div className='h-110 w-[600px] bg-white rounded-3xl flex'>
        <aside className='px-4 gap-4 w-1/2 rounded-3xl flex flex-col justify-center items-center bg-gradient-to-t from-slate-blue-dark to-slate-blue-light'>
            <div className='text-pale-blue'>Your Results </div>
            <div className='gap-2 text-white rounded-full bg-white flex items-center justify-center flex-col 
                w-36 h-36 bg-gradient-to-b from-violet-blue to-slate-blue-dark text-5xl font-extrabold'>
                76 <span className='text-sm text-gray-300'>of 100</span>
            </div>
            <div className='text-white text-xl font-semibold'>Great</div>
            <div className='text-light-lavender text-center'>Your scored higher than 65% of people who have taken these tests.</div>
        </aside>
        <div></div>
    </div>
  )
}

export default ResultSummayCard