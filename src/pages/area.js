import axios from "axios";
import React, { useEffect } from "react";

const Area = () => {
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        console.log(response);
      } catch (error) {}
    })();
  });
  return <div>area</div>;
};

export default Area;
