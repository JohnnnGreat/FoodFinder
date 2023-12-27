import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const handleSearchResult = () => {
    if (!searchText) {
      alert("Value cant be empty");
    } else {
      window.location.replace(`/searchresult/${searchText}`);
    }

    // try {
    //   const text = searchText.trim();
    //   const response = await axios.get(
    //     `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    //   );
    //   console.log(response);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="w-full bg-[#ebeaea] h-[400px]">
      <div className="max-w-[1100px] mx-auto flex items-center justify-center h-full">
        <div>
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="outline-none p-[1rem] w-[500px] bg-white rounded-full"
          />
          <button onClick={handleSearchResult}>Send</button>
        </div>
      </div>
    </div>
  );
}
