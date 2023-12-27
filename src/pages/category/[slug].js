import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Category = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const [catLen, setCatLen] = useState(0);
  const cat = router?.query?.slug;

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
      );
      const { data } = response;
      const { meals } = data;
      setCatLen(meals.length);
      setData(meals);
    })();
  });
  return (
    <div className="h-[400px] bg-[#ebeaea]">
      <div className="flex items-center max-w-[1100px] mx-auto p-[1rem] h-full">
        <div>
          <h1 className="text-[2.4rem] font-semibold">{cat} Category</h1>
          <p className="text-[#272727]">{catLen} Items in this category</p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-[1rem]">
        <div className="grid-f">
          {data.map((item) => (
            <div className="shadow-md p-[1rem] rounded-md">
              <img
                className="w-full h-[200px] object-cover rounded-md"
                src={item.strMealThumb}
              />
              <h1
                className=" mt-[1rem] font-semibold"
                style={{
                  lineHeight: "1",
                }}
              >
                {item.strMeal}
              </h1>
              <Link
                className="mt-[.8rem] bg-black text-white rounded-md block py-[.6rem] w-full text-center"
                href={`/food/${item.idMeal}`}
              >
                View Food
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
