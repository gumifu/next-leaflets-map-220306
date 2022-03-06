import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1534803973914-062f44d06ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80"
        className=""
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-1/3 w-full text-center">
        <button className="text-blue-00 bg-white px-10 py-4 shadow-xl rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150">
          柔軟な検索
        </button>
        {/* <p className="text-xl sm:text-2xl font-bold text-gray-200">
          好奇心のおもむくままに
        </p> */}
      </div>
    </div>
  );
}

export default Banner
