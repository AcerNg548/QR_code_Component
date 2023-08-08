"use client"
import QR from "../public/image-qr-code.png"

import Image from "next/image"

const CardComponent = () => {
  return (
    <div className="flex flex-col bg-white gap-2 rounded-xl items-center justify-center p-3
    shadow-xl 
    ">
        <div>
          <Image src={QR} alt="QR Code" width={200} height={200} className="rounded-xl" />
        </div>
        <div className="items-center text-center flex flex-col w-[180px] gap-4 mb-4">
        <h1 className="font-bold text-black  text-[15px] ">Improve your front-end skills by building projects</h1>
        <p className=" text-gray-500 text-[15px] ">Scan the QR code to visit Front-End Mentor and take your coding skills to the next level</p>
        </div>
        
        
    </div>
  )
}

export default CardComponent