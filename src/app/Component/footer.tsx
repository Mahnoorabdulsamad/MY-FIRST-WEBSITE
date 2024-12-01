import Image from "next/image";

const footer = () => {
  return (
    <div>
      <div className="h-[684px] bg-[#FFFFFF] flex justify-between mr-20  ml-20 space-x-10">
        <div className="">
          <h1 className="h-[27px]  w-[500px] text-[18px] text-[#000000] font-bold">
            Subscribe to our newsletter
          </h1>
          <p className="h-24 w-[500px] text-[16px] text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className=" w-1/2   ">
            <Image
              className="top-10 "
              src={"/image/Ddsgnr Library.png"}
              alt="logo"
              height={40}
              width={130.6}
            />
          </div>
          <ul className=" h-[225px] pb-40 pt-0 px-44 ml-60 text-[#000000] w-1/3 ">
            <li className=" font-bold text-[16px] leading-6 pb-10 pt-10 h-[24px] ">
              Courses
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px] ">
              Business
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              Development
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              Technology
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21p items-centerx]">
              Design
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              Programming
            </li>
          </ul>

          <ul className="flex justify-start flex-row gap-10 mt-36 h-[21px]">
            <li className="text-[14px] text-[#000000] font-normal">
              2023 Ddsgnr. All right reserved.
            </li>
            <li>Privacy Policy</li>
            <li>Privacy Policy</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
        <ul className=" h-[225px]  pt-36 mr-24  mx-24  text-[#000000] ml-24  w-1/3">
          <li className="  font-bold text-[16px] leading-6 pb-10 pt-10 h-[24px] ">
            Resources{" "}
          </li>
          <li className=" pb-2 font-normal text-[14px] leading-[21px] ">
            {" "}
            Career{" "}
          </li>
          <li className=" pb-2 font-normal text-[14px] leading-[21px]">
            Resume
          </li>
          <li className=" pb-2 font-normal text-[14px] leading-[21px]">
            {" "}
            Learning
          </li>
          <li className=" pb-2 font-normal text-[14px] leading-[21px]">
            Interview Preparation{" "}
          </li>
          <li className=" pb-2 font-normal text-[14px] leading-[21px]">Jobs</li>
        </ul>

        <div className="h-[82] w-[400px] space-x-4 ">
          <input
            className=" border-black w-[265px] h-[48px] border-[1px] rounded-md pr-[24px] pl-[24px] pb-[12px] pt-[12px] gap-16 text-[16px] font-normal"
            type="text"
            placeholder="Enter your email"
          />
          <button className=" h-[4 8px] w-[119px] border-black pr-[24px] pl-[24px] pt-[12px] pb-[12px] border-[1px]  rounded-md gap-16 text-[16px] font-normal">
            Subscribe{" "}
          </button>
          <p className="h-[18px] w-[400px] text-[12px] mt-4 text-[#000000] leading-[18px]">
            By subscribing you agree to with our Privacy Policy
          </p>

          <ul className=" h-[225px]   mr-24 text-[#000000] mt-24  w-1/3">
            <li className=" font-bold text-[16px] leading-6 pb-10  h-[24px] ">
              {" "}
              About Us{" "}
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px] ">
              Contact{" "}
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px] ">
              {" "}
              Help/Support
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              FAQ
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              {" "}
              Terms and Conditions{" "}
            </li>
            <li className=" pb-2 font-normal text-[14px] leading-[21px]">
              {" "}
              Partner
            </li>
          </ul>

          <Image
            className="mt-32 mr-80  gap-12  "
            src={"/image/Social Links (1).png"}
            alt="image"
            height={32}
            width={132}
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
