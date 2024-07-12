import { useEffect, useState } from "react";
import { getWeather, getLocation } from "../apiRequest";

import Searchfrom from "../components/Searchfrom";
import Result from "../components/Result";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [city, setCity] = useState(null);
  const [isToday, setIsToday] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getLocation()
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error.message);
        } else {
          setLocationData(data);
          setCity(data.city);
        }
      })
      .catch((err) => console.log(err));
    getWeather()
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error.message);
        } else {
          setWeatherData(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeInDay = (e) => {
    const dayWanted = e.target.id;
    if (dayWanted == "yesterday" && isToday == 1) {
      getWeather({
        action: "history",
        unixdt: locationData.time_zone.current_time_unix - 24 * 60 * 60,
        q: locationData.ip,
      }).then((data) => {
        if (data.error) {
          setErrorMessage(data.error.message);
        } else {
          setIsToday(0);
          setWeatherData({
            current: data.forecast.forecastday[0].day,
            date: data.forecast.forecastday[0].date,
          });
        }
      });
    }
    if (dayWanted == "tomorrow" && isToday == 1) {
      getWeather({
        action: "forecast",
        unixdt: locationData.time_zone.current_time_unix + 24 * 60 * 60,
        q: locationData.ip,
      }).then((data) => {
        if (data.error) {
          setErrorMessage(data.error.message);
        } else {
          setIsToday(2);
          setWeatherData({
            current: data.forecast.forecastday[0].day,
            date: data.forecast.forecastday[0].date,
          });
        }
      });
    }
    if (
      (dayWanted == "yesterday" && isToday == 2) ||
      (isToday == 0 && dayWanted == "tomorrow")
    ) {
      getWeather({
        q: locationData.ip,
      }).then((data) => {
        setWeatherData(data);
        setIsToday(1);
      });
    }
  };

  return (
    <main>
      <section>
        <Searchfrom
          methods={{
            setWeatherData,
            setCity,
            setLocationData,
            setErrorMessage,
          }}
        />
      </section>
      <section>
        {weatherData && locationData && (
          <Result
            data={{
              location: locationData,
              current: weatherData,
              isToday,
              handleChangeInDay,
              city,
            }}
          />
        )}
        {errorMessage && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <p className="fw-bold my-0">{errorMessage}</p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
