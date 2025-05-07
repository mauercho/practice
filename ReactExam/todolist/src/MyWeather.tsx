import React from "react";

interface MyProps {
  weather: string;
  children: React.ReactNode;
}

const MyWeather: React.FC<MyProps> = ({ children, weather }) => {
  return (
    <div>
      {children} <p>오늘의 날씨는 {weather} 입니다.</p>
    </div>
  );
};

export default MyWeather;
