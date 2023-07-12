import React, { useEffect, useState } from "react";
import Cities from "./Cities";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();
  const [selectState, setSelectState] = useState([]);
  const [selectedState, setSelectedState] = useState("");

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
    fetch(
      "https://api.countrystatecity.in/v1/countries/IN/states",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setSelectState(data))
      .catch((error) => console.log("error", error));
  }, []);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="container  ">
      <h1 className="text-center">Select State and City</h1>
      <div className="d-flex align-items-center justify-content-evenly">
        {selectState.length > 0 ? (
          <select
            className="d-flex  justify-content-center my-5"
            style={{
              width: "20%",
            }}
            onChange={handleStateChange}
          >
            {selectState.map((state, stateid) => (
              <option key={stateid}>{state.name}</option>
            ))}
          </select>
        ) : (
          <p>Loading...</p>
        )}

        <Cities selectedState={selectedState} />

        <button onClick={() => navigate("/result")}>Submit</button>
      </div>
    </div>
  );
};

export default List;
