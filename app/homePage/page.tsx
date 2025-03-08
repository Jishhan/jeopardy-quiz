import { Grid, Link } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
     <div className="flex bg-[#0819a5] w-full"> 
      <div className="">
        <div className="border-black border-4 px-14 py-5 text-[55px] text-[#fff]">History</div>
        <a href="/question1"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 100</div></a>
        <a href="/question2"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 200</div></a>
        <a href="/question3"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 500</div></a>
      </div>
      <div className="">
        <div className="border-black border-4 px-14 py-5 text-[55px] text-[#fff]">Science</div>
        <a href="/question4"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 100</div></a>
        <a href="/question5"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 200</div></a>
        <a href="/question6"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 500</div></a>
      </div>
      <div className="">
        <div className="border-black border-4 px-14 py-5 text-[55px] text-[#fff]">Sports</div>
        <a href="/question7"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 100</div></a>
        <a href="/question8"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 200</div></a>
        <a href="/question9"><div className="border-black border-4 px-14 py-5 text-[55px] text-[#a17441] font-bold">$ 500</div></a>
      </div>
    </div>
    </div>
  )
}

export default page
