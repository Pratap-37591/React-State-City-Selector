import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CityComponent = ({ state }) => {
    const [city, setCity] = useState([]);


    useEffect(() => {
        const fetchStateData = async () => {
            try {
                const response = await axios.get(`https://www.universal-tutorial.com/api/cities/karnataka`, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwcmF0aGFwaGIxMzEwQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlpmaE5PMFRCbDhfbGlEeUZ1RXdJYVE0REhJS0UwQjY1alJjSWV4WmtsUmtnUXlEWXVqWmxPS1dlUndSSE5rQjN3Nm8ifSwiZXhwIjoxNjkzMjQzNjAyfQ.W0LUc5ha-eSzEsRU9kykpCsdzFw-gNjoCxVolz10Ipg', // Replace with your actual API key
                        'Accept': 'application/json'
                    }
                })

                const data = response.data;
                setCity(data)
                console.log(data)
            } catch (error) {
                console.log("Error in fetching data", error)
            }
        }
        fetchStateData();
    }, [])

    return (
        <div> <select>
            <option value="">Select City</option>
            {city.map((city, index) => (
                <option key={index} value={city.city_code}>
                    {city.city_name}
                </option>
            ))}
        </select></div>
    )
}

export default CityComponent