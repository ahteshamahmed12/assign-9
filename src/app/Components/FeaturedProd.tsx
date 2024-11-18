import Image from "next/image"
export default function FeaturedProd(){
    return(
        <div className="bg-gray-300   lg:w-full lg:h-screen lg:flex lg:justify-between  ">
            <div className="lg:py-4 lg:ml-4 py-3 md:ml-48 ">
               <Image  src="/OIP 1.jfif" width={400} height={200} alt="OIP 1" /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px-36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>
            
            <div className="lg:py-4 lg:ml-4 py-3 md:ml-48 ">
               <Image  src="/OIP 2.jfif" width={400} height={200} alt="OIP 1" /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px-36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>
            
            <div className="lg:py-4 lg:ml-4 py-3 md:ml-48 ">
               <Image  src="/OIP 3.jfif" width={400} height={200} alt="OIP 1" /> 
                <h6 className="text-red-500 py-5 lg:px-36 px-40 md:px:36 ">PKR 5000</h6> 
                <button className="border border-white text-black bg-blue-500 w-28 h-8 lg:ml-32 ml-32 hover:bg-blue-700 hover:border-black hover:font-extrabold ">BUY NOW </button> 
            </div>

            


            
        </div>
    )
}