import githubIcon from "../assets/github.png";
function About() {
  return (
    <div className="container text-center py-2 about-page d-flex justify-content-center align-items-center flex-column">
      <h1>Weather App</h1>
      <h3 className="my-2 lh-base">
        Get Todays, Tomorrows, and Yesterdays Weather Of any City In the world,{" "}
      </h3>
      <p className="fw-bold mt-4">
        Created Using React and{" "}
        <a href="https://www.weatherapi.com/" target="_blank">
          https://www.weatherapi.com/{" "}
        </a>
        for The Data and The{" "}
        <a href="https://flagcdn.com/" target="_blank">
          https://flagcdn.com/{" "}
        </a>{" "}
        For the flags
      </p>
      <p className="fw-bold mt-4">
        Created By{" "}
        <a href="mailto:vishnuvardhanreddykonduru@gmail.com">@Kondur Vishnu Vardhan Reddy</a>
      </p>
      <p className="fw-bold mt-4">
        <a href="https://github.com/Chintu18-bot" target="_blank">
          Github <img src={githubIcon} width="32" height="32" />
        </a>
      </p>
    </div>
  );
}

export default About;
