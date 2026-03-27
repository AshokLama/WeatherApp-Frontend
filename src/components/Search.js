import React, { useState } from "react";

function Search({ onSearch, onLocation }) {
    const [city, setCity] = useState("");

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => onSearch(city)}>Search</button>
            <button onClick={onLocation}>My Location</button>
        </div>
    );
}

export default Search;