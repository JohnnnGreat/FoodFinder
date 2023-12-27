import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";
import Pasta from "../../public/pasta.png";

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
    <div className="w-full bg-[#ebeaea] h-[100vh] relative">
      <Image
        src={Pasta}
        className="absolute top-0 w-[300px] overflow-hidden opacity-50"
      />
      <div className="max-w-[1100px] mx-auto flex items-center justify-center h-full">
        <div className=" p-[1rem] ">
          <h1
            className="text-[2rem] md:text-[4rem] font-bold text-center"
            style={{ lineHeight: "1" }}
          >
            Discover Culinary Delights Near You
          </h1>
          <p className="mt-[1rem] text-[.7rem] md:text-[.94rem] text-center">
            Are you craving something delicious? Look no further! your go-to
            destination for exploring the best eateries in your area. From cozy
            cafes to trendy bistros, we've got it all covered.
          </p>
          <div className="flex justify-center mt-[1rem] ">
            <div className="w-full md:w-max">
              {" "}
              <input
                type="text"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                placeholder="Search for a food"
                className="placeholder:text-[.8rem] outline-none p-[.8rem] text-[.7rem] md:p-[1rem] w-[90%] sm:w-[500px] bg-white rounded-full border-[1px] border-gray-300"
              />
              <button
                className="w-[90%] hover:bg-gray-950 mt-[1rem] p-[.8rem] md:p-[1rem] bg-black text-white md:ml-[.6rem] rounded-full hover:shadow-lg"
                onClick={handleSearchResult}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
