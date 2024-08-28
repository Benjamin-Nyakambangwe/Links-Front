"use client";
import { useState } from "react";

const RangeSlider: React.FC = () => {
  const [sliderOne, setSliderOne] = useState(30);
  const [sliderTwo, setSliderTwo] = useState(70);
  const minGap = 0;
  const sliderMaxValue = 100;

  const slideOne = () => {
    if (sliderTwo - sliderOne <= minGap) {
      setSliderOne(sliderTwo - minGap);
    }
    fillColor();
  };

  const slideTwo = () => {
    if (sliderTwo - sliderOne <= minGap) {
      setSliderTwo(sliderOne + minGap);
    }
    fillColor();
  };

  const fillColor = () => {
    const percent1 = (sliderOne / sliderMaxValue) * 100;
    const percent2 = (sliderTwo / sliderMaxValue) * 100;
    const sliderTrack = document.querySelector(".slider-track") as HTMLElement;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  };

  return (
    <div className="wrapper">
      <div className="values">
        <span id="range1">{sliderOne}</span>
        <span> - </span>
        <span id="range2">{sliderTwo}</span>
      </div>
      <div className="container">
        <div className="slider-track"></div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderOne}
          id="slider-1"
          onInput={(e) => {
            setSliderOne(parseInt((e.target as HTMLInputElement).value));
            slideOne();
          }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={sliderTwo}
          id="slider-2"
          onInput={(e) => {
            setSliderTwo(parseInt((e.target as HTMLInputElement).value));
            slideTwo();
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
