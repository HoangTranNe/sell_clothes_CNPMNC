import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";
import FrameFiftyFiveColumnspeacialprice from "components/FrameFiftyFiveColumnspeacialprice";

const clothingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <div className="border border-dashed border-deep_purple-A200 flex flex-col items-start justify-start pb-[30px] sm:pr-5 pr-[30px] rounded-[5px] w-full">
          <FrameFiftyFiveColumnspeacialprice
            className="bg-white-A700 flex flex-col items-start justify-start md:px-5 w-[100%] md:w-full"
            price={
              <Text className="font-semibold md:ml-[0] ml-[25px] text-base text-black-900_01">
                <span className="text-black-900_01 font-worksans text-left">
                  TRANG CHỦ / TẤT CẢ SẢN PHẨM /{" "}
                </span>
                <span className="text-red-A700 font-worksans text-left">
                  BUBBLE TEE{" "}
                </span>
              </Text>
            }
            priceThree={
              <Text className="font-semibold leading-[24.00px] text-black-900_01 text-sm w-full">
                <span className="text-black-900_01 font-worksans text-left text-xl">
                  <>
                    HAPPY TEE - WHITE
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-worksans text-left text-xl font-normal">
                  <>
                    380.000₫
                    <br />
                  </>
                </span>
              </Text>
            }
            priceFour={
              <Text className="font-semibold leading-[24.00px] text-black-900_01 text-sm w-full">
                <span className="text-black-900_01 font-worksans text-left text-xl">
                  <>
                    HAPPY TEE - WHITE
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-worksans text-left text-xl font-normal">
                  <>
                    380.000₫
                    <br />
                  </>
                </span>
              </Text>
            }
            priceFive={
              <Text className="font-semibold leading-[24.00px] text-black-900_01 text-sm w-full">
                <span className="text-black-900_01 font-worksans text-left text-xl">
                  <>
                    HAPPY TEE - WHITE
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-worksans text-left text-xl font-normal">
                  <>
                    380.000₫
                    <br />
                  </>
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};
export default Home;