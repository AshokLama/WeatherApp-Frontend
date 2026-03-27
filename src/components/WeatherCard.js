import React from "react";

function WeatherCard({ data }) {
    if (!data || !data.main) return null;

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px auto", width: "250px" }}>
            <h2>{data.name}</h2>
            <p>{data.main.temp}°C</p>
            <p>{data.weather[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="icon"
            />
        </div>
    );
}

export default WeatherCard;