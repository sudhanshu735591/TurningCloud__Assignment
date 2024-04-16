
import "./Card.css"

function Card(){
    return(
        <div >
            <div className="image justify-between flex">
                <div className="h-[18px] w-[18px] bg-white mt-2 ml-2 border-[1.5px] bb"></div>

                <div className="  mt-2 ml-2 mr-2 bg-black text-white flex items-center h-[14px] text-xs p-2 rounded">10% off</div>
            </div>

            <div className="flex flex-col bg-white">
                <div className="p-1 flex items-center">
                    <div className="flex items-center rounded backcolor gap-2 w-[110px] h-[20px] justify-center ">
                        <div><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.88281" cy="3" r="2.88281" fill="#FC9D03"/>
                            </svg>
                        </div>

                        <div className="text-xs font-semibold">Mustard yellow</div>
                    </div>

                    <div className="border ml-3">
                        <div className="text-xs">Multiplier : 5</div>
                    </div>
                </div>

                <div className="text-start ml-4 text-[#74767A] text-sm">Item Name</div>

                <div className="w-[200px] text-start ml-4 font-semibold mt-2">Mens white check Shirt regular fit</div>


                <div className="flex flex-col">
                    <div className="text-start ml-4 text-[#74767A] mt-2">Design Number</div>
                    <div className="text-start ml-4">DN098234839</div>
                </div>

                <div className="flex items-center">
                    <div className="bg-[#E3E4E7] w-[17px] h-[20px] text-[10px] flex justify-center items-center ml-4 mt-4 font-bold rounded">XL</div>
                    <div className="bg-[#E3E4E7] p-2 h-[20px] text-[10px] flex justify-center items-center ml-4 mt-4 font-bold rounded">Instock:100</div>
                </div>


                <div className="flex ml-4 mt-4 gap-5">
                    <div className="font-bold">₹ 799.67</div>

                    <div className="line-through text-[#A6A8AC]">₹ 1299.67</div>

                </div>


                <div className="flex gap-2">
                    <div className="border w-[32px] h-[30px] flex justify-center items-center ml-2 mt-4">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 3.5H12.25" stroke="#0F172A" stroke-width="1.02083" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.0833 3.5V11.6667C11.0833 12.25 10.5 12.8333 9.91667 12.8333H4.08334C3.50001 12.8333 2.91667 12.25 2.91667 11.6667V3.5" stroke="#0F172A" stroke-width="1.02083" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.66667 3.49999V2.33332C4.66667 1.74999 5.25001 1.16666 5.83334 1.16666H8.16667C8.75 1.16666 9.33334 1.74999 9.33334 2.33332V3.49999" stroke="#0F172A" stroke-width="1.02083" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>


                    <div className="flex pb-4">
                        <div className="bg-[#D9D9D9] h-[15px] flex mt-4 p-4 items-center border-r border-gray-300">
                            <div className="flex items-center gap-4">
                                <div className="text-[12px] font-bold">XL</div>

                                <div className="text-[12px] bg-white rounded-[12px] p-1 pl-2 pr-2 font-bold">+5 More</div>
                            </div>
                        </div>




                        <div className="bg-[#D9D9D9]  flex h-[20px] border items-center  mt-4 w-[30px] p-[15.20px] justify-center">
                            <div>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_348)">
                                    <path d="M8.5 1.50081C8.62734 1.35032 8.78485 1.22784 8.96251 1.14115C9.14016 1.05446 9.33405 1.00547 9.53182 0.997314C9.72959 0.989153 9.92691 1.022 10.1112 1.09375C10.2955 1.1655 10.4627 1.27459 10.6022 1.41407C10.7416 1.55354 10.8503 1.72034 10.9213 1.90383C10.9922 2.08732 11.0239 2.28347 11.0143 2.4798C11.0047 2.67612 10.954 2.8683 10.8654 3.04409C10.7769 3.21988 10.6524 3.37542 10.5 3.50081L3.75 10.2508L1 11.0008L1.75 8.25081L8.5 1.50081Z" stroke="black" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 2.5L9.5 4.5" stroke="black" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1_348">
                                    <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}


export default Card;