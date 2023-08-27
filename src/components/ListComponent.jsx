import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CityComponent from './CityComponent';
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchStateData = async () => {
            try {
                const response = await axios.get("https://www.universal-tutorial.com/api/states/india", {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwcmF0aGFwaGIxMzEwQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlpmaE5PMFRCbDhfbGlEeUZ1RXdJYVE0REhJS0UwQjY1alJjSWV4WmtsUmtnUXlEWXVqWmxPS1dlUndSSE5rQjN3Nm8ifSwiZXhwIjoxNjkzMjQzNjAyfQ.W0LUc5ha-eSzEsRU9kykpCsdzFw-gNjoCxVolz10Ipg', // Replace with your actual API key
                        'Accept': 'application/json'
                    }
                })

                const data = response.data;
                setState(data)
                console.log(data)
            } catch (error) {
                console.log("Error in fetching data", error)
            }
        }
        fetchStateData();
    }, [])


    return (
        <div>
            <center><h1>Select State and City</h1></center>
            <section style={{ display: 'flex', justifyContent: 'center' , gap: '30px' }}>
                <select>
                    <option value="">Select State</option>
                    {state.map((stateData, index) => (
                        <option key={index} value={stateData.state_code}>
                            {stateData.state_name}
                        </option>
                    ))}
                </select>
                <CityComponent stateDate={state} />
                <button onClick={() => navigate("/result")}>Submit</button>
            </section>

        </div>
    )
}

export default ListComponent