// import axios from "axios";
import React, { useEffect, useState } from "react";

const Cities = ({ selectedState }) => {
  const [city, setCity] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "a1ZWWGh4SFJObFRNWWFJbTJMNklPQ1VKaFRkcW1nTG5GODRFWUVtQQ=="
  );

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  useEffect(() => {
    if (selectedState) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/IN/states`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setCity(data);
          filterCitiesByState(data, selectedState);
        })

        .catch((error) => console.log("error", error));
    }
  }, [selectedState]);

  const filterCitiesByState = (cities, state) => {
    if (state) {
      const filtered = cities.filter(
        (city) => city.iso2 === "IN" && city.state_name === state
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };
  return (
    <div>
      {filteredCities.length > 0 ? (
        <select style={{ width: "100%" }}>
          {filteredCities.map((cities, index) => (
            <option key={index}>{cities.name}</option>
          ))}
        </select>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cities;
