import Card from "../Card/Card";
import Header from "../Header/Header";
import PriceSection from "../PriceSection/priceSection";
import SideBar from "../SideBar/sideBar";
import SearchBox from "../searchFolder/searchBox";

function Home() {
  return (
    <div className="flex flex-col p-3">
      <div className="flex justify-around	">
        <Header />
      </div>


      <div className="flex bg-[aliceblue] mt-4 w-fit">
        <div className="sidebar w-[55px]">
          <SideBar/>
        </div>


        <div className="flex-flex-col parentBox p-[10px] [13px]">
          <div className="searchBoxandscanbox border w-[1130px] h-[50px] flex gap-4">
            <div className="search flex justify-between p-[10px] [20px] bg-[white] w-[60rem]">
              <div className="searchinput  flex gap-2">
                <span className="flex gap-1 p-1 items-center border ">
                  <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1169 12.6326L9.13467 8.73755M10.4621 5.4917C10.4621 8.00139 8.38203 10.0359 5.81615 10.0359C3.25028 10.0359 1.17023 8.00139 1.17023 5.4917C1.17023 2.98201 3.25028 0.94751 5.81615 0.94751C8.38203 0.94751 10.4621 2.98201 10.4621 5.4917Z" stroke="#0F172A" stroke-width="1.29834" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                  <div>
                    <input type="text" name="text" id="text" placeholder="Search Products" />
                  </div>
                </span>

                
                <div className="flex items-center">
                  <svg width="90" height="40" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" width="89" height="30" fill="#F4F4F4"/>
                  <rect x="0.860352" width="30" height="30" fill="#0F172A"/>
                  <path d="M13.4854 8.375H9.52702C9.08979 8.375 8.73535 8.72944 8.73535 9.16667V13.125C8.73535 13.5622 9.08979 13.9167 9.52702 13.9167H13.4854C13.9226 13.9167 14.277 13.5622 14.277 13.125V9.16667C14.277 8.72944 13.9226 8.375 13.4854 8.375Z" stroke="white" stroke-width="1.40535" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.1937 8.375H18.2354C17.7981 8.375 17.4437 8.72944 17.4437 9.16667V13.125C17.4437 13.5622 17.7981 13.9167 18.2354 13.9167H22.1937C22.6309 13.9167 22.9854 13.5622 22.9854 13.125V9.16667C22.9854 8.72944 22.6309 8.375 22.1937 8.375Z" stroke="white" stroke-width="1.40535" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.1937 17.0833H18.2354C17.7981 17.0833 17.4437 17.4378 17.4437 17.875V21.8333C17.4437 22.2706 17.7981 22.625 18.2354 22.625H22.1937C22.6309 22.625 22.9854 22.2706 22.9854 21.8333V17.875C22.9854 17.4378 22.6309 17.0833 22.1937 17.0833Z" stroke="white" stroke-width="1.40535" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.4854 17.0833H9.52702C9.08979 17.0833 8.73535 17.4378 8.73535 17.875V21.8333C8.73535 22.2706 9.08979 22.625 9.52702 22.625H13.4854C13.9226 22.625 14.277 22.2706 14.277 21.8333V17.875C14.277 17.4378 13.9226 17.0833 13.4854 17.0833Z" stroke="white" stroke-width="1.40535" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M51.0417 8.375H39.9583C39.0839 8.375 38.375 9.08388 38.375 9.95833V21.0417C38.375 21.9161 39.0839 22.625 39.9583 22.625H51.0417C51.9161 22.625 52.625 21.9161 52.625 21.0417V9.95833C52.625 9.08388 51.9161 8.375 51.0417 8.375Z" stroke="#0F172A" stroke-width="1.45128" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M52.625 11.9375H38.375" stroke="#0F172A" stroke-width="1.45128" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M52.625 15.5H38.375" stroke="#0F172A" stroke-width="1.45128" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M52.625 19.0625H38.375" stroke="#0F172A" stroke-width="1.45128" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>



 
              <div className="remark flex gap-2 items-center">
                <input className="border p-1 text-[#7E8084]" type="text" name="" id="" placeholder="Add Remarks"/>

                <div className="border p-1 text-[#7E8084] flex">
                 
                  <input className="w-[100px]" type="text" placeholder=" Show by: "/>

                  <span className="text-black font-bold "> Sizes</span>
                </div>



                <div className="border p-1 text-xl">+</div>

              </div>
            </div>


            <div className="scan p-5 bg-white border flex w-[30rem] items-center justify-between">
              <div className="flex gap-3 items-center">
                <div>
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.52844 6.78642V5.10079C2.52844 4.65373 2.70603 4.22499 3.02215 3.90887C3.33827 3.59275 3.76701 3.41516 4.21407 3.41516H5.8997" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.3278 3.41516H16.0134C16.4605 3.41516 16.8893 3.59275 17.2054 3.90887C17.5215 4.22499 17.6991 4.65373 17.6991 5.10079V6.78642" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.6991 15.2146V16.9002C17.6991 17.3472 17.5215 17.776 17.2054 18.0921C16.8893 18.4082 16.4605 18.5858 16.0134 18.5858H14.3278" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.8997 18.5858H4.21407C3.76701 18.5858 3.33827 18.4082 3.02215 18.0921C2.70603 17.776 2.52844 17.3472 2.52844 16.9002V15.2146" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.1138 13.5289C11.5102 13.5289 12.6422 12.3969 12.6422 11.0005C12.6422 9.60407 11.5102 8.47205 10.1138 8.47205C8.71735 8.47205 7.58533 9.60407 7.58533 11.0005C7.58533 12.3969 8.71735 13.5289 10.1138 13.5289Z" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.4851 14.3731L11.8838 12.7717" stroke="#888A8E" stroke-width="1.68563" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

                <input className="text-[#888A8E] text-sm" type="text" placeholder="Scan Product By..."/>


              </div>

              <div className="bg-[#E7E8E8] p-2 flex">
                <div className="flex items-center">
                  <select className="text-[10px] font-bold bg-[#E7E8E8]">
                    <option value="">Design No</option>
                    <option value="">Design No</option>
                    <option value="">Design No</option>
                    <option value="">Design No</option>
                    <option value="">Design No</option>
                  </select>
                </div>
              </div>
            </div>



            <div className="flex items-center bg-white p-3 ml-[-15px]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6152 18C12.4718 18 14.2522 17.2625 15.565 15.9497C16.8777 14.637 17.6152 12.8565 17.6152 11C17.6152 9.14348 16.8777 7.36301 15.565 6.05025C14.2522 4.7375 12.4718 4 10.6152 4C8.75872 4 6.97824 4.7375 5.66549 6.05025C4.35273 7.36301 3.61523 9.14348 3.61523 11C3.61523 12.8565 4.35273 14.637 5.66549 15.9497C6.97824 17.2625 8.75872 18 10.6152 18Z" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6152 12.75C11.0794 12.75 11.5245 12.5656 11.8527 12.2374C12.1809 11.9092 12.3652 11.4641 12.3652 11C12.3652 10.5359 12.1809 10.0908 11.8527 9.76256C11.5245 9.43437 11.0794 9.25 10.6152 9.25C10.1511 9.25 9.70599 9.43437 9.3778 9.76256C9.04961 10.0908 8.86523 10.5359 8.86523 11C8.86523 11.4641 9.04961 11.9092 9.3778 12.2374C9.70599 12.5656 10.1511 12.75 10.6152 12.75Z" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6152 2.25V4" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6152 19.75V18" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.9902 18.5772L14.1152 17.0635" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.74023 9.48611L6.24023 3.42236" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.1927 15.375L16.679 14.5" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.03784 6.625L4.55159 7.5" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3652 11H19.3652" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.86523 11H3.61523" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.1927 6.625L16.679 7.5" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.03784 15.375L4.55159 14.5" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.9902 3.42236L14.1152 4.93611" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.74023 12.5142L6.24023 18.5779" stroke="#5F677A" stroke-width="1.42188" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>



          <div className="items flex gap-3 mt-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>


        <div className="bg-white p-5 mt-3">
          <PriceSection/>
        </div>
      </div>

    </div>
  );
}

export default Home;
