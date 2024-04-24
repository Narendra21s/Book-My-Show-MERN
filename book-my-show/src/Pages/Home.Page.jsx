import React, { useState } from "react";

// Layout HOC
import DefaultLayout from "../Layout/Default.Layout";

// Components
import EntertainmentcardComponent from "../Components/EntertainmentCardCompont/EntertainmentcardComponent";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Compionent";

const HomePage = () => {
  const [recommendedMovies, setRecommendMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl text-gray-800 font-bold sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentcardComponent />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommend Movies"
          subject="List of recommend movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premium-800 py-12">
        <div className="container mx-auto px-4 md:px-12 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="img-rupay" className="w-full h-full" />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:pxx-12 my-8 ">
        <PosterSlider
          title="OnlineStreamingEvents"
          subject="Onlin Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
