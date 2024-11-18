import Header from "./Components/Header";
import Image from "next/image";
export default function Home() {
  return (
    <div>
        <Header/>
        <div className="bg-gray-300   lg:w-full lg:h-screen lg:flex lg:justify-between  ">
            <div className="lg:py-4 lg:ml-4 py-3 md:ml-48 ">
               <Image src="/picture01.jpg" alt="pic 1" width={400} height={200} /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px-36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>
            
            <div className="lg:py-4 lg:ml-4 py-3 md:ml-48 ">
               <Image  src="/picture02.jpg" alt="pic 2" width={400} height={200}  /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px-36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>
            
            <div className="lg:py-4  lg:ml-4 py-3 md:ml-48  ">
               <Image  src="/picture03.jpg" alt="pic 3" width={400} height={200}  /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px:36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>

            


            
        </div>
    </div>
  );
}
