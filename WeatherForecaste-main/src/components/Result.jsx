import leftArrowSrc from "../assets/angle-left.svg";
import rightArrowSrc from "../assets/angle-right.svg";
function Result({ data }) {
  const { current: weatherData, location, isToday, handleChangeInDay } = data; // the weather api also gives lcoation but not accurate so i use other location api
  const current = weatherData.current;
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-3">
      <div className="d-flex justify-content-between w-100">
        <div
          className="day-changer  position-relative"
          onClick={handleChangeInDay}
        >
          {isToday > 0 && (
            <>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                id="yesterday"
              ></div>

              <p>{isToday == 1 ? "Yesterday" : "Back To Today"}</p>
              <img src={leftArrowSrc} alt="" className="arrow" />
            </>
          )}
        </div>
        <div
          className="day-changer position-relative"
          onClick={handleChangeInDay}
        >
          {isToday < 2 && (
            <>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                id="tomorrow"
              ></div>
              <p>{isToday == 1 ? "Tomorrow" : "Back To Today"}</p>
              <img src={rightArrowSrc} alt="" className="arrow" />
            </>
          )}
        </div>
      </div>
      <div className="location-info my-3 d-flex flex-column w-100 ms-4 align-items-center">
        <h3 className="fw-bold">
          {location.country_name}{" "}
          <img
            src="https://th.bing.com/th/id/OIG2.ZwawMW5cjulT6UPWsHwH?w=1024&h=1024&rs=1&pid=ImgDetMain"
            width="64"
            height="38"
            alt=""
          />
        </h3>
        <h5 className="fw-bold">{location.city}</h5>
        <div className="fst-italic">
          <p className="mx-2 fw-bold text-primary">
            {isToday == 1 ? weatherData.location.localtime : weatherData.date}
          </p>
        </div>
        <p className="mx-2 fw-bold text-success">
          {isToday == 1
            ? "Todays Weather"
            : isToday == 0
            ? "Yesterdays Weather"
            : "Tomorrows Weather"}
        </p>
      </div>
      <div className="weather-info  my-3 d-flex flex-column w-100 mx-auto justify-content-center align-items-center ">
        <div className="card border-secondary mb-3 ">
          <div className="card-body text-primary">
            <h5 className="card-title">{current.condition.text}</h5>
            <div className="d-flex justify-content-around ">
              <div className="position-relative">
                <img
                  className="weather-icon-img  position-absolute top-50 start-50 translate-middle"
                  src={current.condition.icon}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column">
                <p> {isToday == 1 ? "Tempreture " : "Average Tempreture"} </p>
                <p className="card-text text-center">
                  {current.feelslike_c || current.avgtemp_c}&deg;C
                </p>
                <p className="card-text text-center">
                  {current.feelslike_f || current.avgtemp_f}&deg;F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex small-cards-container flex-column weather-cards-2 ">
          <div className="card border-secondary mb-3 me-3">
            <div className="card-body text-primary">
              <h5 className="card-title">Air Conditions</h5>
              <div className="air-speed">
                <p className="my-0">
                  {isToday == 1 ? "Speed:" : "Average Speed :"}
                </p>
                <div className="d-flex justify-content-center">
                  <p className="card-text mx-3">
                    {" "}
                    {current.wind_kph || current.maxwind_kph}kph{" "}
                  </p>
                  <p className="card-text mx-3">
                    {" "}
                    {current.wind_mph || current.maxwind_mph}mph
                  </p>
                </div>
              </div>
              {isToday == 1 && (
                <>
                  <div className="wind-degree">
                    <p className="card-text my-0">Degree:</p>
                    <p className="text-center ">{current.wind_degree}&deg;</p>
                  </div>
                  <div className="air-dir">
                    <p className="card-text my-0">Direction:</p>
                    <p className="text-center">{current.wind_dir}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="card h-card border-secondary mb-3">
            <div className="card-body text-primary humidity-div">
              <h5 className="card-title">
                {isToday == 1 ? "Humidity" : "Avg Humidity"}
              </h5>
              <h2 className="position-absolute top-50 start-50 translate-middle">
                {current.humidity || current.avghumidity}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
