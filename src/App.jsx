import React, { useRef, useState } from "react";
import "./index.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function App() {
  const [images, setImages] = useState([
    "https://c4.wallpaperflare.com/wallpaper/805/516/38/5bd340f829e2c-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/805/516/38/5bd340f829e2c-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/805/516/38/5bd340f829e2c-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/805/516/38/5bd340f829e2c-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/805/516/38/5bd340f829e2c-wallpaper-preview.jpg",
  ]);

  const galleryRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const [activeTab, setActiveTab] = useState("About Me"); // State to track active tab

  const rows = 25;
  const cols = 50;

  return (
    <div className="background min-h-screen flex flex-row justify-end main-container">
      <div
        className="grid absolute inset-0"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div key={index} className="color-box"></div>
        ))}
      </div>

      <div className="relative flex-col flex items-end mt-20 mr-32 w-full h-full gap-32">
        <div className="relative z-10 text-center p-8 bg-[#373c42] bg-opacity-75 text-white shadow-lg w-[37%] rounded-[25px] card">
          <FaRegQuestionCircle className="absolute left-2 top-14 text-2xl text-gray-400" />
          <PiGridNineFill className="absolute left-2 top-32 text-2xl text-gray-400" />
          <div className="bg-[#171617] flex items-center justify-around p-3 mb-4 ml-2  rounded-[25px]">
            <h1
              className={`inline-block text-white cursor-pointer ${
                activeTab === "About Me" ? "selected-text" : "hover-effect"
              }`}
              onClick={() => setActiveTab("About Me")}
            >
              About Me
            </h1>
            <h1
              className={`inline-block text-white cursor-pointer ${
                activeTab === "Experiences" ? "selected-text" : "hover-effect"
              }`}
              onClick={() => setActiveTab("Experiences")}
            >
              Experiences
            </h1>
            <h1
              className={`inline-block text-white cursor-pointer ${
                activeTab === "Recommended" ? "selected-text" : "hover-effect"
              }`}
              onClick={() => setActiveTab("Recommended")}
            >
              Recommended
            </h1>
          </div>
          <p className="ml-2 text-gray-400">
            {/* Conditionally render content based on the active tab */}
            {activeTab === "About Me" && (
              <>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY & have been living in Santa Carla for the
                past 10 years with my wife Tiffany and my 4-year-old twin
                daughters - Emma and Ella. Both of them are just starting
                school, so my calendar is usually blocked between 9-10 AM. This
                is a...
              </>
            )}
            {activeTab === "Experiences" && (
              <>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY & have been living in Santa Carla for the
                past 10 years with my wife Tiffany and my 4-year-old twin
                daughters - Emma and Ella. Both of them are just starting
                school, so my calendar is usually blocked between 9-10 AM. This
                is a...
              </>
            )}
            {activeTab === "Recommended" && (
              <>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY & have been living in Santa Carla for the
                past 10 years with my wife Tiffany and my 4-year-old twin
                daughters - Emma and Ella. Both of them are just starting
                school, so my calendar is usually blocked between 9-10 AM. This
                is a...
              </>
            )}
          </p>
        </div>

        <div className="relative z-10 p-8 bg-[#373c42] bg-opacity-75 text-white shadow-lg w-[37%] rounded-[25px] card">
          <FaRegQuestionCircle className="absolute left-2 top-14 text-2xl text-gray-400" />
          <PiGridNineFill className="absolute left-2 top-32 text-2xl text-gray-400" />

          <div className="flex-row items-center justify-between flex">
            <h1 className="bg-[#171617] inline-block p-4 rounded-[15px] text-xl ml-4">
              Gallery
            </h1>
            <div
              className="flex-row flex item-center buttoonn justify-center p-2 gap-1 cursor-pointer"
              onClick={handleAddImageClick}
            >
              <GoPlus className="mt-1" />
              <button>Add Image</button>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button className="buttoonn p-2" onClick={scrollLeft}>
                <FiArrowLeft />
              </button>
              <button className="buttoonn p-2" onClick={scrollRight}>
                <FiArrowRight />
              </button>
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={addImage}
          />

          <div
            ref={galleryRef}
            className="flex overflow-x-auto gap-2 mt-4 scroll-smooth no-scrollbar"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-44 w-44 object-cover rounded-lg ml-4 on-hover cursor-pointer"
                alt={`Gallery Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
