import CardComponent from '@/components/CardComponent'
import { CircleSquare, LShape, ZigZag } from '@/components/Patterns'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <div className="w-screen h-screen bg-[#f0f0f0] p-4 items-center justify-center flex ">
        <div className="w-11/12 h-4/5  bg-[#d5e1ef]  flex py-60 items-center justify-center
        shadow-2xl z-10 
        ">
          <CardComponent />
        </div>

        <div className="absolute w-[400px] right-[-30px] top-[200px]
        mobile:w-[200px] mobile:right-[-20px] mobile:top-[100px]
        ">
          <ZigZag />
      </div>
      <div className="absolute w-[100px] left-[-60px] 
      mobile:w-[80px] mobile:left-[-20px]
      
      ">
          <CircleSquare />
      </div>
      <div className="absolute w-[80px] top-[-100px] 
      mobile:w-[60px] mobile:top-[-70px] 
      ">
          <LShape />
      </div>

      </div>
    </main>
  )
}
