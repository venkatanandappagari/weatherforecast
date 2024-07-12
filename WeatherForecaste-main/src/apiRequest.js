import { baseUrl, apikey, ipBaseUrl, ipApiKey } from "./keys";

const actions = {
  forecast: "forecast.json",
  history: "history.json",
  current: "current.json",
};
const defaultAction = "current.json";
const defaultQ = "auto:ip";

const getWeather = async (params) => {
  try {
    params = params ? params : {}; // to be able to call the function without any paramaters without the next line making error
    const { action, q, unixdt } = params;
    console.log(params);

    const result = await fetch(
      `${baseUrl}/${actions[action] || defaultAction}?key=${apikey}&q=${
        q || defaultQ
      }${unixdt ? "&unixdt=" + unixdt : ""}`
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("??????????????", error);
  }
};

const getLocation = async (ip) => {
  try {
    const result = await fetch(`${ipBaseUrl}/ipgeo?apiKey=${ipApiKey}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getWeather, getLocation };
