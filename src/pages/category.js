import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
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

  return (
    <div className="h-[100px] bg-[#ebeaea] ">
      <hr />
      <div className="max-w-[1100px] mx-auto p-[1rem]">
        <h1 className="text-[3rem] font-bold">Categories</h1>
      </div>

      <div className="grid-f max-w-[1100px] mx-auto">
        {categories.map((item) => (
          <div className="p-[.8rem]">
            <img className="" src={item.strCategoryThumb} />
            <h1 className="text-center font-bold mt-[1rem]">
              {item.strCategory}
            </h1>
            <Link
              href={`category/${item.strCategory}`}
              className="text-gray-500 text-[.9rem] text-center block w-full hover:underline"
            >
              View all Foods
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
