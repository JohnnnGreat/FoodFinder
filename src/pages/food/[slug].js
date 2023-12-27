import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const FoodItem = () => {
  const [data, setData] = useState(null);
  const [keys, setKeys] = useState([]);
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

  useEffect(() => {
    if (data) {
      const keys = Object.keys(data);

      const s = keys.filter((items) => {
        return items?.includes("strIngredient");
      });

      setKeys(s);
    }
  }, []);

  keys.map((item) => {
    console.log(data[item]);
  });
  return (
    <div>
      <div className="max-w-[1100px] mx-auto p-[1rem]">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src={data?.strMealThumb}
        />
        <div className="p-[1rem] bg-[#fafafa] rounded-sm mt-[1rem] ">
          <h1 className="text-[2rem] font-bold">{data?.strMeal}</h1>

          <div className="flex gap-[.6rem]">
            {data?.strTags?.split(",").map((item) => (
              <p className="border-[1px] border-[#ebebeb] py-[.2rem] px-[1rem]  ">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-[1.12rem] mt-[1rem]">
          <button className="bg-[#f8f8f8] py-[.5rem] px-[1.3rem] rounded-md border">
            {data?.strCategory}
          </button>
          <button className="bg-[#f8f8f8] py-[.5rem] px-[1.3rem] rounded-md border">
            {data?.strArea}
          </button>
        </div>
        <hr className="mt-[1.3rem]"></hr>
        <div>
          <h1 className="text-[1.6rem] font-bold my-[.7rem]">Intructions</h1>
          <ul className="list-disc list-inside">
            {data?.strInstructions?.split(".").map((item) => (
              <li className="text-[.8rem] text-[#747474]">{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[1rem]">
          {keys.map(
            (item) =>
              data[item] && (
                <p className="border-[1px] border-[#ebebeb] py-[.5rem] px-[1.5rem]">
                  {data[item]}
                </p>
              )
          )}
        </div>
        <Link
          className="w-[100%] block py-[1.2rem] mt-[1rem] rounded-md text-center bg-black text-white rouded-sm"
          href={`${data?.strYoutube}`}
        >
          Watch Youtube Videos
        </Link>
      </div>
    </div>
  );
};

export default FoodItem;
