import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Area = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        const { data } = response;
        const { meals } = data;
        setAreas(meals);
      } catch (error) {}
    })();
  });
  return (
    <div className="max-w-[800px] mx-auto p-[2rem]">
      <div className="grid-a">
        {areas.map((item) => (
          <Link
            href={`areas/${item.strArea}`}
            className="border hover:border-gray-700 rounded-md transition-all p-[1rem]"
          >
            {item.strArea}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Area;
