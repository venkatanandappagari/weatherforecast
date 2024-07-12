import { useState } from "react";
import { getWeather } from "../apiRequest";
function Searchfrom({ methods }) {
  const { setErrorMessage, setLocationData, setWeatherData } = methods;
  const [cityName, setCityName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getWeather({
        q: cityName,
      });
      if (response.error) {
        setErrorMessage(response.error.message);
      } else {
        const date_in_unix = Math.floor(
          new Date(response.location.localtime).getTime() / 1000
        );
        console.log(date_in_unix);
        setWeatherData(response);

        setLocationData({
          country_name: response.location.country,
          city: response.location.name,
          time_zone: { current_time_unix: date_in_unix },
        });
      }
    } catch (error) {
      console.log("Error were found");
    }
  };
  return (
    <div className="container search-form">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center mx-3"
      >
        <h1 className="text-center">Check The Weather Of A Specific City</h1>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit" className="btn btn-success mt-2">
          Look up The Weather
        </button>
      </form>
    </div>
  );
}

export default Searchfrom;
