import React from "react";

function Forecast({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <div>
            <h3>5-Day Forecast</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                {data.map((day, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px" }}>
                        <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                        <p>{day.main.temp}°C</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            alt="icon"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;