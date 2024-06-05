import Header from "./Header";
import React from "react";
import Carousel from "./Carousel";

import Footer from "./Footer";
function App() {
  const imagesSet1 = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const imagesSet2 = [
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
    "https://via.placeholder.com/800x400?text=Image+6",
  ];
  return (
    <>
      <Header />
      <div className="text-4xl font-Fuzzy text-gray-200 mt-10">
        Top 5 Romance Anime:
        <Carousel images={imagesSet1} />
        <Carousel images={imagesSet2} />
      </div>
    </>
  );
}

export default App;
