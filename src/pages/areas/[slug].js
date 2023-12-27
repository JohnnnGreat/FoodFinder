import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Areas = () => {
  const router = useRouter();
  const cat = router?.query?.slug;

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`
      );
      const { data } = response;

      const { meals } = data;
      setData(meals);
    })();
  });

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-[2rem] my-[1.2rem] font-bold">Foods in {cat}</h1>
      <hr />

      <div className="grid-f">
        {data?.map((item) => (
          <div className="shadow-md p-[1rem] rounded-md">
            <img
              className="w-full h-[200px] object-cover rounded-md"
              src={item.strMealThumb}
            />
            <h1
              className="text-[1rem] font-medium mt-[1rem]"
              style={{
                lineHeight: "1",
              }}
            >
              {item.strMeal}
            </h1>
            <Link
              href={`/food/${item.idMeal}`}
              className="border p-[.6rem] text-center block rounded-md mt-[1rem]"
            >
              View Food
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
