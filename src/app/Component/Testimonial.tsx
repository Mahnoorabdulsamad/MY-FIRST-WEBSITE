
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="h-[830.89px] bg-[#F7F7F7] gap-[80px] py-28 px-16">
        <div className="h[109px] ">
          <h1 className="h-[58px]  font-bold text-[48px] text-[#000000]">
            Customer testimonials
          </h1>
          <p className="h-[27px] text-[18px] font-normal pt-10 pb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="h-[418px] flex justify-center items-center space-x-5">
          <div className="h-[321px] p-8 border-[1px] border-[#000000] gap-6 w-[363px]">
            <Image
              src={"/image/Stars.png"}
              alt="star"
              height={89}
              width={116}
            />
            <div className="h-[215px] gap-6">
              <p className="font-normal text-[18px] h-[135px] w-[299px] pt-6 ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex w-[240px] h-[56] pt-10 gap-5 ">
                <Image
                  src={"/image/circlergl.png"}
                  alt="girl"
                  height={56}
                  width={56}
                />
                <span className="font-semibold text-[16px]">
                  
                  James Nduku
                  <h1 className="font-normal text-[16px]">
                    
                    Software Developer
                  </h1>
                </span>
              </div>
            </div>
          </div>

          <div className="h-[321px] p-8 border-[1px] border-[#000000] gap-6 w-[363px]">
            <Image
              src={"/image/Stars.png"}
              alt="star"
              height={89}
              width={116}
            />
            <div className="h-[215px] gap-6">
              <p className="font-normal text-[18px] h-[135px] w-[299px] pt-6 ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex w-[240px] h-[56] pt-10 gap-5 ">
                <Image
                  src={"/image/mancircle.png"}
                  alt="girl"
                  height={56}
                  width={56}
                />
                <span className="font-semibold text-[16px]">
                  
                  Erick Kipkemboi
                  <h1 className="font-normal text-[16px]">Scrum Master</h1>
                </span>
              </div>
            </div>
          </div>

          <div className="h-[321px] p-8 border-[1px] border-[#000000] gap-6 w-[363px]">
            <Image
              src={"/image/Stars.png"}
              alt="star"
              height={89}
              width={116}
            />
            <div className="h-[215px] gap-6">
              <p className="font-normal text-[18px] h-[135px] w-[299px] pt-6 ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex w-[240px] h-[56] pt-10 gap-5 ">
                <Image
                  src={"/image/circlegl2.png"}
                  alt="girl"
                  height={56}
                  width={56}
                />
                <span className="font-semibold text-[16px]">
                  
                  Stephen Kerubo
                  <h1 className="font-normal text-[16px]">UI/UX Designer</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center ml-[90px] mr-[90px]">
          
          <Image
            src={"/image/Slider Dots.png"}
            alt="dots"
            height={8}
            width={72}
          />
          <Image
            src={"/image/Slider Buttons.png"}
            alt="btn"
            height={8}
            width={72}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
