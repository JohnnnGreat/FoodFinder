import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const FoodItem = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const id = router?.query?.slug;

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        // console.log(response);
        const { data } = response;
        const { meals } = data;
        setData(meals[0]);
      } catch (error) {}
    })();
  });
  return (
    <div>
      <div className="max-w-[1100px] mx-auto p-[1rem]">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src={data?.strMealThumb}
        />
        <div className="p-[1rem] bg-[#f5f5f5] rounded-sm mt-[1rem] ">
          <h1 className="text-[2rem] font-bold">{data?.strMeal}</h1>

          <div className="flex gap-[.6rem]">
            {data?.strTags?.split(",").map((item) => (
              <p className="border-[1px] border-[#bebebe] py-[.2rem] px-[1rem]  ">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FoodItem;
