
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className=" bg-[#F7F7F7] h-[54px] border-b-[1px]  border-black flex  justify-between gap-8 p-4 text-[14px] font-normal">
          <p className="ml-20   ">
            Phone Number: 956 742 455 678 <span className="pl-1 pr-1"> | </span>
            Email:info@ddsgnr.com
          </p>

          <div>
            <Image
              src={"/image/Social Links (1).png"}
              alt="image"
              height={32}
              width={132}
            />
          </div>
        </div>

        <div className="h-[72px] flex bg-[#F7F7F7] ">
          <div className="flex justify-between space-x-24 h-[44px] border-b-[1px] border-black w-full mt-6  pl-16 pr-16">
            <Image
              className=" ml-5 mb-1  "
              src={"/image/Ddsgnr Library.png"}
              alt="logo"
              height={41}
              width={130}
            />
            <div className="flex justify-between gap-8 items-center pb-4 ">
              <ul className="text-[16px] flex justify-between space-x-16 items-center mr-52">
                <li className=" border-black">Home</li>
                <li>Courses</li>
                <li>Services</li>
                <li>Achievement</li>
                <li>AboutUs</li>
                <li>Testimonial</li>
              </ul>
              <div className="flex justify-center items-center gap-2 w-[80px]">
                <button className="text-[16px] h-[40px] pt-2 pb-2 pr-5 pl-5 border-[1px] text-black rounded-[5px] gap-2 border-black">
                  Login
                </button>
                <button className="text-[14px] h-[40px] pt-2 pb-2 pr-5 pl-5 bg-black text-white border-[1px] border-black rounded-[5px]">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





