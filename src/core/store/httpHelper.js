import axios from "axios";
let REACT_APP_API_ENDPOINT =
  "https://trackapi.nutritionix.com/v2/natural/nutrients";
let REACT_APP_API_ID = "3bf87442";
let REACT_APP_API_KEY = "089c86388352c1ba8098c9745a13af8f";
let REACT_APP_API_USER_ID = "ManikantaDongala";

const BaseURL = REACT_APP_API_ENDPOINT;

const oHeaders = {
  headers: {
    "x-app-id": REACT_APP_API_ID,
    "x-app-key": REACT_APP_API_KEY,
    "x-remote-user-id": REACT_APP_API_USER_ID,
  },
};

export const HttpPost = async (aParams) => {
  let oResponse = await axios.post(BaseURL, aParams, oHeaders);
  return oResponse?.data;
};
