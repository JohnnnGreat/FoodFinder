import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const SearchResult = () => {
  const router = useRouter();

  const text = router?.query?.slug;

  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);

  const [categories, setCategory] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );

        const { data } = response;

        const { categories } = data;
        setCategory(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  useEffect(() => {
    (async function () {
      try {
        const searchQuery = text.trim();
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        const { data } = response;

        const { meals } = data;

        setData(meals);
        setLength(meals.length);
      } catch (error) {
        console.log(error);
      }
    })();
  });
  return (
    <>
      <div className="bg-[#ebeaea] h-[200px] p-[1rem]">
        <div className="max-w-[1100px] mx-auto flex items-center h-full">
          <div>
            <h1 className="text-[3rem] font-semibold">
              Search Results for {text}
            </h1>
            <p className="text-gray-500">{length} results found</p>
          </div>
        </div>
      </div>
      <div className="h-screen relative">
        <div className="grid-s max-w-[1100px] mx-auto py-[1.4rem] ">
          <div className="grid-f">
            {data.map((item) => (
              <div ke className="bg-white shadow-md p-[1rem] rounded-md">
                <img
                  className="w-full h-[100px] object-cover rounded-md"
                  src={item.strMealThumb}
                />
                <h1
                  className="font-bold mt-[.9rem]  text-[1.5rem]"
                  style={{
                    lineHeight: "1",
                  }}
                >
                  {item.strMeal}
                </h1>
                <div className="flex mt-[1.3rem] justify-between">
                  <div>
                    <p className="text-[.8rem] font-light text-gray-500">
                      Category
                    </p>
                    <p className="text-[.9rem] font-medium">
                      {item.strCategory}
                    </p>
                  </div>

                  <div>
                    <p className="text-[.8rem] font-light text-gray-500">
                      Area
                    </p>
                    <p>{item.strArea}</p>
                  </div>
                </div>

                <Link
                  className="mt-[1rem] block p-[.7rem] text-center bg-black text-white rounded-md"
                  href={`/food/${item.idMeal}`}
                >
                  View Meal
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-[2rem] text-center font-semibold">Category</h1>
            <div className="mt-[1rem] flex flex-col items-center justify-center gap-[1rem] h-[100vh] relative top-0 overflow-y-scroll">
              {categories.map((item) => (
                <Link
                  href={`/food/${item.idMeal}`}
                  className="w-[80%] bg-[#ebeaea] flex items-center justify-evenly p-[.9rem] rounded-full"
                >
                  <img
                    className="w-[50px] h-[50px] object-contain"
                    src={item.strCategoryThumb}
                    alt=""
                  />
                  <p>{item.strCategory}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
