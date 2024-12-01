
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="h-[800px] flex top-[141px] ">
        <div className=" bg-[#FFFFFF] w-1/2 flex justify-center items-center">
          <div className="h-[300px] pr-[60px] pl-[80px] ">
            <p className="h-[134px] w-[500px] text-[56px] font-bold ">
              Learn new skills online with ease
            </p>
            <p className="h-[54px] w-[500px] text-[18px] font-normal pt-8">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
            <div className=" p-4 gap-4 flex justify-center items-center pt-14 mr-[135px]">
              <button className="h-[48px] w-[178px] text-[14px] border-[1px] rounded-[5px] px-6 py-3 text-white bg-[#000000] gap-2">
                Start learning now
              </button>
              <button className="w-[164px] h-[48px] text-[14px]  border-[1px] rounded-[5px] px-6 py-3 border-[#000000] ">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <Image src={"/image/image.png"} alt="girl" height={900} width={640} />
        </div>
      </div>

      <div className="h-[228px] bg-[#F7F7F7] flex justify-between items-end px-16 py-20 gap-[64px] top-[1038px] left-[100px] space-x-10">
        <div className="ml-0 mr-0  h-[68px]  text-[#000000] font-bold text-[24px] leading-[33.6px]">
          <p className="   ">Trusted by 2000+ companies </p>
          <p>worldwide.</p>
        </div>

        <div className=" py-[8.74px]  h-[56px] w-[880px] ">
          <Image src={"/image/Logos.png"} alt="logos" height={56} width={880} />
        </div>
      </div>
      {/* section1 */}

      <div className="h-[1049px] bg-[#FFFFFF] px-16 py-28 gap-[80px]">
        <div className="  flex flex-col items-center justify-center  ">
          <h1 className="font-bold text-5xl h-[58px] mb-6">
            Explore Courses By Category
          </h1>

          <p className="text-[18px] font-normal h-[27px] ml-[60px] mb-8  ">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          {/* gird */}
          <div className="h-[636px]  bg-[#FFFFFF] mt-16 flex ">
            <div className="h-[132px] gap-3">
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card1.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card2.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card3.png"}
                alt="1"
                height={132}
                width={411}
              />
            </div>

            <div className="h-[132px] gap-3 ">
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card4.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card5.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card6.png"}
                alt="1"
                height={132}
                width={411}
              />

              <button className="h-[70px] w-[180px] rounded-[5px] border-[1px] mx-36 mt-24  font-normal text-[16px] text-black">
                View All Courses
              </button>
            </div>

            <div className="h-[132px] gap-3 ">
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card7.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card8.png"}
                alt="1"
                height={132}
                width={411}
              />
              <Image
                className="rounded-[5px] p-4 gap-5 w-[600px]"
                src={"/image/Card9.png"}
                alt="1"
                height={132}
                width={411}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[488px] px-16 py-28">
        <div className="h-[264px] gap[24px]">
          <div className="h-[136px]  text-center">
            <h1 className="h-[58px] font-bold  text-[48px] ">
              Our Achivements
            </h1>
            <p className=" w-[1152px] text-[18px] font-normal text-center ml-32 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="  flex  flex-col ml-52">
              <h1 className=" font-bold text-[40px] h-[48px] w-[72px]">+200</h1>
              <p className="h-[24px] w-[60px] text-[16px] font-normal ml-5">
                
                Courses
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-[40px] h-[48px] w-[72px]">50K</h1>
              <p className="h-[24px] w-[60px] text-[16px] font-normal ml-2">
                Mentors
              </p>
            </div>

            <div className="flex flex-col  ">
              <h1 className="font-bold text-[40px] h-[48px] w-[72px]">370k</h1>
              <p className="h-[24px] w-[60px] text-[16px] font-normal ml-3">
                
                Students
              </p>
            </div>
            <div className="flex flex-col mr-52 ">
              <h1 className="font-bold text-[40px] h-[48px] w-[72px]">100+</h1>
              <p className="h-[24px] w-[60px] text-[16px] font-normal ml-3">
                Recognition
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section2                   */}
      <div className="h-[1742px] py-28 px-16 bg-[#FFFFFF] gap-[60px]">
        <div className=" gap-4">
          <h1 className="font-bold text-[56px] text-center h-[67px]">
            Courses
          </h1>
          <p className="text-[18px] font-normal h-[27px] text-center mt-8">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="h-[1340px] gap-16 ">
          <div className=" flex justify-center items-center ">
            <h1 className="font-normal text-[16px] text-[#000000] rounded-[1px] border-b-[1px] mt-24 border-[#676767] gap-2  px-4 py-2">
              Popular
            </h1>
            <h1 className="font-normal text-[16px] px-4 py-2 gap-2 mt-24 text-[#000000]">
              Recommended
            </h1>
            <h1 className="font-normal text-[16px] px-4 py-2 gap-2 mt-24 text-[#000000]">
              Best Price
            </h1>
          </div>
          <div className="h-[534px] gap-16  ">
            <div className="h-[534px] flex gap-[115px] justify-center items-center ">
              <div className="bg-[#F7F7F7] ">
                <Image
                  src={"/image/table.png"}
                  alt="table"
                  height={300}
                  width={416}
                />

                <div className=" flex justify-between items-center font-semibold text-[14px] mt-4">
                  <p>Design </p> <p>5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4 ">
                  UX/UI Design 201
                </h1>
                <p className="text-[16px] font-normal w-[382px] mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>

                <button className=" text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className=" h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>

              <div className="bg-[#F7F7F7]">
                <Image
                  className=""
                  src={"/image/coding.png"}
                  alt="coding"
                  height={300}
                  width={416}
                />

                <div className="flex justify-between items-center font-semibold text-[14px] mt-4">
                  <p className="">Programmimg </p> <p> 5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4">
                  Introduction to Python
                </h1>
                <p className="text-[16px] font-normal w-[382px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className="h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>

              <div className="bg-[#F7F7F7]">
                <Image
                  src={"/image/trading.png"}
                  alt="trading"
                  height={300}
                  width={416}
                />

                <div className="flex justify-between items-center font-semibold text-[14px] mt-4 ">
                  <p>Business </p>
                  <p>5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4">
                  Data Analysis for Beginners
                </h1>
                <p className="text-[16px] font-normal w-[382px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className="h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>

          <div className="h-[534px] gap-16  ">
            <div className="h-[534px] flex gap-[115px] justify-center items-center ">
              <div className="bg-[rgb(247,247,247)] ">
                <Image
                  src={"/image/brush.png"}
                  alt="table"
                  height={300}
                  width={416}
                />

                <div className=" flex justify-between items-center font-semibold text-[14px] mt-4">
                  <p> Art </p> <p>5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4 ">
                  Art Specialization
                </h1>
                <p className="text-[16px] font-normal w-[382px] mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>

                <button className=" text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className=" h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>

              <div className="bg-[#F7F7F7]">
                <Image
                  className=""
                  src={"/image/bookshal.png"}
                  alt="coding"
                  height={300}
                  width={416}
                />

                <div className="flex justify-between items-center font-semibold text-[14px] mt-4">
                  <p className="">Law </p> <p> 5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4">Rule of Law</h1>
                <p className="text-[16px] font-normal w-[382px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className="h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>

              <div className="bg-[#F7F7F7]">
                <Image
                  src={"/image/buildweb.png"}
                  alt="trading"
                  height={300}
                  width={416}
                />

                <div className="flex justify-between items-center font-semibold text-[14px] mt-4 ">
                  <p>Tech</p>
                  <p>5.0</p>
                </div>

                <h1 className="font-bold text-[24px] mb-4">
                  Introduction to webflow
                </h1>
                <p className="text-[16px] font-normal w-[382px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="text-[16px] font-normal w-[125px] h-[40px] rounded-[5px] border-[1px] border-[#000000] px-5 py-2 gap-2">
                  Enroll Now
                </button>
                <button className="h-[40px] w-[77px] text-[16px] font-medium rounded-[5px] px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>

            <div className="w-[152px] h-[40px] mt-16 ml-[650px] mr-[650px] border-[1px] rounded-[5px] border-[#000000] px-4 py-2">
              <button className="text-[#000000] text-[16px] font-normal w-[120px] justify-center items-center ">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[895px] bg-[#F7F7F7]">
        <div className="h-[109px] gap-6 flex justify-center items-center flex-col">
          <h1 className="font-bold text-[48px] h-[58px] pt-20">Our team</h1>
          <p className="h-[27px] text-[18px] font-normal pt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        {/* human section total h 482 half h273 */}
        <div className="h-[482px] gap-[96px] flex justify-center items-center">
          {/* pic */}
          <div className="h-[209px] space-x-56 flex justify-center items-center">
            {/* ml-[47px] */}
            <div className="">
              <Image
                className="pb-9 pt-16 ml-10"
                src={"/image/man1.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center">
                James Nduku
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal text-center ">
                Marketing Coordinator
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>

            {/* ml-60 */}
            <div className="">
              <Image
                className="pt-16 pb-9 ml-10"
                src={"/image/girl1.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center ">
                Joseph Munyambu
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal  text-center  ">
                Nursing Assistant
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>

            {/* ml-[270px] */}
            <div className=" ">
              <Image
                className="pb-9 pt-16 ml-10"
                src={"/image/girl2.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center ">
                Joseph Ngumbau
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal text-center ">
                Medical Assistant
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>
          </div>
        </div>

        {/* ///////////// */}
        <div className="h-[482px] gap-[96px] flex justify-center items-center">
          {/* pic */}
          <div className="h-[209px] space-x-56 flex justify-center items-center">
            {/* ml-[47px] */}
            <div className="pb-40">
              <Image
                className="pb-9  ml-10"
                src={"/image/boy.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center">
                James Nduku
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal text-center ">
                Marketing Coordinator
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>

            {/* ml-60 */}
            <div className="pb-40">
              <Image
                className="pb-9 ml-10"
                src={"/image/boys.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center ">
                Joseph Munyambu
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal  text-center  ">
                Nursing Assistant
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>

            {/* ml-[270px] */}
            <div className="pb-40">
              <Image
                className="pb-9 ml-10"
                src={"/image/itsgirl.png"}
                alt="man1"
                height={80}
                width={80}
              />
              <h1 className="font-semibold text-[20px] h-[30px] text-center ">
                Joseph Ngumbau
              </h1>
              <h2 className="h-[27px] text-[18px] font-normal text-center ">
                Medical Assistant
              </h2>
              <Image
                className="pt-7 mx-11"
                src={"/image/3icons.png"}
                alt="3"
                height={24}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
